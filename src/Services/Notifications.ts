import {Notyf} from 'notyf'

export enum SccMsg{
    ADDED_TASK = 'Added task successfully',
    UPDATED_TASK = 'Updated task successfully',
    DELETED_TASK = 'Deleted task successfully',
    GOT_TASKs = 'GOT tasks successfully'
}

class Notify{

    private notification = new Notyf({duration:4000, position:{x:"left",y:"top"}});
    
		public success(message: string){
        this.notification.success(message);
    }

    public error(message: string){
        this.notification.error(message);
    }
}
const notify = new Notify();
export default notify;