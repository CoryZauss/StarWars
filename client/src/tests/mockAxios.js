export default {
  get: jest.fn(()=> Promise.resolve({data: [{ name: 'luke', title: 'episode 4', species: 'human', films: 'films'}]}))
}