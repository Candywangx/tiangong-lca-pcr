---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armoured-vehicle-environmental-manufacturing
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 装甲车辆环境表面涂装核算

## 1. 范围与适用性

一个供货新完整未涂装非实弹状态机动装甲车辆的表面涂装环境前景核算。工厂接收物理完整设备，记录采购门及实际环境配置身份，归属实际条件清洗及供涂料耗、环境治理电、水、收集废物与实测排放，随后记录环境质量验收、独立完整净质量及交付。既往车辆及部件建造属于上游。本PCR仅规定环境核算与一般计量，无车辆或武器设计、制造参数、装配序列、功能细节或性能优化。

排除独零件制造或部件武器集成、设计弹道功能试验、装甲规格操作教程、弹药含能载荷、在用运行耗油运输服务、翻新拆卸处置。产品M排外包装临时试验支持设备在用燃油实弹试载。此前景以整供车辆起始，并非全部车辆制造或完整摇篮到门；实际其他制造路线须独立适用与安全证据审查，不推断作业。

当前worktree物质方法扫描未见装甲车辆环境方法，旧44710脚手架不提升。普通车辆拖拉机方法的表计归一控制可复用，但不建立此整供未涂装非实弹起始状态与仅涂装整车参考边界。此候选按采购门实际环境阶段限定，不仅分类代码；独重叠科学待审，军用制造安保服务排除，不读其他作者未冻结稿。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armoured-vehicle-environmental-manufacturing |
| classification_refs | CPC:3.0:44710; narrower; no accepted mapping claimed |
| covered_products | 一个供货新完整未涂装非实弹状态机动装甲车辆的表面涂装环境前景核算。工厂接收物理完整设备，记录采购门及实际环境配置身份，归属实际条件清洗及供涂料耗、环境治理电、水、收集废物与实测排放，随后记录环境质量验收、独立完整净质量及交付。既往车辆及部件建造属于上游。本PCR仅规定环境核算与一般计量，无车辆或武器设计、制造参数、装配序列、功能细节或性能优化。 |
| excluded_products | 排除独零件制造或部件武器集成、设计弹道功能试验、装甲规格操作教程、弹药含能载荷、在用运行耗油运输服务、翻新拆卸处置。产品M排外包装临时试验支持设备在用燃油实弹试载。此前景以整供车辆起始，并非全部车辆制造或完整摇篮到门；实际其他制造路线须独立适用与安全证据审查，不推断作业。 |
| representative_product | 一供完整新非实弹机动车于涂装厂门，声明实际环境配置，无技术设计信息。 |
| production_route | 来件环境台账及条件清洗; 实际表面涂装环境台账; 环境验收独立净质量及交付 |
| market_state | 新完整环境验收表面涂装车辆，外包装独计。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一供完整车辆的制造阶段表面涂装环境前景。 |
| How much | 由同配置每车独立实际M kg得1kg验收完整净车输出，非涂料质量或混零件。 |
| How well | 完整声明非实弹供配置、环境批SDS身份库存废平衡、原净质量采购边界按当前环境质量方案验收；无功能防护性能声称。 |
| How long or cycle | 一工厂涂装验收交付周期，无服务寿命。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 坦克车及其他军用装甲机动车辆及其零件 `df061b40-6778-4622-adba-644b49be3524` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 环境产品配置标识序号、完整供非实弹状态、来件与成品净质量及留涂料流体约定、供货门运输边界、独配方SDS批状态废去向、实际场期表电压、同配置验收数拒返、原整件校准净称独质量闭合、条件污染物CAS介质治理后方法不确定性、上游流缺口及科学待审 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | prepare_power; finish_power; dispatch_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计实际kWh乘3.6MJ/kWh，记原表不确定性归属。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个供货新完整未涂装非实弹状态机动装甲车辆的表面涂装环境前景核算。工厂接收物理完整设备，记录采购门及实际环境配置身份，归属实际条件清洗及供涂料耗、环境治理电、水、收集废物与实测排放，随后记录环境质量验收、独立完整净质量及交付。既往车辆及部件建造属于上游。本PCR仅规定环境核算与一般计量，无车辆或武器设计、制造参数、装配序列、功能细节或性能优化。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:44710; complete non-live vehicle only, no parts pool |
| recursive_input_rule | 来整车制造留上游，不虚构本地发动机装甲武器部件制造；匹配供完整内含门，避重上游部件留流体。 |
| upstream_dataset_requirement | 扩边前须实际供整身份状态上游范围电压供涂清SDS运输处理去向，披未知，不称完整摇篮到门。 |
| disclosure | 排除独零件制造或部件武器集成、设计弹道功能试验、装甲规格操作教程、弹药含能载荷、在用运行耗油运输服务、翻新拆卸处置。产品M排外包装临时试验支持设备在用燃油实弹试载。此前景以整供车辆起始，并非全部车辆制造或完整摇篮到门；实际其他制造路线须独立适用与安全证据审查，不推断作业。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_environment | all processes | 仅环境采购能水化废台账，PCR无武器车辆装配教程技术参数防护阈功能操作细节；不由历史EA假定实其他作业。 | air-environment; water-environment; waste-environment |
| boundary_water | cleaning_effluent | 市政供水收工业废液处理输出实环境排属不同交换，EPA概述适用依实际行业路线直排，无通用限值。 | discharge-environment |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 来件环境台账及条件清洗 | required | 接一物理完整未涂装件，记整件身份采购界无内功能细节，仅实际时清洗交换。 | foreground_manufacturing | 1kg完整验收车辆，仅实际条件交换 |
| `finish` | 实际表面涂装环境台账 | required | 归实际供配方环境公用废物物种治理后排，无涂料配方参数防护性能规定。 | foreground_manufacturing | 1kg完整验收车辆，仅实际条件交换 |
| `dispatch` | 环境验收独立净质量及交付 | required | 核同配置验收数材废公用平衡及外包装前独立整净M，无功能操作试验规格。 | foreground_manufacturing | 1kg完整验收车辆，仅实际条件交换 |

