const { RESTDataSource } = require("apollo-datasource-rest");

class staffAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://performace-massage.firebaseio.com";
  }

  async getAllStaff() {
    const response = await this.get("/staff.json");
    return Array.isArray(response)
      ? response.map(staff => this.staffReducer(staff))
      : [];
  }

  async getStaffById({ staffId }) {
    const response = await this.get("/staff.json");
    const member = response.find(staff => staff.id == staffId);

    return this.staffReducer(member);
  }

  /**
   * Use the reducer to return data in a usable format
   * e.g.
   *
   * return {
   *  id: staff.id || 0,
   *  firstName: staff.firstName,
   *  lastName: staff.lastName
   * };
   *
   * @param staff
   * @returns {*}
   */
  staffReducer(staff) {
    return staff;
  }
}

module.exports = staffAPI;
