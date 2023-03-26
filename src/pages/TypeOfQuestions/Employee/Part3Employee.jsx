import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar } from '../../../components'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { employees1Request, publicRequest } from '../../../utils/publicRequest';
import BeatLoader from "react-spinners/BeatLoader";

const Part3Employee = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const part = location.pathname

  //get table name using split
  const getTable = part.split('/').join("").toLowerCase()
  //actual table names
  const actualTableName = getTable.split('questionpart3')[0]

  const [questionData,setQuestionData] = useState([])

  const [loading, setLoading] = useState(true)
  
  console.log(getTable)


  const hanldeChoice = () => {}

  
  const handleDelete = async (e) => {
    try {
       await employees1Request.delete(`/employees3/${e.idemployeesquestionpart3}`)
       console.log("Delete Successfuly")
       setQuestionData(prevState => prevState.filter(row => row[`id${getTable}`] !== e[`id${getTable}`]))

    } catch (error) {
      console.log("Error")
      
    }
  }
  

  useEffect(() =>{
    const getData = async () =>{
      setLoading(true)

      try {
        //eto ung pagtawag sa database na nasa api folder
        const res = await employees1Request.get(`employees3`)
        setQuestionData(res.data)
        setLoading(false)

      } catch (error) {
        
      }
    }
    getData()
  },[setLoading,getTable, setQuestionData])


  //eto ung columns nung table
  // ung mga field, yan ung naakukuha sa database..
  const columns = [
    
    { field: 'question', headerName: 'Question', width: 500, flex: 2 },
    { field: 'question_order', headerName: 'Order', width: 25 },
    { field: 'type', headerName: 'Type', width: 100 },
    {
      field: 'toggle',
      headerName: 'Toggle',
      width: 100,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex:1,
      width: 150, // Increase width to make it wider
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

            <Link to={`edit/${params.row[`idemployeesquestionpart3`]}`}>
            <Button color="primary" 
                // onClick={() => handleQuestion(params.row[`id${getTable}`])} 
                variant="contained" size="small">
                Question
              </Button>
            </Link>
              
            <Link to={`choice/${params.row[`idemployeesquestionpart3`]}`}>
              <Button color="info" variant="contained" size="small">
                Choices
              </Button>
            </Link>

            <Button onClick={() =>handleDelete(params.row)} color="error" variant="contained" size="small">
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];
  
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
    <Box sx={{display:'flex', flex:.5}}>
      <Sidebar />
    </Box>
    <Box sx={{display:'flex', flex:2, p:4}}>
      <Box sx={{display:'flex', flexDirection:'column', gap:2, width: '100%'}}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '100%'}}> 
        <Typography variant='h5' color="text.disabled" sx={{fontWeight:"bold", textTransform: 'uppercase'}}>Employee Questions Part 3</Typography>
        
            <Link to={`${part}/add`}>
              <Button variant='contained' color="success">Add New Question</Button>
            </Link>
        </Box>

        {loading ? (
           <BeatLoader 
           color="#36d7b7" 
           loading={loading}
           size={50}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
        ):
        (
          <Box sx={{height: '800px'}}>
        <DataGrid
          {...questionData}
          rows={loading ? [] : questionData}
          getRowId={(row) => row[`id${getTable}`]}
          columns={columns}
          pageSize={9}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
      />
      
        </Box>
        )}
      </Box>
    </Box>
</Box>
  )
}

export default Part3Employee