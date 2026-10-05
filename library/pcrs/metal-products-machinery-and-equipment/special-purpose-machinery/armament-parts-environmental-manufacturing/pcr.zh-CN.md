---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armament-parts-environmental-manufacturing
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 惰性武器部件最终清洗环境核算

## 1. 范围与适用性

一种独立供货完整惰性金属武器部件的最终水性清洗、环境验收与包装环境前景核算。每数据集表示一个实际供货件及环境配置，不是杂零件池。此前技术加工全部属上游，记实际采购门、水、单一供洗涤剂配方、环境电、分别识别清洗废物、验收件数量及独立干净件质量。此核算无武器设计技术制造参数几何功能细节优化操作装配教程。适用须当前记录确认该非含能单部件路线，行业标签不能建立路线。

排除整武器车辆实弹含能部件弹药、多功能件总成、客户运行射击、机加热处理涂装等技术制造、武器集成功能试验维修翻新拆卸。边界始于物理完整供惰性件，此前制造留上游，非全部部件制造完整摇篮到门。清洗设置配方性能阈功能验收不属此方法。外包装可移工装未留清液复用搬运设施排产品M。

当前worktree物质manifest扫描范围读取未见精确惰性武器部件最终清洗方法，旧44760留空脚手架；安全通材料计量可复用。先前自己完成44710环境方法为整供非实弹车辆涂料配方，属前方法，但件级验收数独干件M、批清库存收液滤擦废闭合为不同采购输出界。此候选不增武器建造法，按实单供件惰性状态最终清洗门限定细化，不仅分类代码；独重叠适用科学待审，无其他作者未冻结稿或接受映射声称。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armament-parts-environmental-manufacturing |
| classification_refs | CPC:3.0:44760; narrower; no accepted mapping claimed |
| covered_products | 一种独立供货完整惰性金属武器部件的最终水性清洗、环境验收与包装环境前景核算。每数据集表示一个实际供货件及环境配置，不是杂零件池。此前技术加工全部属上游，记实际采购门、水、单一供洗涤剂配方、环境电、分别识别清洗废物、验收件数量及独立干净件质量。此核算无武器设计技术制造参数几何功能细节优化操作装配教程。适用须当前记录确认该非含能单部件路线，行业标签不能建立路线。 |
| excluded_products | 排除整武器车辆实弹含能部件弹药、多功能件总成、客户运行射击、机加热处理涂装等技术制造、武器集成功能试验维修翻新拆卸。边界始于物理完整供惰性件，此前制造留上游，非全部部件制造完整摇篮到门。清洗设置配方性能阈功能验收不属此方法。外包装可移工装未留清液复用搬运设施排产品M。 |
| representative_product | 一种独供物理完整惰性金属件，可追供件环境修订，实际最终清洗后验收，不披功能几何使用教程。 |
| production_route | 供惰性部件环境核验; 实际最终水性清洗环境台账; 环境库存及质量验收; 独立净件称量及独立包装 |
| market_state | 厂门新完整干惰性单部件，外包装独立。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种供完整惰性件的最终清洗制造阶段环境核算。 |
| How much | 由一种同配置件独测M kg得1kg验收完整干净件输出，一台在本计量接口指一个供件，非零件包整武器或整批。 |
| How well | 确认完整惰性单件供门、实际洁净干交状态、配方库存废表身份独原净称按当前环境质量方案验；无功能武器性能阈。 |
| How long or cycle | 一最终清洗验收交周期，无服务寿命。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 最终水性清洗后单一验收完整惰性金属武器部件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单供件环境修订批及可追物理件ID、确认完整惰性非含能金属件状态；实际上游供门内含、不披功能几何；当前最终水洗环境工单单供配方SDS批状态；实水公用废接收；同配置验收数拒返；原校准完整干净件M kg独来成质量闭合；场期分配不确定性；身份上游运输处理科学适用缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | prepare_power; clean_power; acceptance_power; dispatch_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计实际kWh乘3.6MJ/kWh，保原计量归属。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一种独立供货完整惰性金属武器部件的最终水性清洗、环境验收与包装环境前景核算。每数据集表示一个实际供货件及环境配置，不是杂零件池。此前技术加工全部属上游，记实际采购门、水、单一供洗涤剂配方、环境电、分别识别清洗废物、验收件数量及独立干净件质量。此核算无武器设计技术制造参数几何功能细节优化操作装配教程。适用须当前记录确认该非含能单部件路线，行业标签不能建立路线。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:44760; single complete inert metal component only |
| recursive_input_rule | 既往供件加工留上游，无原合金加成件重计，无本地技术加工武器装配推断，用实单供内含门，不假定来质量等成质量。 |
| upstream_dataset_requirement | 扩边须原实单供件状态上游范围实洗介质供电压运输处理记录，披未知，不称完整摇篮到门。 |
| disclosure | 排除整武器车辆实弹含能部件弹药、多功能件总成、客户运行射击、机加热处理涂装等技术制造、武器集成功能试验维修翻新拆卸。边界始于物理完整供惰性件，此前制造留上游，非全部部件制造完整摇篮到门。清洗设置配方性能阈功能验收不属此方法。外包装可移工装未留清液复用搬运设施排产品M。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_safe | all processes | 仅记环境采购实际公用化废通计量，排功能技术加工武器使用，无工艺设置防护性能指令；现供记录可核惰性完整状态而不公开技术设计。 |  |
| boundary_water | water; cleaning_effluent | 技术圈市政供水收污染液实环境排不同；EPA含军械背景但适用依实际路线直排，无通法限采。 | epa-environment |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 供惰性部件环境核验 | required | 核一种物理完整供惰性件环境配置，记供门原来净kg，无技术加工功能特性规定。 | foreground_manufacturing | 1kg完整验收单件，条件行仅实际时 |
| `clean` | 实际最终水性清洗环境台账 | required | 核实际供水洗剂环境公用表及独液泥滤废记录，滤泥仅实际时，无清洗配方操作设置。 | foreground_manufacturing | 1kg完整验收单件，条件行仅实际时 |
| `acceptance` | 环境库存及质量验收 | required | 核实环境台账洁净干交状态同件验拒数，仅实际时擦介质，无武器功能验收性能阈。 | foreground_manufacturing | 1kg完整验收单件，条件行仅实际时 |
| `dispatch` | 独立净件称量及独立包装 | required | 外包装前一种完整同配置验收件原校准净M，追每称物理件验数。 | foreground_manufacturing | 1kg完整验收单件，条件行仅实际时 |

