import styled from 'styled-components'

export const SectionCenter = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;

  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  padding: 2rem;

  :hover {
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 992px) {
  width: 95vw;
}
`
export const Form = styled.form`


h3 {
  color: hsl(205, 86%, 17%);
  margin-bottom: 1.5rem;
  text-align: center;
  margin-top: 0;
}
`
export const FormControl = styled.div`
  display: flex;
  justify-content: center;


  .grocery {
  padding: 0.25rem;
  padding-left: 1rem;
  background: hsl(210, 36%, 96%);
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: hsl(210, 22%, 49%);

  ::placeholder {
    font-family: var(--ff-secondary);
    color: hsl(210, 22%, 49%);
  }
}
`
export const SubmitButton = styled.button`
    background: hsl(205, 86%, 81%);
  border-color: transparent;
  flex: 0 0 5rem;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  cursor: pointer;
  content: hsl(205, 78%, 60%);
  transition: all 0.3s linear;
  font-size: 0.85rem;

  :hover {
    background: hsl(205, 78%, 60%);
    color: #fff;
  }
`
export const GroceryContainer = styled.div`
  margin-top: 2rem;
`
export const ClearButton = styled.button`
  text-transform: capitalize;
  width: 10rem;
  height: 1.5rem;
  display: grid;
  align-items: center;
  background: transparent;
  border-color: transparent;
  color: hsl(360, 71%, 66%);
  margin: 0 auto;
  font-size: 0.85rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-top: 1.25rem;

  :hover {
    color: hsl(360, 67%, 44%);
  }
`
// export const Container = styled.div`
  
// `
