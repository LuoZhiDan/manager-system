import errorObj from '../config/errorcode.config';
import enumObj from '../config/enum.config';

export default function(){
    this.get = (name) => {
        return enumObj[name] || errorObj[name];
    }
}