---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.metallized-yarn
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 金属化纱线

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 27993 的工厂门口金属化纱线。其覆盖以纺织纱线或可形成纱线的纺织组分为基材、表面覆有金属或与金属单丝、金属线、金属条等离散金属组分结合，并作为纱线销售用于下游纺织制造的产品。前景数据包应声明纺织基材、金属种类、金属引入路线、纱线结构、表面或保护涂层、线密度、金属质量分数和销售状态。

本 PCR 不包括未与金属结合的纺织纱线、作为金属线材销售的裸金属线、由金属线或金属化纱线制成的机织物、成衣和其他下游纺织制品，以及金属组分或制造路线未披露的混合产品。参考清单给出证据支持的两类路线：纺织纱线直接金属覆层路线，以及金属单丝与基纱机械结合路线。采用其他路线的生产者应保持相同的计量、边界、分配、数据质量和校验规则，同时把实际使用的每项材料、公用工程、废物和基本流分别记录为单一原子交换行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.metallized-yarn |
| classification_refs | CPC 3.0: 27993, Metallized yarn |
| covered_products | 金属覆层纺织纱线；与金属单丝、金属线或金属条结合的纺织纱线；供应下游织造、针织、刺绣或其他纺织制造的金属化纱线。 |
| excluded_products | 未与金属结合的纺织纱线；作为线材销售的裸金属线；金属线或金属化纱线机织物；非金属花式捻线；成品织物、服装及其他下游制品；金属或基材未声明的产品。 |
| representative_product | 卷绕后供应工业纺织用途的可销售金属化纱线，以铝覆层聚酯长丝纱线或与不锈钢单丝机械结合的聚酯纱线作为代表。 |
| production_route | 路线特定的工厂生产：采用已声明的沉积或镀覆技术直接形成金属覆层，或将一根已声明的金属单丝与一根已声明的纺织基纱机械加捻/包缠，随后在线检验和卷绕。 |
| market_state | 工厂门口已制成、干燥、可销售的纱线；纱线净质量不包括筒管、线轴、可重复使用载体和运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在纺织纱线结构中提供已声明金属组分、供下游纺织制造使用的金属化纱线。 |
| How much | 工厂门口 1 kg 可销售金属化纱线净干质量。 |
| How well | 符合生产者声明的基材、金属种类、金属质量分数、纱线结构、线密度、覆层状态和验收规范。 |
| How long or cycle | 一个已完成生产批次；本中间产品不规定服务寿命。 |
| reference_flow_link | 将不合格品与返工核算完成后，由下列参考产品流实现功能单位。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 金属化纱线净干质量 |
| 参考产品流 | 金属化纱线 `fae82400-7c2c-4779-a516-2c6dcdbee472` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纺织基材和纤维组成；金属种类和形态；金属引入路线；纱线结构；线密度及测试条件；金属质量分数；保护涂层或整理；含湿状态；生产地域；生产期间；销售状态；排除筒管、线轴、载体和运输包装质量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 可销售纱线净干质量。排除筒管、线轴、可重复使用载体和运输包装，并披露称量采用的含湿调节基准。 |
| `material_mass` | 纺织基材、金属、成品纱线、不合格品和废料 | Mass | kg | 使用校准秤计量，或根据已核对的批次领料和退料记录计算。保持每种材料身份独立，不得合并不同金属、基材或废物流。 |
| `electricity_use` | 覆层、加捻/包缠、检验和卷绕用电 | Energy | kWh | 在可行时使用路线特定的分表电量；否则在归一化前按运行时间、额定负荷或其他物理驱动因素对共享电表进行有记录的分配。 |
| `linear_density_disclosure` | 可销售金属化纱线 | Linear density | tex | 报告用于产品验收的测试方法、调湿状态、测定次数和批次结果；没有测得纱长和匹配调湿条件时，不得用线密度换算产品质量。 |

## 5. 系统边界