### 过程：供惰性部件环境核验（`prepare`）

核一种物理完整供惰性件环境配置，记供门原来净kg，无技术加工功能特性规定。

#### 输入

##### 产品流

###### 最终清洗前单一供货完整惰性金属武器部件（`incoming_component`）

仅一种实际供货件配置、物理完整非含能金属部件，既往加工全上游，仅环境清单标识原kg，无功能几何技术教程。

- 选定流： 最终清洗前单一供货完整惰性金属武器部件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_prepare。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_prepare`
- 来源：

###### 交流电（`prepare_power`）

实际低于1kV表计环境搬运清洗计量包装耗，仅原期归属，不虚构机加热制造功能武器试耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_prepare。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_prepare`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实际最终水性清洗环境台账（`clean`）

核实际供水洗剂环境公用表及独液泥滤废记录，滤泥仅实际时，无清洗配方操作设置。

#### 输入

##### 产品流

###### 自来水（`water`）

实际市政水性清洗补水可追溯实kg计量，供水非资源废水污染排放。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

###### 单一供货水性合成工业洗涤剂配方（`cleaner`）

一种实际供批SDS合成配方来kg，实际浓度供状态私下留环境身份，不规定组成稀释配方清洗设置。

- 选定流： 单一供货水性合成工业洗涤剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

###### 成品聚丙烯水性清洗滤芯（`filter`）

条件仅实际环境清洗消耗指定聚丙烯滤芯时，一种供成品滤芯型干来kg，无设备滤芯安装教程。

- 选定流： 成品聚丙烯水性清洗滤芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

###### 交流电（`clean_power`）

实际低于1kV表计环境搬运清洗计量包装耗，仅原期归属，不虚构机加热制造功能武器试耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集送处理的水性部件清洗废液（`cleaning_effluent`）

一种实测污染水液流湿kg分析身份处理接收方，不假定直排。

- 选定流： 收集送处理的水性部件清洗废液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

###### 水性部件清洗槽含油污泥（`cleaning_sludge`）

条件一种实际分离湿泥流实油水固组成kg处理去向，非混液废水，不假定组成范围。

- 选定流： 水性部件清洗槽含油污泥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

###### 油污染的废聚丙烯清洗滤芯（`spent_filter`）

条件一种实弃滤芯含留污染出kg废资格，不能采新产品膜身份。

