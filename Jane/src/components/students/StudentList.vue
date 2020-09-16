<template>
    <div class="student">
      <el-card class="student-list">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
          <el-form-item>
            <el-button type="primary" @click="addStudent()">新增</el-button>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="formInline.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="formInline.number" placeholder="学号"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="formInline.region" placeholder="班级">
              <el-option label="框架9班" value="shanghai"></el-option>
              <el-option label="框架10班" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            border
            style="width: 100%">
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="number" label="学号" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="sex_test" label="性别" align="center"></el-table-column>
            <el-table-column prop="class" label="班级" align="center"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" class="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
                <el-button type="danger" size="mini" class="el-icon-delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 弹窗区域 -->
          <el-dialog :title="state ? '修改学生信息' : '新增学生信息'" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.number" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-radio v-model="form.sex" label="1">男</el-radio>
                <el-radio v-model="form.sex" label="2">女</el-radio>
              </el-form-item>
              <el-form-item label="班级" :label-width="formLabelWidth">
                <el-select v-model="form.class" placeholder="请选择班级">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="sure">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 分页 -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total, prev, pager, next, jumper, sizes"
            :page-sizes="[10, 20, 30, 40, 50]"
            :total="total">
          </el-pagination>
          <!-- <Pageing></Pageing> -->
        </template>
      </el-card>
    </div>
</template>

<script>
import Pageing from '../common/Pageing'
export default {
  components: {
    Pageing
  },
  data () {
    return {
      total: 0, // 分页的参数
      currentPage: 1, // 当前的页数
      pageSize: 10, // 每页显示数
      state: '',
      tableData: [],
      formInline: {
        user: '',
        region: ''
      },
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '80px',
      options: [{
        value: '1',
        label: '框架1班'
      }, {
        value: '2',
        label: '框架2班'
      }, {
        value: '3',
        label: '框架3班'
      }, {
        value: '4',
        label: '框架4班'
      }, {
        value: '5',
        label: '框架5班'
      }, {
        value: '6',
        label: '框架6班'
      }, {
        value: '7',
        label: '框架7班'
      }, {
        value: '8',
        label: '框架8班'
      }, {
        value: '9',
        label: '框架9班'
      }, {
        value: '10',
        label: '框架10班'
      }],
      value: ''
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    sure () {
      if (this.state) {
        // 调用修改接口
        // this.service.put('接口地址', this.form)
      } else {
        // 调用新增接口
        // this.service.post('接口地址', this.form)
      }
    },
    // 新增按钮
    addStudent () {
      this.state = false
      this.form = {}
      this.dialogFormVisible = true
    },
    // 修改按钮
    updateInfo (row) {
      this.form = {...row}
      this.dialogFormVisible = true
      console.log(row)
      this.state = true
    },
    getDataList () {
      // 接收token请求
      this.service.get('1598764235264')
        .then(res => {
          if (res.data.status === '200') {
            res.data.data.forEach(item => {
              item.sex === '1' ? item.sex_test = '男' : item.sex_test = '女'
            })
            this.tableData = [...res.data.data]
            this.total = res.data.total
          }
        })
      // 捕捉错误
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      console.log('submit!')
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.pageSize = val
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang='scss'>
.student{
    .student-list{
      margin: 20px 0;
    }
    .el-form{
      text-align: left;
    }
    .el-pagination{
      margin-top: 20px;
    }
}

</style>
