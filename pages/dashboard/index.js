// import { useState } from 'react';

// material-ui
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  // MenuItem,
  Stack,
  // TextField,
  Typography
} from '@mui/material';

// project import

import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
// import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [value, setValue] = useState('today');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={20} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={20} sm={10} md={5} lg={4}>
        <AnalyticEcommerce title="Pending Incidents" count="4" percentage={59.3} isLoss color="warning" />
      </Grid>
      <Grid item xs={12} sm={10} md={5} lg={4}>
        <AnalyticEcommerce title="Resolved Incidents" count="78" percentage={70.5} />
      </Grid>
      <Grid item xs={12} sm={10} md={5} lg={4}>
        <AnalyticEcommerce title="Total Incidents" count="180" percentage={27.4} />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Weekly Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h3">10</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      <Grid item xs={15} md={20} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytic Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      {/* <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid> */}
      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Incident History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                // '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemText primary={<Typography variant="subtitle1">Incident #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary={<Typography variant="subtitle1">Incident #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={<Typography variant="subtitle1">Incident #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
