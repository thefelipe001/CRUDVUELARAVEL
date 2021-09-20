
		new Vue({
			//ID que se llamara en la vista
			el: '#crud',
			created: function()
			{
				//Mostrar
				this.getKeeps();


			},
			data:{
			   felipe:[],
			   newKeep:'',
			   errors:[]
			},
			methods: {
				//Mostrar
				getKeeps: function()
				{
					var urlKeeps= 'tasks';
					axios.get(urlKeeps).then(response => {

						this.felipe= response.data
					});
				},
				//Para eliminar Registros
				deleteKeep: function(keep)
				{

					var url='tasks/'+keep.id;
					axios.delete(url).then(response=>{
						this.getKeeps();
						//Mensaje
						toastr.success('Mensaje Eliminado');

					});

				},
				//Crear
				createKeep: function(){
					var url='tasks';
					axios.post(url,{
						keep: this.newKeep
					}).then(response=>{
						this.getKeeps();
						this.newKeep='';
						this.errors=[];
						$('#create').modal('hide');
						toastr.success('Nueva tarea creada con existo');
					}).catch(errors=>{
						this.errors=errors.response.data
					});



				}




			}
			
		});