### 过程：来件环境台账及条件清洗（`prepare`）

接一物理完整未涂装件，记整件身份采购界无内功能细节，仅实际时清洗交换。

#### 输入

##### 产品流

###### 供货完整未涂装非实弹状态机动装甲车辆（`incoming_vehicle`）

一种实际完整新来件，既往建造全属上游；仅环境配置标识原净质量，无技术功能细节。

- 选定流： 供货完整未涂装非实弹状态机动装甲车辆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_prepare。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_prepare`
- 来源：

###### 自来水（`water`）

条件实际市政清洗补水实测kg，技术圈供水，非水资源或污染排放。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_prepare。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_prepare`
- 来源：

###### 单一供货水性工业清洗剂配方（`cleaner`）

仅实际识别供批SDS配方来kg库存闭合，不同供化学品分开，无组成稀释指令。

- 选定流： 单一供货水性工业清洗剂配方
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

实际低于1kV表计环境阶段耗，不推额定功率武器功能试耗，仅可归环境公用设施。

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

###### 收集送工业处理的水性清洗废液（`cleaning_effluent`）

条件一种实测污染液流分析身份记录处理接收方kg，不假定直排水体。

- 选定流： 收集送工业处理的水性清洗废液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_prepare。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_prepare`
- 来源：

##### 基本流

### 过程：实际表面涂装环境台账（`finish`）

归实际供配方环境公用废物物种治理后排，无涂料配方参数防护性能规定。

#### 输入

##### 产品流

###### 单一供货工业车辆底漆配方（`primer`）

实际单批供配方湿kg与SDS，无配方制造牌号涂层几何或施工参数，多种分别供配方须独身份。

- 选定流： 单一供货工业车辆底漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

###### 单一供货工业车辆面漆配方（`finish_coating`）

实际供湿配方供SDS批实测kg原库存退料，不规定涂料配方混合比固化设置防护性能。

- 选定流： 单一供货工业车辆面漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

###### 成品玻璃纤维涂装排气过滤垫（`filter_pad`）

仅实际环境治理采用此具体成品过滤介质时，供干kg配方状态；原玻纤非成品滤垫。

- 选定流： 成品玻璃纤维涂装排气过滤垫
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

###### 交流电（`finish_power`）

实际低于1kV表计环境阶段耗，不推额定功率武器功能试耗，仅可归环境公用设施。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废涂料残渣（`paint_residue`）

条件独收湿面漆残渣kg实SDS废分类接收方，不合并底漆废滤材溶剂废水。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

###### 涂料污染的废玻璃纤维过滤垫（`spent_filter`）

条件一种废物理滤材含留污染，实出kg合格处理，捕获颗粒非空气排放。

- 选定流： 涂料污染的废玻璃纤维过滤垫
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`particle_air`）

仅实际实测治理后即时未特指环境空气粒径未特指排放，不由涂装推必然排放，捕料另废。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

###### 二甲苯（所有异构体）（`xylene_air`）

仅实际供化学身份CAS1330-20-7及物种治理后质量时证至即时未特指环境空气，总VOC非二甲苯；历史2021无VOHAP来源不证明存在二甲苯。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_finish`
- 来源：

