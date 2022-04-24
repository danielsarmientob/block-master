import styled from '../lib/styled-components.js'

// export default styled.button`
//   font-size: 1rem;
//   background: #3f69ff;
//   padding: 1em;
//   color: white;
//   border: none;
//   border-radius: .5em;
// `
export default styled.button`
  position: absolute;
  height: var(--height-input-header);
  padding: .5em 1em;
  box-sizing: border-box;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  right: 0;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  // padding: 0.375rem 0.75rem;
  background: var(--primary);
  line-height: 0;
  vertical-aligne: middle;
`