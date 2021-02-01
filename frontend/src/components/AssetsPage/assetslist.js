import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteAnAsset } from "../../store/portfolio";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

function AssetsLister({ AssetsList }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const Asset = ({ theAsset }) => {
    const deleteAsset = (e) => {
      // e.preventDefault();

      dispatch(deleteAnAsset(theAsset.id));
      <Redirect to="portfolio/:id" />;
    };

    const linkUrl = `/asset/${theAsset.id}`;
    return (
      <div>
        <Link to={linkUrl}> {theAsset.name} </Link>
        <div> {theAsset.costBasis} </div>
        <div> {theAsset.profit} </div>
        <div>{theAsset.percentage} </div>
        <div>
          <button type="button" onClick={deleteAsset}>
            delete
          </button>
        </div>
      </div>
    );
  };

  const columns = [
    { id: "symbol", label: "Symbol", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "rating",
      label: "Rating",
      minWidth: 170,
      align: "right",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "price",
      label: "Price ($)",
      minWidth: 170,
      align: "right",
      // format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(symbol, name, rating, price) {
    return { symbol, name, rating, price };
  }
  let AssetsArray;
  AssetsArray = Object.values(AssetsList);
  const rows = AssetsArray.map((asset) => {
    const linkUrl = `/asset/${asset.id}`;
    return createData(
      <Link to={linkUrl}>{asset.symbol}</Link>,
      asset.name,
      asset.rating,
      asset.price
    );
  });

  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="tableContainer">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default AssetsLister;
