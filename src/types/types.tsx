export interface navbarmodal {
  modal: boolean;
  settingModal: () => void;
}
export interface dragdropArea {
  file: any;
  dropFile: (file: any) => void;
}

export interface notesInfo {
  file: any;
}

export interface notes {
  subjects: NoteCard[];
  total_passed_credits: number;
  total_non_passed_credits: number;
  mean_grades: number;
  student: student;
  card_date: string;
}

export interface NoteCard {
  id: number;
  name: string;
  semester: number;
  ordinal_year: number;
  grade: number;
  credit: number;
  status: string;
}

export interface progressBar {
  progressPercentage: number;
}

export interface student {
  name: string;
  grade: string;
  school: string;
}

export interface accordion {
  progressPercentage: number;
  subjects: NoteCard[];
}
