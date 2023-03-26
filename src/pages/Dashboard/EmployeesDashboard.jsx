import { Box, Typography } from '@mui/material'
import React from 'react'
import { EmployeesBarCharts, EmployeesCharts, Sidebar, EmployeesTables, EmployeesTablesPart2, EmployeesTablesPart3, EmployeesTablesPart4, EmployeesTablesPart5, EmployeesTablesPart6 } from '../../components'
import { datatable, datatable1, datatable2, datatable3, datatable4, datatable5, datatable6, data, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12} from '../../utils/sampleData'


const EmployeesDashboard = () => {
      
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1, height: '100%', width:'100%'}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>

        <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', height:'100%', width:'100%'}} >

            <Typography variant='h3' color="black" fontWeight={700} sx={{ display:'flex', justifyContent:'center'}}>Employees REPORTS</Typography>
            <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 1</Typography>
            <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>
            <Box sx={{ display:'flex', p:4, flexDirection:'column',height: '100%', width: '100%', alignItems:'center',justifyContent:'space-between' }}>

                <Box sx={{height:'400px', width:'100%', flexDirection:'column', display:'flex', gap:2}}>
                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age</Typography>
                      <EmployeesCharts data={data}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Sex assigned at birth</Typography>
                      <EmployeesCharts data={data1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2' }}>
                    <Typography variant="h6" fontWeight={700}  >Civil Status</Typography>
                      <EmployeesCharts data={data2}/>
                   </Box>

                   <Box sx={{ display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Ethnicity</Typography>
                      <EmployeesBarCharts data={data3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Number of Children</Typography>
                      <EmployeesCharts data={data4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age Range of Children</Typography>
                      <EmployeesBarCharts data={data5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Highest Educational Attainment</Typography>
                      <EmployeesCharts data={data6}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status of Spouse/Partner</Typography>
                      <EmployeesCharts data={data7}/>
                   </Box>

                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Employment</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status </Typography>
                      <EmployeesCharts data={data8}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Position</Typography>
                      <EmployeesBarCharts data={data9}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Monthly Salary Bracket</Typography>
                      <EmployeesBarCharts data={data10}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Place of Assignment</Typography>
                      <EmployeesBarCharts data={data11}/>
                   </Box>  

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Accumulate Number of Years</Typography>
                      <EmployeesCharts data={data12}/>
                   </Box>

                   <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
                      <EmployeesTables data={datatable}/>

                    <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
                    <EmployeesTables data={datatable1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
                    <EmployeesTablesPart2 data={datatable2}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <EmployeesTablesPart3 data={datatable3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <EmployeesTablesPart4 data={datatable4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <EmployeesTablesPart5 data={datatable5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
                    <EmployeesTablesPart6 data={datatable6}/>
                   </Box>

                </Box> 
                
                
                

            </Box>

        </Box>
        
    </Box>
  )
}


export default EmployeesDashboard