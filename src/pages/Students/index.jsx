import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../animations/loading.json";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

// GET - pegar uma informação
// POST - cadastrar/criar uma informação
// PUT - alterar/editar uma informação
// DELETE - deletar uma informação

useEffect(() => {
    axios.get("https://randomuser.me/api?results=5").then(({ data }) => {
        setStudents(data.results);
    });
}, []);

//[] array vazio como segundo parâmetro do useEffect
//não esquecer, ou ele fará uma requisição constante na api

useEffect(() => {
    if (students.length > 0) {
        setTimeout(() => {
        setLoading(false);
        }, 1200);
    }
}, [students]);

return (
    <>
      <Container maxWidth="sm">
        {loading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.id.value}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{student.id.value}</TableCell>
                    <TableCell align="right">{student.name.first}</TableCell>
                    <TableCell align="right">{student.dob.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Students;