前景边界始于已声明的纺织纱线、金属原料或单丝以及其他路线特定投入到达金属化纱线生产场址之时。边界包括路线特定的金属引入、适用时的加捻或包缠、在线检验、卷绕、返工以及这些工序产生的不合格品处理。纺织纱线、铝、不锈钢、电力和其他外购投入的生产属于上游，并需要关联上游数据集。下游织造、针织、刺绣、服装制造、使用和生命周期末端均在前景边界之外。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金属化纱线制造场址收到的纺织基材和金属原料，已声明供应商、组成、质量、含湿状态和上游数据集标识。 |
| starting_condition_role | 金属化纱线前景工序的上游产品投入。 |
| product_classification_scope | 仅 CPC 3.0 代码 27993；下游机织物和其他纺织制品不在本 PCR 范围内。 |
| recursive_input_rule | 若使用金属化纱线作为生产参考金属化纱线的投入，则按其自有数据集和质量只记录一次上游产品投入，不得在同一前景过程中递归展开其生产。 |
| upstream_dataset_requirement | 为实际使用的每种纺织基材、每种金属原料、电力供应和其他外购投入提供产品特定或有代表性的上游数据集。 |
| disclosure | 披露金属种类和形态、基材组成、引入技术、保护整理、返工回路、收率定义、排除的包装或载体质量、场址、期间及任何共享过程分配。 |

### 规范性规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_specific` | 前景过程图 | 只纳入已声明路线，但应包括生产场址内从收到投入到验收卷绕纱线的全部工序，包括路线特定覆层或结合、返工、检验和不合格品处理。 | `repon-mikucioniene-2021`; `jrc-textiles-bref-2023` |
| `boundary_upstream_inputs` | 外购材料和能源投入 | 将上游生产保留在前景边界外，并为每项单独识别的纺织基材、金属和能源载体关联数据集。 | `ec-pef-2021-2279` |
| `boundary_no_hidden_wet_steps` | 存在湿法镀覆、清洗或涂覆工序时 | 如果已声明路线使用水、化学品、溶剂或湿处理，则将每项实际化学品投入、水投入、废水输出、污泥输出和物质特定直接排放分别增加为原子交换；不存在此类工序时应以文件说明，而不是设置零值占位行。 | `jrc-textiles-bref-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_coating` | 直接金属覆层、检验和卷绕 | conditional | 金属直接沉积或镀覆到纺织纱线时纳入。 | 以一种已声明纺织基材和一种已声明金属形成验收金属覆层纱线。 | 此路线 1 kg 验收金属化纱线 |
| `metal_filament_combination` | 金属单丝结合、检验和卷绕 | conditional | 金属单丝与纺织基纱加捻或包缠时纳入。 | 以一种已声明基纱和一根已声明金属单丝形成验收复合金属纱线。 | 此路线 1 kg 验收金属化纱线 |

### 过程：直接金属覆层、检验和卷绕（`metal_coating`）

#### 输入

##### 产品流

###### 聚酯长丝纱线基材（`polyester_yarn_input_coating`）

未染色聚酯长丝纱线作为代表性直接覆层路线的纺织基材跨越前景边界。其领用干质量由批次领料和退料记录取得。

- 选定流：Polyester filament yarn, undyed
- 流属性/单位：Mass / kg
- 数量规则：覆层批次前景领用干质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 来自 `metal_coating` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_coating_batch`
- 来源：`repon-mikucioniene-2021`

###### 铝原料（`aluminium_input_coating`）

铝作为沉积在聚酯纱线上的代表性金属跨越前景边界。记录实际批次净消耗量，并保留金属牌号和供应商证据。

- 选定流：Aluminium, primary, unwrought
- 流属性/单位：Mass / kg
- 数量规则：批次测得的前景铝领用量减去回收的洁净退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 来自 `metal_coating` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_coating_batch`
- 来源：`repon-mikucioniene-2021`

###### 金属覆层中压电力（`electricity_input_coating`）

电力跨越前景边界，用于该路线的沉积或镀覆设备、适用时的真空设备、检验和卷绕。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：路线特定分表读数或对共享电表进行有记录的物理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 来自 `metal_coating` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_coating_energy`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 直接覆层路线验收金属化纱线（`metallized_yarn_output_coating`）

验收覆层纱线是在完成在线检验、返工核算和卷绕后的路线特定参考产品。其净干质量不包括筒管、线轴、载体和运输包装。

- 选定流：金属化纱线 `fae82400-7c2c-4779-a516-2c6dcdbee472`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据参考流定义，恰好 1 kg 验收纱线净干质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：reference flow
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 不合格铝覆层聚酯纱线（`offspec_yarn_output_coating`）

除非可证明其作为返工返回同一批次，否则不合格覆层纱线以单独称量的废物流离开过程。

- 选定流：Off-spec aluminium-coated polyester yarn
- 流属性/单位：Mass / kg
- 数量规则：未作为有记录返工返回的前景不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 来自 `metal_coating` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_coating_batch`
- 来源：

