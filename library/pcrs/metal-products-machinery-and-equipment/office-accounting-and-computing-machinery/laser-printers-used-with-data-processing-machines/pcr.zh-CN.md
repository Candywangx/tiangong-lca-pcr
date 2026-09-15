---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.laser-printers-used-with-data-processing-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 与数据处理机配套使用的激光打印机

## 1. 范围与适用性

本PCR用于采集新制单功能激光打印机的制造前景数据，该设备接收数据处理机的数字输入。黑白和彩色机型共用本规则，但分别记录配置数据。激光曝光、碳粉转移和定影构成技术特征；排除仅采用LED曝光的设备、喷墨打印机、多功能设备、独立复印机及单独销售的替换碳粉盒。分类身份依据`un-cpc-3-0-structure-2025`，术语依据`epa-imaging-equipment-v3-2-2021`。

可执行前景路线始于外购子组件，止于工厂大门处经过测试并包装的打印机。它支持链接上游的制造数据集，不能直接用于完整打印服务比较。若组件在厂内制造，必须链接对应生产过程或明确扩展原子交换清单，才能声明从摇篮到工厂大门的完整性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.laser-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45264 (`un-cpc-3-0-structure-2025`) |
| covered_products | 与计算机连接的新制单功能激光打印机，黑白或彩色 |
| excluded_products | 喷墨、仅LED曝光及多功能设备；独立复印机；单独耗材；再制造 |
| representative_product | 明确机型的单功能激光打印机，不指定通用机型质量 |
| production_route | 外购打印引擎及单独供应的组件；组装、出厂测试及包装 |
| market_state | 新制并经测试的硬件，含已声明的初始耗材，待发货 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供将电子图像输出到纸张的激光打印硬件 |
| How much | 制造声明单位：1 kg净打印机产品；披露该机型每台质量 |
| How well | 声明分辨率、黑白/彩色能力、介质尺寸、双面功能和打印速度；通过该机型验收测试 |
| How long or cycle | 一个制造周期至出厂放行；不假定使用寿命及打印页数 |
| reference_flow_link | 清单行printer；每kg清单乘以实测kg/台得到每台结果；质量相等不代表功能等效 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 与数据处理机配套使用的激光打印机 `19a06db9-33d8-4f4d-b11a-3f43e6a4b2e1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机型；激光曝光技术；单功能状态；彩色能力；分辨率；介质尺寸；打印速度及测试模式；双面配置；净kg/台；初始碳粉盒及装粉量；所含附件；独立包装质量；工厂及国家；报告期；外购组件边界 |

前景数据包必须声明全部必需限定信息。净产品质量包含声明的随附碳粉盒及附件，但不含运输包装和测试用纸。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mass_basis | 打印机及子组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量各声明配置。按实测组件或整机质量换算件数；不得使用运输毛重归一化产品。 |
| electricity_units | 工厂电力 | Net calorific value | MJ | 保留电表kWh记录，按1 kWh = 3.6 MJ换算。W功率必须结合持续时间换算。使用阶段TEC耗电量不是工厂能耗。 |
| paper_basis | 测试用纸 | Mass | kg | 按纸张张数、单张面积及实测定量计算纸质量；区分纸张张数与打印面数。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_factory | 前景路线 | 纳入进厂组件供应负荷、入厂运输链接、组装电力、出厂测试、包装及工厂废物处理链接。制造结果不含下游配送、用户用纸、替换耗材和使用电力；须披露这些排除项。 | `lexmark-m5163-lca-2024` |
| boundary_components | 外购模块 | 将打印引擎定义为一个外购机电总成。供应商物料清单须记录其包含的机架、传动、定影器、光学单元及线束。单独供应的外壳、控制板、电源和碳粉盒不得同时计入引擎数据集。实际物料清单要求的额外组件和包装须分别识别并补充。 | `epa-imaging-equipment-v3-2-2021` |
| boundary_emissions | 直接排放 | 检查出厂测试的现场测量是否存在臭氧或其他单项排放；若存在则逐物质补充实际交换。不得将上游电力排放列为工厂直接排放，亦不得将缺少测量解释为零。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收货处的外购子组件，附供应商制造及运输链接 |
| starting_condition_role | 前景组装起点，不是零负荷截断 |
| product_classification_scope | CPC 3.0: 45264 |
| recursive_input_rule | 外购完整激光打印机属于同类输入，须链接其上游数据集，不得替代打印引擎。返工循环属内部流转，不得重复原始制造负荷。 |
| upstream_dataset_requirement | 供应商产品状态、所含组件、地域、技术及参考属性须兼容；披露未解决链接 |
| disclosure | 报告厂内操作、外包步骤、配置覆盖、排除的生命周期阶段及缺失数据 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly_test_pack | 组装、出厂测试及包装 | required | 全部建模产品 | 前景制造 | 1 kg 合格净打印机 |

### 过程：组装、出厂测试及包装（`assembly_test_pack`）

以下清单描述外购模块路线。条件性清单行仅在该物品单独跨越工厂边界时纳入；其不存在必须有供应商物料清单支持。共用采集协议不代表合并交换。

#### 输入

##### 产品流

###### 激光打印机打印引擎总成（`engine`）

外购引擎跨越组装边界；依据已记录的组件覆盖称量净领用量。 纳入条件：全部外购引擎配置

- 选定流：激光打印机打印引擎总成
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外购引擎跨越组装边界；依据已记录的组件覆盖称量净领用量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：全部外购引擎配置

###### 模制ABS打印机外壳（`housing`）

称量单独外购的成品外壳，包括损耗；不得用树脂替代。 纳入条件：外壳单独供应且确认为ABS；否则单独记录实际聚合物组件

- 选定流：模制ABS打印机外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量单独外购的成品外壳，包括损耗；不得用树脂替代。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：外壳单独供应且确认为ABS；否则单独记录实际聚合物组件

###### 已装配元件的打印机控制电路板（`controller`）

记录控制板净领用质量；排除已计入引擎的电路板。 纳入条件：控制板单独供应

- 选定流：已装配元件的打印机控制电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录控制板净领用质量；排除已计入引擎的电路板。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：控制板单独供应

###### 打印机电源单元（`power_supply`）

记录单独供应的完整电源质量及额定参数；排除与引擎清单重叠部分。 纳入条件：电源单独供应

- 选定流：打印机电源单元
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独供应的完整电源质量及额定参数；排除与引擎清单重叠部分。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：电源单独供应

###### 激光打印机碳粉盒（`cartridge`）

按每个实体碳粉盒记录声明装粉量及颜色。仅按实际配置汇总同类交换；区分随附初始碳粉盒与仅用于测试的消耗，并保留库存记录。 纳入条件：碳粉盒独立于引擎跨越边界

- 选定流：激光打印机碳粉盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按每个实体碳粉盒记录声明装粉量及颜色。仅按实际配置汇总同类交换；区分随附初始碳粉盒与仅用于测试的消耗，并保留库存记录。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：碳粉盒独立于引擎跨越边界

###### 瓦楞纸箱（`box`）

记录发货领用的实际瓦楞纸箱质量；包装不计入产品净质量。 纳入条件：发货使用瓦楞纸箱

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录发货领用的实际瓦楞纸箱质量；包装不计入产品净质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：发货使用瓦楞纸箱

###### 未涂布办公打印纸（`paper`）

测量含复测在内的测试用纸消耗；保留纸张尺寸及定量。 纳入条件：进行纸张输出出厂测试

- 选定流：未涂布办公打印纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：测量含复测在内的测试用纸消耗；保留纸张尺寸及定量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_factory`
- 纳入条件：进行纸张输出出厂测试

