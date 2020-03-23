export default {
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loading: '加載中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  nameInvalid: '請輸入正確的姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  zvCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    confirm: '確定',
    startEnd: '開始/結束',
    weekdays: ['日', '壹', '二', '三', '四', '五', '六'],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `選擇天數不能超過 ${maxRange} 天`,
  },
  zvContactCard: {
    addText: '添加聯系人',
  },
  zvContactList: {
    addText: '新建聯系人',
  },
  zvPagination: {
    prev: '上一頁',
    next: '下一頁',
  },
  zvPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...',
  },
  zvSubmitBar: {
    label: '合計：',
  },
  zvCoupon: {
    unlimited: '無使用門檻',
    discount: (discount: number) => `${discount}折`,
    condition: (condition: number) => `滿${condition}元可用`,
  },
  zvCouponCell: {
    title: '優惠券',
    tips: '暫無可用',
    count: (count: number) => `${count}張可用`,
  },
  zvCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠碼',
  },
  zvAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼格式不正確',
    defaultAddress: '設為默認收貨地址',
    telPlaceholder: '收貨人手機號',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇省 / 市 / 區',
  },
  zvAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房間號等信息',
  },
  zvAddressList: {
    add: '新增地址',
  },
};
