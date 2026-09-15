---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.input-peripherals-keyboard-joystick-mouse-etc
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 输入外围设备（键盘、操纵杆、鼠标等）

## 1. 范围与适用性

本PCR适用于单独供应、将人的操作转换为计算机输入的键盘、鼠标和操纵杆。前景生产数据包覆盖以外购成品部件进行的干式最终装配、功能测试和包装。声明单位为按质量归一化的生产单位，不代表不同设备具有等同输入服务。排除笔记本内置键盘、扫描仪、显示器、计算机、软件和维修服务。本类别的方法需求在于按配置开展电子装配核算、核对部件边界及按型号进行验收测试；共用材料规则不足以构成完整外设数据集。来源：`un-cpc-3-0-structure-2025`、`logitech-product-lifecycle-approach`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.input-peripherals-keyboard-joystick-mouse-etc |
| classification_refs | CPC 3.0: 45261 |
| covered_products | 单独供应的键盘；鼠标；计算机操纵杆 |
| excluded_products | 计算机集成总成；扫描仪；显示器；软件；维修服务 |
| representative_product | 一种有线键盘成品型号；鼠标和操纵杆数据集使用各自配置与验收证据 |
| production_route | 外购成品部件 → 干式装配 → 功能测试 → 包装 |
| market_state | 全新、测试合格、待出货；声明型号及随附附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产符合验收规格的指定人机输入外设 |
| How much | 同一型号合格设备成品净质量1 kg；报告对应件数 |
| How well | 按适用功能通过声明的按键动作、指针跟踪或轴响应测试；声明接口兼容性 |
| How long or cycle | 一个生产交付周期；不设默认寿命。下游比较须声明使用寿命和使用强度 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 输入外设（键盘、操纵杆、鼠标等） `fc64e9b7-ebef-47f8-a44c-25b47d5a3a32` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及设备功能；有线/无线接口；键盘机构或传感器/轴技术；验收测试；设备净质量及件数；随附电池化学体系/容量；随附线缆/接收器；物料清单版本；装配场址/年份；上游部件边界；单列包装质量 |

在数据集元数据或关联产品记录中声明每项必需限定信息；缺失信息即参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按合格品净产出质量归一化，不含运输包装。保留实测kg/件换算因子；不使用类别平均单件质量。 |
| energy_conversion | electricity | Net calorific value | MJ | 电表kWh按3.6 MJ/kWh换算为MJ。保留电网、电压及损耗边界。 |
| component_boundary | assembly | Mass | kg | 称量完整外购子组件；披露所含零件，避免传感器、开关、接头和电池电子器件重复计入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配厂门接收外购成品部件 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0: 45261 |
| recursive_input_rule | 外购完整外设在声明的返工路线中作为独立上游投入记录，不得以本输出递归复制成零负荷投入。返工须单独扩展过程图。 |
| upstream_dataset_requirement | 关联每种外购部件的制造数据集及入厂运输段；记录边界、地域、技术、时期及废物处理链接。 |
| disclosure | 将厂门到厂门装配结果与关联后的摇篮到厂门结果分开报告。本生产模块不构成完整成品足迹。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_production | assembly | 包括部件接收、装配、功能测试、包装、返工用电和制造报废。供应商注塑、电路板制造及焊接若已包含于部件数据集，不在前景重复计入。 | `logitech-product-lifecycle-approach` |
| boundary_extension | dataset | 声称完整生命周期结果前，须在独立声明的下游情景中补充产品配送、使用/充电、更换电池及寿命终结。不得将本装配模块作为完整生命周期结果。 | `logitech-carbon-impact-methodology` |
| boundary_completeness | assembly | 将每个物料清单项目及场址交换对应到原子清单行或明确的上游已含项目。所列条件行是起始清单，不允许遗漏键帽、脚垫、接收器或非ABS外壳。数据集验收前补充实际具体零件交换。若场内进行湿洗、焊接或注塑，须扩展过程图，分别记录每种化学品、公用工程介质、废物及排放。 | `logitech-product-lifecycle-approach` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 最终装配、测试及包装 | required | 声明的干式装配路线中全部型号 | foreground_production | 1 kg合格设备净产出 |

### 过程：最终装配、测试及包装（`assembly`）

#### 输入