### 过程：环境验收独立净质量及交付（`dispatch`）

核同配置验收数材废公用平衡及外包装前独立整净M，无功能操作试验规格。

#### 输入

##### 产品流

###### 交流电（`dispatch_power`）

实际低于1kV表计环境阶段耗，不推额定功率武器功能试耗，仅可归环境公用设施。

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

条件实际非发泡非胶PE-LD外薄膜kg，排净M，其他实包装分别识别。

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

###### 坦克车及其他军用装甲机动车辆及其零件（`finished_machine`）

恰一种供新完整机动车环境表面涂装后同声明非实弹配置；公开宽身份在此限定一完整车辆，绝非混零件集合。无实弹载荷或功能细节，实际净M kg。

- 选定流： 坦克车及其他军用装甲机动车辆及其零件 `df061b40-6778-4622-adba-644b49be3524`
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
| allocation_direct | all processes | 先分配置工单原表领退库存废台账，实际返拒环境负荷归同配置验收输出，订单开工数非验收数，既往整车制造不重计。 |  |
| allocation_shared | shared utilities | 按实测因果环境设备时或分表耗，记实分母不确定性；物理分配确不可得时证明经济基准敏感性，无固定废料信用或未测通比。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收完整输出 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每验收整车 | 匹配涂装验收期 | 实际合适完整件称量设施 | 每台验收净质量 | 校准皮重原整读及独来件加留追加质量闭合 |
| cp_prepare | prepare | 独立原子交换 | foreground_record | 环境配置标识供SDS批状态，原kg领退库存废、原kWh采样时间介质，同一配置的验收设备数量 | 分别记实际供配方物理交换、原校准公用表及仅存在时治理后物种测；保库存退验收数闭合环境工单归属废接收方，无推断功能作业。 | kg; MJ | 每台完整实际期 | 同配置涂装验收周期 | 实际环境工厂边界 | 可归属工序交换 / 同一配置的验收设备数量 | 实配方身份校准读不确定性库存数量闭合 |
| cp_finish | finish | 独立原子交换 | foreground_record | 环境配置标识供SDS批状态，原kg领退库存废、原kWh采样时间介质，同一配置的验收设备数量 | 分别记实际供配方物理交换、原校准公用表及仅存在时治理后物种测；保库存退验收数闭合环境工单归属废接收方，无推断功能作业。 | kg; MJ | 每台完整实际期 | 同配置涂装验收周期 | 实际环境工厂边界 | 可归属工序交换 / 同一配置的验收设备数量 | 实配方身份校准读不确定性库存数量闭合 |
| cp_dispatch | dispatch | 独立原子交换 | foreground_record | 环境配置标识供SDS批状态，原kg领退库存废、原kWh采样时间介质，同一配置的验收设备数量 | 分别记实际供配方物理交换、原校准公用表及仅存在时治理后物种测；保库存退验收数闭合环境工单归属废接收方，无推断功能作业。 | kg; MJ | 每台完整实际期 | 同配置涂装验收周期 | 实际环境工厂边界 | 可归属工序交换 / 同一配置的验收设备数量 | 实配方身份校准读不确定性库存数量闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | incoming_vehicle; water; cleaner; cleaning_effluent; primer; finish_coating; filter_pad; paint_residue; spent_filter; particle_air; xylene_air; prepare_power; finish_power; dispatch_power; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为可归原交换平衡除同完整配置实际验收数量；同净交状态独测M，保kgMJ分子，件追溯不能替供质量。件面积体积身份须实际实测支持换算，不改公开属性为Mass。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_mass | finished_machine | 用实际校准合适整件称量设施原序日期配置读皮重复测不确定性，不虚构整车秤净重。M含同完整供非实弹件留干涂及明确声明永久留供流体仅一次；排在用燃油实弹试载临时试支持外包装散备。独核来整净加实际留追加减实移除与成M，目录战斗能力运输毛重不能替物理净记录。 | actual original whole-unit metrology and independent environmental mass balance |
| quality_supply | incoming_vehicle; primer; finish_coating; cleaner | 追实际完整来件未涂采购状态环境ID，无内系统描述。每供化为一实识供配方SDS版本批湿状态领退平衡；广墙妆底漆PTFE醇酸涂原不证工业车配方。分别供组份分开，但不公开混比教程，无整车加部件重清单。 | actual supplier gate/SDS/batch ledger; waste-environment |
| quality_emissions | particle_air; xylene_air | 仅实测治理后质量时物种介质有原方法检出限不确定性，CAS1330-20-7为全异构二甲苯，总VOC室内暴露长期土壤流非替代；粒径确未特指才用。捕滤残为废非空气排；历史2021报告含无VOHAP涂料，不证明二甲苯发生；区零低检出未测，背景电排非本地排。 | air-environment; actual species-specific sampling originals |
| quality_water_waste | water; cleaning_effluent; paint_residue; spent_filter | 实际供水质量体积计量与污染收液湿漆残废物理滤独记，工业污液不假定1kg/L，体质量换算须同流实密。每废组状态实际kg接收处理界独立；直排转处理不同，无通用EPA限或混废。 | water-environment; waste-environment; discharge-environment |
| quality_complete | dataset | 核全实供化库存电水表废转同配置验收数返工，实存在其他化擦介质废包装各另行身份，不因无UUID漏实交换。工序图为环境记账非制造教程必需清涂技术声称；数据用前须实完整物理环境原件，科学仍待审。 | actual complete original ledgers and qualification |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 恰1kg整验收非实弹车输出，公开成品44710Mass/kg参考输出每语名完全一致，类别限整件；须原独M质量闭合，检查过不批准方法。 |  |
| validation_basis | inventory | 稳定小写行规协议与两语kgMJ基准同配置验收分母独M一致，未测交换不一致供状态留审缺口。 |  |
| validation_scope | dataset | 仅由整供未涂非实弹件的安全环境前景，无武器技术细节建造路线推断，披缺上游实数据证据。 |  |
| validation_atomic | all flows | 每行一实供配方物理材料废或化学环境物种，UUID官方中文实际属性单位状态保，条件排须原件。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 一个供货新完整未涂装非实弹状态机动装甲车辆的表面涂装环境前景核算。工厂接收物理完整设备，记录采购门及实际环境配置身份，归属实际条件清洗及供涂料耗、环境治理电、水、收集废物与实测排放，随后记录环境质量验收、独立完整净质量及交付。既往车辆及部件建造属于上游。本PCR仅规定环境核算与一般计量，无车辆或武器设计、制造参数、装配序列、功能细节或性能优化。 |
| excluded_use | 排除独零件制造或部件武器集成、设计弹道功能试验、装甲规格操作教程、弹药含能载荷、在用运行耗油运输服务、翻新拆卸处置。产品M排外包装临时试验支持设备在用燃油实弹试载。此前景以整供车辆起始，并非全部车辆制造或完整摇篮到门；实际其他制造路线须独立适用与安全证据审查，不推断作业。 |
| required_metadata | 环境产品配置标识序号、完整供非实弹状态、来件与成品净质量及留涂料流体约定、供货门运输边界、独配方SDS批状态废去向、实际场期表电压、同配置验收数拒返、原整件校准净称独质量闭合、条件污染物CAS介质治理后方法不确定性、上游流缺口及科学待审 |
| required_quality_disclosure | 候选科学待审，实完整来成状态独M不确定性供环境配方身份表库存废物种原件场期配置验收数返分、未解流及上游运输处理缺；每kg整车涂装核算不可比运行防护性能非完整摇篮到门。 |
| update_trigger | 实际来供状态环境配置配方SDS供货场期表治理路线废接收质量方法源流身份科学重叠审变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| air-environment | handbook | U.S. Army, Life Cycle Environmental Assessment for the Mobile Protected Firepower (MPF) System, August2021, printedp17 / PDFpage23, manufacturing environmental air discussion only. https://home.army.mil/stewart/application/files/6016/3975/0650/Final_Life_Cycle_EA_for_MPF_on_Army_Installations.pdf | 历史定性涂空气核算背景，非配方军标VOC阈当前数或污染物存在证明，无最小影响结论采纳。 |
| water-environment | handbook | Same Army August2021 EA, printedp23 / PDFpage29, manufacturing industrial-water containment/treatment passage only. | 历史制造废液收处理区别，非当前必需路线直排限。 |
| waste-environment | handbook | Same Army August2021 EA, printedp34 / PDFpage40, manufacturing cleaner/paint/filtration environmental waste passage only. | 历史环境化废分开背景，无涂料选择配方施工指令，遵实际供状态当前记录。 |
| discharge-environment | handbook | U.S. EPA, Metal Products and Machinery Effluent Guidelines, official HTML overview, updated May13,2026, unpaginated industry/applicability sections. https://www.epa.gov/eg/metal-products-and-machinery-effluent-guidelines | 通行业路线直排适用区别，非地域法律合规通排限或实际车厂属该类证明。 |