- 选定流： 油污染的废聚丙烯清洗滤芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_clean。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_clean`
- 来源：

##### 基本流

### 过程：环境库存及质量验收（`acceptance`）

核实环境台账洁净干交状态同件验拒数，仅实际时擦介质，无武器功能验收性能阈。

#### 输入

##### 产品流

###### 普通机织棉擦拭布（`wipe_cloth`）

条件实际独供普通棉机织布实干kg，识纤组成湿使用退废，不由外观推化。

- 选定流： 普通机织棉擦拭布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 交流电（`acceptance_power`）

实际低于1kV表计环境搬运清洗计量包装耗，仅原期归属，不虚构机加热制造功能武器试耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 洗涤剂及油污染的废棉擦拭布（`spent_cloth`）

条件一种物理废棉擦材含实污染湿出kg接收方，一种废流，非两化学排或普通新布。

- 选定流： 洗涤剂及油污染的废棉擦拭布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 送外部回收的报废单一惰性金属武器部件（`rejected_component`）

条件一种实同供件类型报废金属资格出kg接收方、核非含能状态，无固定回收信用或有用联产假定。

- 选定流： 送外部回收的报废单一惰性金属武器部件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 基本流

### 过程：独立净件称量及独立包装（`dispatch`）

外包装前一种完整同配置验收件原校准净M，追每称物理件验数。

#### 输入

##### 产品流

###### 交流电（`dispatch_power`）

实际低于1kV表计环境搬运清洗计量包装耗，仅原期归属，不虚构机加热制造功能武器试耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_dispatch`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD）（`film`）

