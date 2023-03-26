import { Box, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { faculty1Request, publicRequest } from '../../../../client/src/utils/publicRequest'
import { FacultyBarCharts, FacultyCharts, Sidebar, FacultyTables, FacultyTablesPart2, FacultyTablesPart3, FacultyTablesPart4, FacultyTablesPart5, FacultyTablesPart6 } from '../../components'
import { datatable, datatable1, datatable2, datatable3, datatable4, datatable5, datatable6, data, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12} from '../../utils/sampleData'


const FacultyDashboard = () => {
      const [ageData, setAgeData] = useState([])
      const [loading,setLoading] = useState(false)

      useEffect(() =>{  
        setLoading(true)
        const GetAllData = async (req,res) =>{
          try {
            
            const getAgeData = await faculty1Request.get('/getAges')

            setLoading(false)
          } catch (error) {
            
            setLoading(false)

          }
        }
        GetAllData()

      },[setAgeData])
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1, height: '100%', width:'100%'}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>

        <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', height:'100%', width:'100%'}} >

            <Typography variant='h3' color="black" fontWeight={700} sx={{ display:'flex', justifyContent:'center'}}>FACULTY REPORTS</Typography>
            <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 1</Typography>
            <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>
            <Box sx={{ display:'flex', p:4, flexDirection:'column',height: '100%', width: '100%', alignItems:'center',justifyContent:'space-between' }}>

                <Box sx={{height:'400px', width:'100%', flexDirection:'column', display:'flex', gap:2}}>
                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age</Typography>
                      <FacultyCharts data={data}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Sex assigned at birth</Typography>
                      <FacultyCharts data={data1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2' }}>
                    <Typography variant="h6" fontWeight={700}  >Civil Status</Typography>
                      <FacultyCharts data={data2}/>
                   </Box>

                   <Box sx={{ display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Ethnicity</Typography>
                      <FacultyBarCharts data={data3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Number of Children</Typography>
                      <FacultyCharts data={data4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age Range of Children</Typography>
                      <FacultyBarCharts data={data5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Highest Educational Attainment</Typography>
                      <FacultyCharts data={data6}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status of Spouse/Partner</Typography>
                      <FacultyCharts data={data7}/>
                   </Box>

                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Employment</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status </Typography>
                      <FacultyCharts data={data8}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Position</Typography>
                      <FacultyBarCharts data={data9}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Monthly Salary Bracket</Typography>
                      <FacultyBarCharts data={data10}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Place of Assignment</Typography>
                      <FacultyBarCharts data={data11}/>
                   </Box>  

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Accumulate Number of Years</Typography>
                      <FacultyCharts data={data12}/>
                   </Box>

                   <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
                      <FacultyTables data={datatable}/>

                    <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
                    <FacultyTables data={datatable1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
                    <FacultyTablesPart2 data={datatable2}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart3 data={datatable3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart4 data={datatable4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart5 data={datatable5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
                    <FacultyTablesPart6 data={datatable6}/>
                   </Box>

                </Box> 
                
                
                

            </Box>

        </Box>
        
    </Box>
  )
}


export default FacultyDashboard