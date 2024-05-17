export const COMMON_CONST = {
  PageSize: 10,
  FormatDate: 'DD-MM-YYYY',
  FormatDateTime: 'DD/MM/YYYY - HH:mm',
  FormatDateServer: 'YYYY-MM-DD',
  FormatDateTimeServer: 'YYYY-MM-DD HH:mm:ss',
  FormatTime: 'HH:mm',

  FormatDayView: 'DD-MM-YYYY',
  FormatDateView: 'DD/MM/YYYY - hh:mm',
  FormatDateTimeView: 'DD/MM/YYYY - hh:mm A',
  FormatDateTypeView: 'd/m/Y',
  FormatDateTimeTypeView: 'd/m/Y - H:i',
};

export const COMMON_API_URL = {
  GetAppMetadata: '/app/setting/get',
  GetAppSetting: '/app/metadata/get',
  PostAppLogin: '/app/auth/login'
}

export const COMMON_REGEX = {
  Phone: '',
  Email: '',
  IdCard: '',
  HyperLink: '',
  NameRewrite: ''
}

export const COMMON_TINY_BASIC = {
  height: 300,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar:
    'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
}

export const COMMON_PAGE_TEMPLATE: {LayoutLeftRight: string, LayoutStep: string} = {
  LayoutLeftRight: 'LayoutPageLeftRight',
  LayoutStep: 'LayoutPageStep',
}
