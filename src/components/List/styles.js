import styled from 'styled-components'

export const GroceryList = styled.div`

`
export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: all 0.3s linear;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-transform: capitalize;

  :hover {
    color: hsl(210, 22%, 49%);
    background: hsl(210, 36%, 96%);
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    color: hsl(209, 61%, 16%);
    letter-spacing: 2px;
    transition: all 0.3s linear;
   :hover {
    color: hsl(210, 22%, 49%);
   }
  }
`
export const ButtonContainer = styled.div`

`
export const EditButton = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.15rem;
  transition: all 0.3s linear;
  color: hsl(125, 71%, 66%);

  :hover {
    color: hsl(125, 67%, 44%);
  }
`
export const DeleteButton = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.15rem;
  transition: all 0.3s linear;
  color: hsl(360, 71%, 66%);

  :hover {
    color: hsl(360, 67%, 44%);
  }
`
// export const Container = styled.div`
  
// `
// export const Container = styled.div`
  
// `
