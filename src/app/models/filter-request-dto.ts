export class FilterRequestDto {
  // reg_num: string;
  filter_fio: string;
  filter_position: string;
  // birthday: string;
  // pol: string;


  constructor(reg_num: string, position: string, name: string, surname: string, patronymic: string, birthday: string, pol: string) {
    // this.reg_num = reg_num;
    this.filter_fio = (name + " " + surname + " " + patronymic).trim();
    this.filter_position = position;
    // this.birthday = birthday;
    // this.pol = pol;
  }
}
