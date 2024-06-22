import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(75, 201, 213, 0.8);
  //background: linear-gradient(45deg, #3aafb9, #0e5c63);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border: transparent;
    font-size: 1.3rem;
    color: var(--primary-500);
    cursor: pointer;
    align-items: center;
    display: inline-flex;
    margin: 2rem;
    box-shadow: 0 1px 0 0 rgba(150, 50, 5, 0.1);
  }
  .toggle-btn:hover {
    transform: scale(1.1);
    color: #97c8eb;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