##### 产品流

###### ABS注塑输入外设外壳 (`housing`)

inclusion_condition：安装该ABS外壳时；明确单一零件编号及树脂牌号。

- 选定流：ABS注塑输入外设外壳
- 流属性/单位：Mass / kg
- 数量规则：外壳净领用质量，包括报废外壳。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 已装配元器件的印制电路板 (`pcb`)

inclusion_condition：安装外购已装配电路板时；声明已包含的控制器、传感器及射频器件。

- 选定流：已装配元器件的印制电路板
- 流属性/单位：Mass / kg
- 数量规则：已装配电路板净领用质量；不重复计入板载元器件。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 键盘按键开关子组件 (`switch`)

inclusion_condition：机械键盘路线，且单独采购时。

- 选定流：键盘按键开关子组件 `941833e4-0249-45b4-abc8-1c0a6482f419`
- 流属性/单位：Mass / kg
- 数量规则：由领用数量及实测单件质量计算开关子组件净领用质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 键盘硅橡胶薄膜 (`membrane`)

inclusion_condition：薄膜键盘路线，且单独采购时。

- 选定流：键盘硅橡胶薄膜
- 流属性/单位：Mass / kg
- 数量规则：薄膜净领用质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 操纵杆轴机构 (`axis`)

inclusion_condition：操纵杆路线；以单一明确型号的机电轴子组件交付。

- 选定流：操纵杆轴机构
- 流属性/单位：Mass / kg
- 数量规则：轴机构净领用质量；声明包含的电位器或磁传感器。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 光学鼠标传感器模块 (`sensor`)

inclusion_condition：光学鼠标路线，且已装配电路板中不包含该传感器模块时。

- 选定流：光学鼠标传感器模块
- 流属性/单位：Mass / kg
- 数量规则：模块净领用质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### USB连接线 (`cable`)

inclusion_condition：有线外设或随附充电线时。

- 选定流：USB连接线
- 流属性/单位：Mass / kg
- 数量规则：连接线净领用质量；线缆组件边界包括接头。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 锂离子电池 (`battery`)

inclusion_condition：配备锂离子电池的可充电型号。

- 选定流：3C锂电池 `000abc1e-59e3-4336-bfd6-66575a4b0bda`
- 流属性/单位：Mass / kg
- 数量规则：电池净领用质量，附化学体系、容量及电池包边界。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### AA型碱性二氧化锰电池 (`alkaline`)

inclusion_condition：随附AA型碱性电池的型号。