条件实际非发泡非胶PE-LD外保护膜kg，排产品M，其他实包各另行。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_dispatch`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终水性清洗后单一验收完整惰性金属武器部件（`finished_machine`）

恰一种实供件配置物理完整非含能部件，记录环境最终清洗后原干净M kg；非杂件整武器实弹含能总成压力功能尺寸性能声称。

- 选定流： 最终水性清洗后单一验收完整惰性金属武器部件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源：

##### 废物流

##### 基本流

## 7. 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 先分实件配置工单清批表领退库存废，实拒重清环境负归同件验收数，生产订单数非验收数，不重上游件制造。 | ghg-allocation |
| allocation_shared | shared environmental utilities | 不可分时用实测因果清洗时负荷或分表环境耗，实装载验件批拒数须闭，质量非自动共享耗因果；物理关系不可立后方证明经济其他分配敏感性，无固定信用通比。 | ghg-allocation |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收完整单部件 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每验收物理件，声明代表称仅有核同件证据时 | 匹配最终清洗验收期 | 实际合适校准件称量设施 | 每台验收净质量 | 独干完整件kg皮重校准可追物理ID不确定性、来成平衡 |
| cp_prepare | prepare | 独立原子交换 | foreground_record | 单供件环境配置物理件批追ID、供SDS批状态、kg领退废、原水电表、同一配置的验收设备数量 | 记实单件批各独供配方物理交换校准公用表领退库存废接收验拒重清数，无件功能武器工程工艺设置细节。 | kg; MJ | 每件批完整实际期 | 同配置最终清洗周期 | 实际环境工厂门 | 可归属工序交换 / 同一配置的验收设备数量 | 件状态库存数闭校准原不确定性废资格 |
| cp_clean | clean | 独立原子交换 | foreground_record | 单供件环境配置物理件批追ID、供SDS批状态、kg领退废、原水电表、同一配置的验收设备数量 | 记实单件批各独供配方物理交换校准公用表领退库存废接收验拒重清数，无件功能武器工程工艺设置细节。 | kg; MJ | 每件批完整实际期 | 同配置最终清洗周期 | 实际环境工厂门 | 可归属工序交换 / 同一配置的验收设备数量 | 件状态库存数闭校准原不确定性废资格 |
| cp_acceptance | acceptance | 独立原子交换 | foreground_record | 单供件环境配置物理件批追ID、供SDS批状态、kg领退废、原水电表、同一配置的验收设备数量 | 记实单件批各独供配方物理交换校准公用表领退库存废接收验拒重清数，无件功能武器工程工艺设置细节。 | kg; MJ | 每件批完整实际期 | 同配置最终清洗周期 | 实际环境工厂门 | 可归属工序交换 / 同一配置的验收设备数量 | 件状态库存数闭校准原不确定性废资格 |
| cp_dispatch | dispatch | 独立原子交换 | foreground_record | 单供件环境配置物理件批追ID、供SDS批状态、kg领退废、原水电表、同一配置的验收设备数量 | 记实单件批各独供配方物理交换校准公用表领退库存废接收验拒重清数，无件功能武器工程工艺设置细节。 | kg; MJ | 每件批完整实际期 | 同配置最终清洗周期 | 实际环境工厂门 | 可归属工序交换 / 同一配置的验收设备数量 | 件状态库存数闭校准原不确定性废资格 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | incoming_component; water; cleaner; filter; cleaning_effluent; cleaning_sludge; spent_filter; wipe_cloth; spent_cloth; rejected_component; prepare_power; clean_power; acceptance_power; dispatch_power; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

有限采集接口的一台指一个完整单部件，绝非整武器套包。q_item为实归交换平衡除同供件配置实验收数，M独采同干交件，保kgMJ分子，批套包毛重件数不能替净称；公开件面积体积属性非自动不适用，但换算须同件原实测，不改参考属性为Mass。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_mass | finished_machine | 用实际合适校准件秤原皮重读日期物理ID配置复测不确定性。M仅一完整验收干惰性件，排交付不留清洗漂液架工装散加外包试载；独核来独件净实移除留加与成M，无假定1:1。同件批抽样须核同质实际称群不确定性，否则逐件称。序字段可为可追内部物理称记录ID非虚构厂家序。无目录件重编造质量。 | actual original individual-part net metrology and independent received/finished balance |
| quality_supply | incoming_component; cleaner; filter; wipe_cloth | 供记录核一物理完整惰性非含能金属件环境修订门、不公开功能几何，实配方SDS批供状态各滤纺身份独立。公开热路线中间身份非此供成状态证明，不为配UUID增加工；原棉水处理布非实擦布，新膜非成滤芯废件。 | actual supplier qualification and original supply-state records |
| quality_water_waste | water; cleaning_effluent; cleaning_sludge; spent_filter; spent_cloth; rejected_component | 实来处理市政水计量与收废浴漂液含油泥物理滤纺分开，保湿干质量实组成接收处理门，不假定污液密度1kg/L油水范围；直排转处理不同，废量实留污染一次、不重捕料为环境排；拒件为废非有用输出，无自动回收信用。 | epa-environment; actual original waste transfer/composition records |
| quality_emissions | dataset | 最终水洗不假定空气污染物水资源；若存在实基础排须独治理后物种实量时CAS精介子介不确定性，另增识别行。收废液捕泥滤固技术圈废非淡水空气排；未测不报零，披监测范围缺口。 | actual current environmental monitoring and waste records |
| quality_complete | dataset | 闭实供件验拒重清批数水电表配方领退库存废转包，增每实其他输入废物种，缺UUID非漏实流理由；条件滤泥擦行非必需设备工艺声称。实数据用前须当前安全单件供物理环境原件，科学待审。 | actual complete current environmental ledger and applicability records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 恰1kg完整验收干单件输出，精参考产品名等finished_machine，候选未解参考精row登记；须实独M物理单件界，检查过非科学批准。 |  |
| validation_basis | inventory | 两语稳小写行规协议同件验数独完整干M与kgMJ分子一致，无批套武器混分母。 |  |
| validation_safe | dataset | 仅安全环境最终清洗，排技术制造集成含能材，当前实惰性供件本地路线证缺留科学审，非虚构工序事实。 |  |
| validation_atomic | all flows | 每行一实件配方物理废物种，UUID精官方中文实际属性单位状态，无混池强参考身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 一种独立供货完整惰性金属武器部件的最终水性清洗、环境验收与包装环境前景核算。每数据集表示一个实际供货件及环境配置，不是杂零件池。此前技术加工全部属上游，记实际采购门、水、单一供洗涤剂配方、环境电、分别识别清洗废物、验收件数量及独立干净件质量。此核算无武器设计技术制造参数几何功能细节优化操作装配教程。适用须当前记录确认该非含能单部件路线，行业标签不能建立路线。 |
| excluded_use | 排除整武器车辆实弹含能部件弹药、多功能件总成、客户运行射击、机加热处理涂装等技术制造、武器集成功能试验维修翻新拆卸。边界始于物理完整供惰性件，此前制造留上游，非全部部件制造完整摇篮到门。清洗设置配方性能阈功能验收不属此方法。外包装可移工装未留清液复用搬运设施排产品M。 |
| required_metadata | 单供件环境修订批及可追物理件ID、确认完整惰性非含能金属件状态；实际上游供门内含、不披功能几何；当前最终水洗环境工单单供配方SDS批状态；实水公用废接收；同配置验收数拒返；原校准完整干净件M kg独来成质量闭合；场期分配不确定性；身份上游运输处理科学适用缺口 |
| required_quality_disclosure | 候选科学待审，实单件惰性门本地路线独干M不确定性验数来成平衡、配方废表场期重清共享分原、全缺身份上游运输处理监测缺。每kg部件最终清核算非整武器制造使用性能比完整摇篮到门。 |
| update_trigger | 实供件环境配置惰性状态门配方滤纺身份公用废路线场期质量采批分身份源科学重叠决定变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-environment | handbook | U.S. EPA, Metal Products and Machinery Effluent Guidelines, official HTML updated May13,2026, unpaginated overview/Facilities Covered/Related Categories/direct oily discharge sections. https://www.epa.gov/eg/metal-products-and-machinery-effluent-guidelines | 军械属宽行业背景，供金属件工业水处理直排区别，仅此；无通限实厂清洗路线设备当前数证明。 |
| ghg-allocation | handbook | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter9 printedp63 / PDFpage65, Tables9.1 and9.2 and physical-relationship paragraph. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 已出版2011分配层级指导，先避免细分再物理关系及证明替代；非武器工程证现法令生命周期批准定量排回收因子。 |