###### 电力（`electricity`）

计量组装、测试及包装电力，包含可归属的空闲和复测能耗；将kWh换算为MJ。 纳入条件：全部配置

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量组装、测试及包装电力，包含可归属的空闲和复测能耗；将kWh换算为MJ。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_factory`
- 纳入条件：全部配置

#### 输出

##### 产品流

###### 与数据处理机配套使用的激光打印机（`printer`）

合格净产品质量除以同一合格净质量后为1 kg参考输出；保留实测kg/台。 纳入条件：全部合格产品

- 选定流：与数据处理机配套使用的激光打印机 `19a06db9-33d8-4f4d-b11a-3f43e6a4b2e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：合格净产品质量除以同一合格净质量后为1 kg参考输出；保留实测kg/台。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom`
- 纳入条件：全部合格产品

##### 废物流

###### 碳粉打印办公测试废纸（`paper_waste`）

称量含残留碳粉的分类废弃测试纸；核对留样及纸张库存。 纳入条件：测试纸从工厂废弃转出

- 选定流：碳粉打印办公测试废纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量含残留碳粉的分类废弃测试纸；核对留样及纸张库存。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：测试纸从工厂废弃转出

###### 报废激光打印机（`printer_waste`）

称量离厂的不可修复完整报废打印机；记录碳粉盒拆除情况及组成，排除内部返工。 纳入条件：不可修复整机报废

- 选定流：报废激光打印机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量离厂的不可修复完整报废打印机；记录碳粉盒拆除情况及组成，排除内部返工。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格净打印机产品
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：不可修复整机报废


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_factory | 共用组装线 | 优先采用产线分表计量及配置特定领料。不可分割的共用电力按记录的设备时间乘实测运行功率分配，并按cp_factory与总表读数核对。披露分配依据及敏感性；设备质量本身不是能耗驱动因素。 |  |
| allocation_rejects | 返工及废物 | 实际不合格品及返工负荷计入合格产量。保留废物处理负荷，不赋予推测的原生材料替代收益。可销售共产品须单独记录，并在使用数据集前论证具体分配规则。 | `lexmark-m5163-lca-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bom | assembly_test_pack | 组件输入及产品输出 | 物料清单及称量 | 零件号；配置；收货/领料/退库；组件质量；合格台数；产品净质量；初始装粉量 | 将序列号/物料版本关联校准称量与库存流转 | kg; item | 每批及每次物料版本变更 | 一个公开的代表性生产年度，或经论证的较短完整生产周期 | 声明工厂及供应商模块 | 净领料量除以合格净产品kg；避免嵌套物料重复 | 物料清单；校准；库存核对 |
| cp_factory | assembly_test_pack | 电力及测试纸 | 电表及测试日志 | 电表起止kWh；机时与功率；空闲时段；测试纸张；面积；定量；配置；复测 | 产线及测试站分表；记录预热及复测周期；称量纸张 | kWh; h; W; kg | 每班及每次测试批次 | 与cp_bom同一时期 | 组装及测试站 | 汇总可归属的实际消耗后除以合格净kg | 电表校准；功率时间核对；测试设置 |
| cp_waste | assembly_test_pack | 废纸及报废打印机 | 称量及废物转移记录 | 废物流身份；质量；碳粉含量；库存变化；回收/返工状态；接收方及处理路线 | 分类称量并核对处置文件 | kg | 每次转移及每月核对 | 与cp_bom同一时期 | 工厂废物出口 | 离厂质量除以合格净产品kg；排除内部返工转移 | 废物票据；接收记录；库存平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部清单行 | Q_ref = Q_attributable / M_accepted；M_accepted为各合格设备台数乘实测净kg/台后求和。参考输出经归一化为1 kg。 | cp_bom; cp_factory; cp_waste | kg或MJ/kg打印机 |  |
| energy | 电力 | E_MJ = 3.6 × 实测kWh。保留实际测试负载；不得以每周TEC或额定最大功率替代工厂实测能耗。 | cp_factory | MJ/kg | `epa-imaging-equipment-v3-2-2021` |
| mass_reconcile | 物理材料 | 核对净材料输入与产品、分类废物及库存变化；按测量不确定性解释残差。包装随产品发运，但不计入参考产品质量。 | cp_bom; cp_waste | 有记录的平衡 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | 供应商数据 | 核实外购总成状态及组件覆盖；不得以初级聚合物替代成型外壳或以整机替代引擎。 | cp_bom |
| quality_period | 全部活动数据 | 统一场址及报告期；披露抽样、缺少计量、分配、上游代理及未测直接排放。无测量记录表示未知而非零。 | cp_factory; cp_waste |
| quality_evidence | 范围及文献 | 不得跨配置套用案例数值。本PCR不规定外部数量范围，须采集一手数据。利盟报告第3页单功能/多功能表述不一致，该段不用于定义本产品类别。 | `lexmark-m5163-lca-2024` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考产品 | 要求全部参考限定信息、正的合格产量及实测台数质量换算。本身份不接受多功能或非激光技术产品。 | `un-cpc-3-0-structure-2025` |
| validate_inventory | 清单 | 每项纳入交换须有数量、单位、协议证据及一致分母。检查条件适用性、物料覆盖、质量残差和电力分配核对。未解决的流或供应商身份必须明确保留。 |  |
| validate_claim | 数据集声明 | 制造结果不得声称全寿命打印服务等效。从摇篮到工厂大门的声明要求完整供应商及处理链接；遗漏实际交换则完整性无法判定。 | `lexmark-m5163-lca-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset; process; lifecyclemodel |
| allowed_use | 用于配置、地域及技术相符的激光打印机制造输入；须补充使用、耗材、配送及寿命终结后才能构建服务模型 |
| excluded_use | 多功能或喷墨制造；按kg直接比较服务；仅凭本前景清单作认证或全生命周期声明 |
| required_metadata | 全部参考限定信息；工厂；时期；物料版本；上游供应商覆盖；分配；边界 |
| required_quality_disclosure | 实测与估算区分；缺失UUID及链接；条件适用性；不确定性；排除阶段；未解决范围 |
| update_trigger | 物料、技术、供应商、工厂、包装、测试负载或测量方法变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 结构，2025年6月30日; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索日期2026-09-08 | 分类身份及相邻类别排除 |
| epa-imaging-equipment-v3-2-2021 | standard | 美国环保署，能源之星成像设备第3.2版，定义1.A、1.B、1.C和1.E; https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Imaging%20Equipment%20Version%203.2%20Final%20Specification_0.pdf; 检索日期2026-09-08 | 打印机、激光成像引擎及工作模式区分；不作认证声明 |
| lexmark-m5163-lca-2024 | literature | 利盟，M5163激光打印机生命周期评价，标示发布日期12/4/2024，第5—6、11—12页; https://www.lexmark.com/content/dam/lexmark/documents/compliance/lca/M5163.pdf; 检索日期2026-09-08 | 物料清单和拆解证据，硬件与耗材分别核算；案例结果不用作默认值 |