- 选定流：碱性锌锰电池 `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- 流属性/单位：Number of items / Item(s)
- 数量规则：每kg合格产出对应的电芯净领用件数；保留实测电芯质量以核对物料清单。使用阶段的更换电池不在本生产数据包内。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 钢螺钉 (`screw`)

inclusion_condition：采用螺钉紧固时。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：螺钉净领用质量；记录钢材牌号及镀层。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 电力 (`electricity`)

inclusion_condition：使用电力的全部装配、测试和包装操作。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：产线电表读数加有依据的辅助用电分摊量，除以合格品产出质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 瓦楞纸箱 (`carton`)

inclusion_condition：使用瓦楞纸箱出货时。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：纸箱净领用质量，包括包装损耗；不计入产品净质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

#### 输出

##### 产品流

###### 输入外设（键盘、操纵杆、鼠标等） (`reference_product`)

inclusion_condition：每个数据集只对应一种声明的外设型号；该交换为一种实物成品，不混合不同设备功能。

- 选定流：输入外设（键盘、操纵杆、鼠标等） `fc64e9b7-ebef-47f8-a44c-25b47d5a3a32`
- 流属性/单位：Mass / kg
- 数量规则：1 kg合格设备成品净产出；包括随附电池及一体线缆，不包括零售纸箱。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

##### 废物流

###### 废弃已装配印制电路板 (`reject`)

inclusion_condition：拆出故障电路板并交由厂外处理时。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：称量交付明确处理单位的废电路板质量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg声明型号的合格设备成品净产出
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_shared | assembly | 通过分项计量或工程记录区分各型号操作。对剩余共用负荷，采用有证据的物理驱动因素，如实测测试工位占用时间；仅在无法论证物理关系时使用经济分配，并披露敏感性及理由。 | `ghg-protocol-product-standard-2011` |
| allocation_recycling | assembly | 对关联材料数据集及制造废料采用披露的再生成分约定。明确处理及回收负荷；不得自动从装配用电或部件数量中扣除假设的原生材料替代收益。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly | assembly | 部件、电力、合格产出及废电路板 | 物料清单；库存台账；电表；测试日志；废物转移 | 型号；零件编号；领用/退回数量；kg/件；期初/期末库存；电表读数；测试时间；合格数量/净质量；报废数量；废物kg；供应商边界 | 用校准天平称量有代表性的零件；核对材料台账、合格设备测试及废物单据；分项计量电力 | kg；件；kWh；工位小时 | 每个生产批次；按班次记录电表 | 声明覆盖正常负荷、换线及报废的连续生产时期；论证代表性 | 指定装配场址和声明的型号版本 | 同一时期汇总净消耗及归属用电；除以合格净产出kg | 校准记录；发票；物料清单版本；验收测试；电表日志；供应商声明；废物单据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | assembly | q_i = 项目i净消耗量 / 合格设备净质量。用领用、退回及库存变化核对净消耗；不得重复扣除退回量。参考输出q = M/M = 1。 | cp_assembly记录；合格质量M > 0 | kg/kg、Item(s)/kg或MJ/kg |  |
| electricity_basis | electricity | q_E =（归属于该型号的电表kWh × 3.6）/ M；全部受益产品分配比例合计为1。 | 电表差值；物理分配驱动因素；M | MJ/kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_coverage | assembly | 记录技术、时间、地域代表性、完整性及可靠性。保留自有装配操作的一手测量证据。 | `ghg-protocol-product-standard-2011`; cp_assembly |
| quality_bom | assembly | 将完整设备质量及包装分别与物料清单核对；验收前识别遗漏交换和上游重复。缺失数据不等于零。 | cp_assembly |
| quality_ranges | assembly | 采集实际数量。本PCR不规定外部数值范围；不得将单一型号碳足迹转换为部件或能源范围。 | cp_assembly |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 要求单一型号、全部参考限定信息、合格质量大于零及声明的kg/件换算。拒绝仅按质量进行跨设备比较。 |  |
| validate_inventory | assembly | 每项适用交换必须为一种实物流，具有已解决或明确未解决的身份。不使用条件行时须证明其不存在。要求完整物料清单及库存/产出/废物核对；按记录的仪器不确定度调查差异，不虚构容差。 |  |
| validate_boundary | dataset | 要求上游链接、无部件重复计入及厂门到厂门范围单独披露。完整产品足迹另须下游运输、使用和寿命终结情景。 | `logitech-carbon-impact-methodology` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明外设型号的装配模块；关联上游制造及下游生命周期情景 |
| allowed_use | 与型号和边界相符的生产数据包及process/lifecyclemodel投影 |
| excluded_use | 未加限定的完整生命周期声明；键盘与鼠标或操纵杆直接排名；替代半导体或聚合物制造数据 |
| required_metadata | 型号；物料清单版本；场址；年份；技术；产出基准；部件数据集链接；电网；分配；条件路线判断 |
| required_quality_disclosure | 测量来源；完整性；代表性；未解决身份；遗漏操作；不确定性及缺少外部范围 |
| update_trigger | 型号/物料清单、电池、供应商、场址、测试程序、能源结构或废物路线变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 访问日期2026-09-08 | 分类识别，第45261项；不支持数量取值。 |
| logitech-carbon-impact-methodology | literature | Logitech, Carbon Impact & LCA Methodology; https://www.logitech.com/en-us/sustainability/carbon-impact-methodology; 访问日期2026-09-08 | 原料采购与制造；运输、使用、电池及寿命终结情景的区分。不移植数值基准。 |
| logitech-product-lifecycle-approach | literature | Logitech, Product Lifecycle Approach; https://www.logitech.com/en-ae/sustainability/environment.html; 访问日期2026-09-08 | 装配与测试边界及上游部件制造；再生成分和供应商规格。 |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 7–9 and 13; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 访问日期2026-09-08 | 边界披露、活动数据质量、分配顺序及报告。仅作为碳核算方法依据，不据此声称完整LCA符合性。 |
