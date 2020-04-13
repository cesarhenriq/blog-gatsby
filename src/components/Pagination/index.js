import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>Página anterior</Link>}
    <p>{currentPage} de {numPages}</p>
    {!isLast && <Link to={nextPage}>Proxima página</Link>}
  </S.PaginationWrapper>
)

export default Pagination

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.sRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}
