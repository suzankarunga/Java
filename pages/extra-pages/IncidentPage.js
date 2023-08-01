import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './dashboard.css';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';

function createData(
  incidentNo,
  dateAndTime,
  incidentType,
  microService,
  priority,
  reportedBy,
  estimatedTimeOfRestoration,
  incidentDescription,
  restorationDateTime,
  schedule,
  status,
  restoredBy,
  restorationDescription,
  followUpSteps,
  followUpInCharge,
  closureNotes
) {
  return {
    incidentNo,
    dateAndTime,
    incidentType,
    microService,
    priority,
    reportedBy,
    estimatedTimeOfRestoration,
    incidentDescription,
    restorationDateTime,
    schedule,
    status,
    restoredBy,
    restorationDescription,
    followUpSteps,
    followUpInCharge,
    closureNotes
  };
}

const rows = [
  createData(
    845,
    new Date(),
    'Server Error',
    'Koha Service',
    'High',
    'John Doe',
    '2023-06-27 10:00 AM',
    'Description 1',
    new Date(),
    'Schedule 1',
    'pending',
    'John Smith',
    'Restoration Description 1',
    'Follow-up steps 1',
    'John Doe',
    'Closure notes 1'
  ),
  createData(
    98764564,
    new Date(),
    'Deployment error',
    'Koha Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Resolved',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  ),
  createData(
    98764564,
    new Date(),
    'Security Breach',
    'Student Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Down',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  ),
  createData(
    98764564,
    new Date(),
    'Network Connectivity Loss',
    'Messaging Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Resolved',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  ),
  createData(
    98764564,
    new Date(),
    'Certificate Issue',
    'Messaging Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Down',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  ),
  createData(
    98764564,
    new Date(),
    'Server Error',
    'Koha Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Resolved',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  ),
  createData(
    98764564,
    new Date(),
    'Certificate Issue',
    'HRM Service',
    'Medium',
    'Jane Doe',
    '2023-06-28 2:00 PM',
    'Description 2',
    new Date(),
    'Schedule 2',
    'Down',
    'Jane Smith',
    'Restoration Description 2',
    'Follow-up steps 2',
    'Jane Doe',
    'Closure notes 2'
  )
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| INCIDENT TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'incidentNo',
    align: 'left',
    disablePadding: false,
    label: 'Incident No.'
  },
  {
    id: 'dateAndTime',
    align: 'left',
    disablePadding: false,
    label: 'Date & Time'
  },
  {
    id: 'incidentType',
    align: 'left',
    disablePadding: false,
    label: 'Incident Type'
  },
  {
    id: 'microService',
    align: 'left',
    disablePadding: false,
    label: 'Microservice'
  },
  {
    id: 'priority',
    align: 'left',
    disablePadding: false,
    label: 'Priority'
  },
  {
    id: 'reportedBy',
    align: 'left',
    disablePadding: false,
    label: 'Reported By'
  },
  {
    id: 'estimatedTimeOfRestoration',
    align: 'left',
    disablePadding: false,
    label: 'Estimated Restoration Time'
  },
  {
    id: 'incidentDescription',
    align: 'left',
    disablePadding: false,
    label: 'Incident Description'
  },
  {
    id: 'restorationDateTime',
    align: 'left',
    disablePadding: false,
    label: 'Restoration Date & Time'
  },
  {
    id: 'schedule',
    align: 'left',
    disablePadding: false,
    label: 'Schedule'
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'restoredBy',
    align: 'left',
    disablePadding: false,
    label: 'Restored By'
  },
  {
    id: 'restorationDescription',
    align: 'left',
    disablePadding: false,
    label: 'Restoration Description'
  },
  {
    id: 'followUpSteps',
    align: 'left',
    disablePadding: false,
    label: 'Follow-up Steps'
  },
  {
    id: 'followUpInCharge',
    align: 'left',
    disablePadding: false,
    label: 'Follow-up In Charge'
  },
  {
    id: 'closureNotes',
    align: 'left',
    disablePadding: false,
    label: 'Closure Notes'
  }
];

// ==============================|| INCIDENT TABLE - HEADER ||============================== //

function IncidentTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

IncidentTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const IncidentStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 1:
      color = 'warning';
      title = 'Down';
      break;
    case 2:
      color = 'success';
      title = 'Resolved ';
      break;
    case 3:
      color = 'Primary';
      title = 'Pending';
      break;
    default:
      color = 'error';
      title = 'Unknown';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

IncidentStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function IncidentTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <IncidentTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.trackingNo);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.trackingNo}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.dateAndTime.toLocaleString()}</TableCell>
                  <TableCell align="left">{row.incidentType}</TableCell>
                  <TableCell align="left">{row.microService}</TableCell>
                  <TableCell align="left">{row.priority}</TableCell>
                  <TableCell align="left">{row.reportedBy}</TableCell>
                  <TableCell align="left">{row.estimatedTimeOfRestoration}</TableCell>
                  <TableCell align="left">{row.incidentDescription}</TableCell>
                  <TableCell align="left">{row.restorationDateTime.toLocaleString()}</TableCell>
                  <TableCell align="left">{row.schedule}</TableCell>
                  <TableCell align="left">
                    <IncidentStatus status={row.status} />
                  </TableCell>
                  <TableCell align="left">{row.restoredBy}</TableCell>
                  <TableCell align="left">{row.restorationDescription}</TableCell>
                  <TableCell align="left">{row.followUpSteps}</TableCell>
                  <TableCell align="left">{row.followUpInCharge}</TableCell>
                  <TableCell align="left">{row.closureNotes}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
