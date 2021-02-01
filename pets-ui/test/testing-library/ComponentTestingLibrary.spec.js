import * as React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, configure, waitFor } from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import PetsDashboard from '../../src/pages/PetsDashboard'

configure({ testIdAttribute: 'test-id' })

describe('Pets list should', () => {

  // Definir la respuesta al interceptar peticion
  const server = setupServer(
    // Definimos el handler de la peticion
    rest.get('http://localhost:9091/api/pets', (req, res, ctx) => {
      return res(ctx.json([
        {"id":"2a6278b0-778a-4aee-89e1-c166f72161b4", "name": "dog", "race": "labrador", "age": 5, "isVaccinated": true},
        {"id":"9226eae2-0044-445b-b004-b47859f0c09b","name": "cat", "race": "siames", "age": 3, "isVaccinated": true},
        {"id":"817173ff-c50e-4d21-aa67-8fc71b6524ce","name": "bat", "race": "chino", "age": 20, "isVaccinated": false}
      ]))
    }),
  )
  
  // Escuchamos peticiones
  beforeAll(() => server.listen())

  // Reseteamos los handlers
  afterEach(() => server.resetHandlers())

  // Cerramos conexión
  afterAll(() => server.close())

  test('load 3 Pets', async () => {
    // Renderizamos el componente PetsDashboard
    act(() => {
      render(<PetsDashboard />, { wrapper: MemoryRouter});
    })

    // Realizamos re intentos
    await waitFor(async () => {
      // Buscamos los elementos html y hacemos la validaciones
      expect(screen.queryAllByTestId('pet-item')).toHaveLength(3)
      expect(screen.queryByTestId("empty-pet-list")).not.toBeInTheDocument();
    })
  }) 

  test('show empty list message when getPets list is empty', async () => {
    // Reconfiguramos el handler para retornar un arreglo vacio
    server.use(
      rest.get('http://localhost:9091/api/pets', (req, res, ctx) => {
        return res(ctx.json([]))
    }))

    // Renderizamos el componente PetsDashboard
    act(() => {
      render(<PetsDashboard />, { wrapper: MemoryRouter});
    }) 

    // Realizamos re intentos
    await waitFor(async () => {
      // Buscamos los elementos html y hacemos la validaciones
      expect((screen.queryByTestId("empty-pet-list")).textContent).toEqual("No hay mascotas disponibles")
      expect(screen.getByTestId("empty-pet-list")).toBeVisible(); 
    })
  })
})