##### 基本流

### 过程：金属单丝结合、检验和卷绕（`metal_filament_combination`）

#### 输入

##### 产品流

###### 聚酯长丝基纱（`polyester_yarn_input_combination`）

未染色聚酯长丝纱线作为代表性不锈钢单丝机械结合路线的基纱跨越前景边界。

- 选定流：Polyester filament yarn, undyed
- 流属性/单位：Mass / kg
- 数量规则：结合批次前景领用干质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 来自 `metal_filament_combination` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_combination_batch`
- 来源：`repon-mikucioniene-2021`

###### 不锈钢单丝（`stainless_steel_monofilament_input`）

一根已声明的不锈钢单丝作为与聚酯基纱加捻或包缠的金属组分跨越前景边界。

- 选定流：Stainless steel monofilament
- 流属性/单位：Mass / kg
- 数量规则：结合批次前景领用干质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 来自 `metal_filament_combination` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_combination_batch`
- 来源：`repon-mikucioniene-2021`

###### 加捻和卷绕中压电力（`electricity_input_combination`）

电力跨越前景边界，用于该路线的加捻或包缠、在线检验和卷绕设备。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：路线特定分表读数或对共享电表进行有记录的物理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 来自 `metal_filament_combination` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_combination_energy`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单丝结合路线验收金属化纱线（`metallized_yarn_output_combination`）

验收复合纱线是在完成在线检验、返工核算和卷绕后的路线特定参考产品。其净干质量不包括筒管、线轴、载体和运输包装。

- 选定流：金属化纱线 `fae82400-7c2c-4779-a516-2c6dcdbee472`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据参考流定义，恰好 1 kg 验收纱线净干质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：reference flow
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 不合格不锈钢单丝聚酯纱线（`offspec_yarn_output_combination`）

除非可证明其作为返工返回同一批次，否则不合格复合纱线以单独称量的废物流离开过程。

- 选定流：Off-spec stainless-steel-filament polyester yarn
- 流属性/单位：Mass / kg
- 数量规则：未作为有记录返工返回的前景不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 来自 `metal_filament_combination` 的验收金属化纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_combination_batch`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 路线特定生产批次 | 首先拆分路线、产品和返工记录，使投入、能源、验收输出和不合格品能够直接归属而无需分配。 | `ec-pef-2021-2279` |
| `allocation_physical` | 共享覆层、加捻、检验、卷绕或公用工程记录 | 无法直接归属时，采用有记录的物理关系分配，例如路线特定运行时间、计量能源或干质量吞吐量；只有不存在可辩护的物理关系时才允许经济分配，并应披露。 | `ec-pef-2021-2279` |
| `allocation_rework` | 内部返工 | 将返工纱线保留在生产批次内，只对其新增的实测材料和能源计量一次；不得把同一返工质量同时报告为产品和废物。 | `ec-pef-2021-2279` |
| `allocation_scrap` | 离开前景边界的不合格纱线 | 将实测不合格品报告为废物输出。任何回收收益或替代产品主张属于明确声明的下游情景，不得静默扣减前景清单。 | `ec-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_metal_coating_batch` | `metal_coating` | 基材投入、铝投入、验收输出、不合格输出和返工 | 批次材料记录 | batch_id; substrate_item; substrate_mass; aluminium_item; aluminium_issued_mass; aluminium_return_mass; accepted_net_dry_mass; reject_mass; rework_mass; moisture_condition | 将校准秤记录与领料、退料、生产、质量和废物票据核对。 | kg | 每批 | 有代表性的连续 12 个月，或较短已声明生产期内的全部批次 | 数据集覆盖的每个场址 | 汇总不重叠批次记录，将返工保留在内部，然后按验收净干质量归一化。 | 校准证书；签字批次记录；领料和退料票据；不合格品处置；含湿调节记录。 |
| `cp_metal_coating_energy` | `metal_coating` | 覆层、检验和卷绕电力 | 电表记录 | meter_id; start_time; end_time; start_reading; end_reading; route_runtime; shared_meter_driver; batch_id | 读取路线分表；共享时保留电表总量和物理分配计算。 | kWh | 每批或每个计量区间 | 与材料记录相同的期间和场址覆盖 | 数据集覆盖的每条覆层线 | 在单独计量时扣除经核实的非生产负荷，按已声明物理驱动因素分配共享用电，并按验收净干质量归一化。 | 电表标识；校准或公用事业核对；运行日志；分配工作簿。 |
| `cp_metal_combination_batch` | `metal_filament_combination` | 基纱投入、单丝投入、验收输出、不合格输出和返工 | 批次材料记录 | batch_id; base_yarn_item; base_yarn_mass; metal_monofilament_item; metal_monofilament_mass; accepted_net_dry_mass; reject_mass; rework_mass; moisture_condition | 将校准秤记录与领料、退料、生产、质量和废物票据核对。 | kg | 每批 | 有代表性的连续 12 个月，或较短已声明生产期内的全部批次 | 数据集覆盖的每个场址 | 汇总不重叠批次记录，将返工保留在内部，然后按验收净干质量归一化。 | 校准证书；签字批次记录；领料和退料票据；不合格品处置；含湿调节记录。 |
| `cp_metal_combination_energy` | `metal_filament_combination` | 加捻、检验和卷绕电力 | 电表记录 | meter_id; start_time; end_time; start_reading; end_reading; route_runtime; shared_meter_driver; batch_id | 读取路线分表；共享时保留电表总量和物理分配计算。 | kWh | 每批或每个计量区间 | 与材料记录相同的期间和场址覆盖 | 数据集覆盖的每条结合生产线 | 在单独计量时扣除经核实的非生产负荷，按已声明物理驱动因素分配共享用电，并按验收净干质量归一化。 | 电表标识；校准或公用事业核对；运行日志；分配工作簿。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每项采集的材料、能源和废物交换 | 归一化交换量 = 同一路线和期间的交换总量 / 同一路线和期间的验收金属化纱线净干质量 | 不重叠交换总量；验收纱线净干质量 | 适用时为 kg/kg 或 kWh/kg | `ec-pef-2021-2279` |
| `calc_metal_consumption` | 直接覆层金属投入 | 净金属投入 = 金属领用量 - 经核实的洁净金属退料；不得扣除随离开前景边界废物带走的金属 | 金属领用质量；洁净退料质量 | kg 净金属投入 | `ec-pef-2021-2279` |
| `calc_batch_mass_balance` | 每条路线和报告期间 | 质量平衡差 = 材料投入总量 - 验收纱线输出 - 实测材料废物输出 - 经核实的洁净退料；调查并披露残差，不得强制设为零 | 基材和金属投入；验收输出；废物输出；洁净退料 | kg 及材料投入总量百分比 | `ec-pef-2021-2279` |
| `calc_metal_mass_fraction` | 参考产品限定信息 | 金属质量分数 = 验收纱线中的实测金属质量 / 验收纱线净干质量，采用批次质量核对或有记录的产品组成测试 | 验收产品金属质量；验收纱线净干质量 | kg metal/kg yarn | `repon-mikucioniene-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部投入 | 保留准确的基材组成、金属种类和形态、路线、纱线结构、线密度、覆层或整理，以及已确认时的 Tiangong UUID。 | 产品规范；物料清单；state-100 UUID 证据；供应商声明。 |
| `dq_temporal` | 前景记录 | 使用一个有代表性的连续 12 个月期间，除非生产期更短；披露期间、停机和排除批次。 | 生产日历；批次登记；电表覆盖报告。 |
| `dq_completeness` | 每条纳入路线 | 核对材料领用、退料、验收输出、返工、不合格品和计量能源；记录实际发生的任何路线特定用水、化学品、溶剂、废水、污泥或直接排放交换。 | 签字核对表；废物票据；电表核对；环境监测记录。 |
| `dq_measurement` | 质量、能源和线密度 | 使用经过校准或公用事业核对的仪器，并保留方法、条件、频率以及不确定度或公差信息。 | 校准证书；测试报告；公用事业账单；仪器日志。 |
| `dq_representativeness` | 多生产线或多场址数据集 | 纳入数据集声称覆盖的全部生产线和场址，或记录以产量加权的抽样和聚合方法。 | 生产线/场址产量总数；抽样方案；聚合工作簿。 |
| `dq_uuid_resolution` | 未解决的清单流身份 | 在命名原子交换未经混合检索和 state-100 直读独立确认前，不得分配清单 UUID。 | manifest 行级候选记录和直读证据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 在 state 100 应解析为 Product flow、基础名称 Metallized yarn、CPC 27993、定量参考 Mass，且参考单位为 kg。 | `unsd-cpc-3-2025` |
| `validate_reference_amount` | 参考流 | 验收输出应恰好等于 1 kg 纱线净干质量；应排除载体和包装质量并披露含湿状态。 | `ec-pef-2021-2279` |
| `validate_route_exclusivity` | 过程图 | 只有生产记录显示相应路线时才纳入 `metal_coating`、`metal_filament_combination` 或两者；在完成路线级质量和能源核对前不得合并路线清单。 | `repon-mikucioniene-2021` |
| `validate_atomic_flows` | 清单行 | 每个选定流应为一个具体交换。不同金属、纺织基材、化学品、能源载体、废物流和排放物质应保持为独立行。 | `jrc-textiles-bref-2023` |
| `validate_mass_balance` | 每条路线和期间 | 报告计算得到的质量平衡残差，并针对领料、退料、返工、不合格品和验收输出记录调查材料差异。 | `ec-pef-2021-2279` |
| `validate_uuid_evidence` | 清单 UUID | 拒绝缺少混合检索证据和与选定原子流精确匹配的 state-100 直读证据的清单 UUID。 |  |
| `validate_bilingual_alignment` | 英文和中文 PCR | 两种语言中的 process ids、row ids、rule ids、受控 token、source ids 和 UUID 的顺序应完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 金属化纱线前景生产数据包和可发布单元过程数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当必需限定信息和代表性相匹配时，用于下游纱线加工、织造、针织、刺绣、纺织产品及路线特定供应链研究的 LCA。 |
| excluded_use | 裸金属线、未与金属结合的纺织纱线、机织物、服装、金属或基材未披露的产品，或忽略金属种类、金属分数、覆层路线或纱线结构差异的比较。 |
| required_metadata | PCR id 和版本；CPC 27993；产品流和 Mass UUID；纺织基材；金属种类和形态；引入路线；纱线结构；线密度；金属质量分数；覆层或整理；含湿状态；地域；期间；路线份额；分配；净质量排除项；未解决 UUID。 |
| required_quality_disclosure | 记录覆盖；校准和电表核对；质量平衡残差；路线级分配；返工和不合格品处理；上游数据集选择；缺失的路线特定交换；UUID 核验状态；数据局限。 |
| update_trigger | 基材、金属种类或形态、金属分数、沉积/镀覆或结合路线、保护整理、主要设备、电力供应、场址组合、分配方法、产品规范或代表期间发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, explanatory notes dated 30 June 2025, subclass 27993, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-13）。 | CPC 子类准确身份及其与相邻纺织制品的区分。 |
| `ec-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-13）。 | 生命周期清单完整性、企业特定前景数据、物理分配优先、归一化和质量披露。 |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://eippcb.jrc.ec.europa.eu/reference/textiles-industry（检索日期 2026-08-13）。 | 纺织工序过程覆盖，以及能源、水、化学品、废物、废水和排放的条件性记录。 |
| `repon-mikucioniene-2021` | literature | Repon, M. R.; Mikucioniene, D. Progress in Flexible Electronic Textile for Heating Application: A Critical Review. Materials 14 (2021) 6540. https://doi.org/10.3390/ma14216540。已通过 Europe PMC PMC8585370 核验开放全文。 | 金属线/基纱结合；金属覆层纱线路线；溅射、化学镀和气相沉积路线证据；路线和组成披露。 |
