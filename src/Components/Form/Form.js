import React, {Component} from 'react';
import './Form.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'


// import { DatetimeInput } from 'react-datetime-inputs'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const types = [
  {
    value: true,
    label: 'Evento'
  },
  {
    value: false,
    label: 'Servicio'
  }

];

const eventCategories = [
{
  value: 'Sport',
  label: 'Deporte',
},
{
  value: 'Academics',
  label: 'Académico',
},
{
  value: 'Cultural',
  label: 'Cultural',
},
];

const serviceCategories = [
{
  value: 'Administrative',
  label: 'Administrativo',
},
{
  value: 'Academics',
  label: 'Académico',
}
];

const locations = [
  {value :'5c549598573ea33fb2afb780',
   label : 'Escuela de Cine y Televisión' },
  {value : '5c549598573ea33fb2afb776',
   label : 'Escuela de Medicina' },
  {value : '5c549598573ea33fb2afb77e',
   label : 'Museo de Arte'},
  {value : '5c549598573ea33fb2afb774',
   label : 'Instituto de Extensión e Investigación'},
  {value : '5c549598573ea33fb2afb773',
   label : 'Edificio de Química'},
  {value : '5c549598573ea33fb2afb783',
   label : 'Biblioteca Central Gabriel García Márquez'},
  {value : '5c549598573ea33fb2afb77c',
   label : 'Edificio de Ciencias Agrarias'},
  {value : '5c549598573ea33fb2afb77f',
   label : 'Conservatorio de Musica'},
  {value : '5c549598573ea33fb2afb781',
   label : 'Edificio Orlando Fals Borda'},
  {value : '5c549598573ea33fb2afb784',
   label : 'Edificio de Ciencias'},
  {value : '5c549598573ea33fb2afb77a',
   label : 'Edificio Posgrados de Ciencias Humanas'},
  {value : '5c549598573ea33fb2afb77b',
   label : 'Edificio de Geociencias'},
  {value : '5c549598573ea33fb2afb782',
   label : 'Edificio de Ciencias Económicas'},
  {value : '5c549676573ea34015bf63ff',
   label : 'Edificio de Física, Estadistica y Matemáticas (FEM)'},
  {value : '5c549676573ea34015bf6400',
   label : 'Edificio de Enfermería'},
  {value : '5c54971f573ea34050326bca',
   label : 'Edifio veterinaria y zootecnia'},
  {value : '5c5498bc573ea3417c59c8b1',
   label : 'León de Greiff'},
  {value : '5c549933573ea341ac4bdf31',
   label : 'Edificio Ciencia y Tecnología (CyT)'},
  {value : '5c5499fe573ea34280f8b4ab',
   label : 'Edificio Insignia de Ingeniería'},
  {value : '5c5499fe573ea34280f8b4ac',
   label : 'Edificio Aulas de Ingeniería'}
]


var auxOptions = eventCategories;


class Form extends Component {

  state = {
      name: '',
      isEvent: '',
      cat: '',
      description: '',
      location: '',
      initDate: Date.now() ,
      finishDate: Date.now(),
  }

// changeState = () => {
//   this.setState({
//     event: {
//       ...this.state.event,
//       name: document.getElementById('name').value,
//       type: document.getElementById('type').value,
//       cat: document.getElementById('cat').value
//     }
//   })
// }

// handleChange = name => event => {
//   console.log(event.target.value);
//
//   this.setState({
//     ...this.state.event,
//     [name]: event.target.value });
// };

handleStartDateChange = date => {
  console.log(date)
    this.setState({
      initDate: date
    });
  };

  handleEndDateChange = date => {
      this.setState({
        finishDate: date
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value});

    if (name === 'isEvent') {
      auxOptions = (event.target.value === 'Service')? serviceCategories : eventCategories;
    }
  };

  check = () => {
    axios.post('http://192.168.1.118:5000/addEvents', this.state).then(res => {
      console.log(res.data)
    })
  }

  render() {
    const { classes } = this.props;

    return (<div className="Form">
      <header className="Form-header">
        <div className="Header">
          <h4>
            Añadir evento
          </h4>
        </div>
        <div className="Content">
        <div className ="Wrapper">
            <TextField helperText="Dale un nombre a tu evento" id="name" onChange={this.handleChange('name')} label="Nombre "  type="name" autoComplete="current-name" margin="normal"/>
            <TextField
            id="isEvent"
            select
            label="Tipo"
            className={classes.textField}
            value={this.state.isEvent}
            onChange={this.handleChange('isEvent')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Seleccione el tipo de evento"
            margin="normal"
          >
            {types.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="Wrapper">
          <TextField
          id="cat"
          select
          label="Categoría"
          className={classes.textField}
          value={this.state.cat}
          onChange={this.handleChange('cat')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Seleccione la categoria del evento"
          margin="normal"
        >
          {auxOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id="cat"
        select
        label="Localización"
        className={classes.textField}
        value={this.state.location}
        onChange={this.handleChange('location')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Selecciona un edificio para ubicar tu evento"
        margin="normal"
      >
        {locations.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
        </div>
        <div className="Wrapper-I">
      <TextField
          id="standard-full-width"
          onChange={this.handleChange('description')}
          label="Descripción"
          style={{ margin: 8 }}
          placeholder="Cuentanos de tu evento"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className="Wrapper">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.grid} justify="space-around">
              <DatePicker
                margin="normal"
                label="Fecha de inicio"
                value={this.state.initDate}
                onChange={this.handleStartDateChange}
              />
              <TimePicker
                margin="normal"
                label="Hora de inicio"
                value={this.state.initDate}
                onChange={this.handleStartDateChange}
              />
            </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className="Wrapper">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container className={classes.grid} justify="space-around">
            <DatePicker
              margin="normal"
              label="Fecha de finalización"
              value={this.state.finishDate}
              onChange={this.handleEndDateChange}
            />
            <TimePicker
              margin="normal"
              label="Hora de finalización"
              value={this.state.finishDate}
              onChange={this.handleEndDateChange}
            />
          </Grid>
      </MuiPickersUtilsProvider>
    </div>
        </div>
        <div className="Buttons-wrapper">
              <div className="Feature-buttons" >Cancelar</div>
              <div className="Feature-buttons" onClick={this.check}>Enviar</div>
        </div>
      </header>
    </div>);
  }
}

export default  withStyles(styles)(Form);
