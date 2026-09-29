---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-milking-and-dairy-machines-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 挤奶和乳制品机械零件，未另分类

## 1. 范围与适用性

本规则涵盖单独供应、具有明确身份且用于挤奶机或乳制品机械的零件，从制造至工厂验收的阶段。数据集须声明零件编号、适配主机、材料牌号、生产路线及是否接触乳品。不得将不同零件配置混为无差别平均产品。完整挤奶机和完整乳制品机械不属于本规则。运输包装、配送、安装、使用、维护及寿命终止阶段不计入工厂门口结果，除非另行建模并披露。联合国 CPC 3.0 将 44139 零件与 44131、44132 完整机械区分（`un-cpc-3-2025`）。制造商产品说明列有钢材和丁腈橡胶乳制品机械部件，但并未给出可转用的制造路线或数量（`alfalaval-h20-separator`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-milking-and-dairy-machines-n-e-c |
| classification_refs | CPC 3.0:44139；仅作为分类背景（`un-cpc-3-2025`） |
| covered_products | 已验收、单独供应的挤奶机或乳制品机械零件；每个数据集对应一种明确的零件配置。 |
| excluded_products | 完整机械、未指定用途的通用原材料、卫生耗材及更换服务。 |
| representative_product | 一件具有已声明钢材或弹性体配置、接触乳品的已验收机械零件。 |
| production_route | 声明实际采用的金属坯料加工或弹性体成型路线；其他实际路线须按具体交换记录。 |
| market_state | 制造商工厂门口的已验收成品零件净质量，不含运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适用于已指定挤奶机或乳制品机械的已验收成品零件。 |
| How much | 1 kg 已验收成品零件净质量。 |
| How well | 已声明零件编号、材料牌号、主机适配性、验收状态和乳品接触状态。 |
| How long or cycle | 一个已验收生产批次；不预设使用寿命。 |
| reference_flow_link | `finished_part_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 挤奶和乳制品机械零件，未另分类 `0ea78094-45f3-4068-9e30-73c26232c351` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件编号；适配主机和功能；材料牌号；制造路线；乳品接触状态；验收批次；已验收净质量；地区和报告期 |

在数据集元数据、过程说明或参考流备注中声明这些限定信息。所有清单行采用同一验收批次及其净质量作为分母。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_part_output` | 质量 | kg | 使用经校准的秤称量声明批次的已验收成品零件，排除运输包装和不合格品；采用 `cp_finished_mass`。测得的验收净质量是各每千克清单量的分母。 |
| `electricity_unit` | `electricity_input` | 电能 | kWh | 保留电表记录的 kWh 电能；如记录为电能 MJ，则除以 3.6 换算为 kWh。不得将低位热值当作电能。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有明确牌号的外购材料进入零件制造商的前景边界。 |
| starting_condition_role | 工厂收货时的材料投入；供应商生产由关联的上游数据集表示。 |
| product_classification_scope | 语义上属于 44139 的单独供应零件，每个数据集对应一种明确的零件配置。 |
| recursive_input_rule | 外购的另一 44139 零件只记录一次并关联其上游数据集；不得在此前景过程中重复展开供应商清单。 |
| upstream_dataset_requirement | 外购材料和能源须关联在牌号、地区及技术上适用的上游数据集。 |
| disclosure | 声明零件身份、路线、纳入的操作、外购投入边界、场址、期间、电表分配及排除的下游阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_part_identity` | 参考产品 | 仅纳入已验收、单独供应的零件；完整机械和未指定用途的原材料不属于产品边界。 | `un-cpc-3-2025` |
| `boundary_actual_operations` | 制造 | 将实际发生的加工、成型、装配、精整、清洁、检验和不合格品逐项记录为具体交换；未发生的操作不纳入。 | `alfalaval-h20-separator` |
| `boundary_upstream` | 外购投入 | 关联外购材料和能源的上游数据，不在前景中重复计入供应商生产。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_manufacture` | 零件制造与验收 | required | 每个验收批次；材料行只适用于已声明的路线。 | 前景生产与验收 | 1 kg 已验收成品零件净质量 |

### Process: 零件制造与验收 (`part_manufacture`)

下列行描述钢板路线、丁腈橡胶混炼胶路线及共用电力投入。前景数据包须将其他实际材料、公用工程、直接排放和废物各自记录为原子交换；不得用另一种材料替代已列行。

#### Inputs

##### Product flows

###### 合金钢板投入 (`steel_plate_input`)

仅在零件由合金钢板加工时纳入。记录实际合金牌号及称量数量；公开流名称较宽泛，牌号作为数据集限定信息。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：质量 / kg
- 数量规则：声明批次的合金钢板净领用 kg 除以已验收成品净质量 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_input`
- 来源：`alfalaval-h20-separator`

###### 未硫化丁腈橡胶混炼胶投入 (`nbr_compound_input`)

仅在将未硫化丁腈橡胶混炼胶成型为零件时纳入。UUID 尚未解决：硫化后的成品橡胶制品不能代替原料混炼胶。

- 选定流：未硫化丁腈橡胶混炼胶
- 流属性/单位：质量 / kg
- 数量规则：声明批次的未硫化丁腈橡胶混炼胶净投料 kg 除以已验收成品净质量 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nbr_input`
- 来源：`alfalaval-h20-separator`

###### 外购交流电投入 (`electricity_input`)

采用归属于声明批次的实测电能。由于已检索公开候选项不能表示以 kWh 计量的电能，UUID 尚未解决。

- 选定流：外购电网交流电
- 流属性/单位：电能 / kWh
- 数量规则：归属的电表 kWh 除以已验收成品净质量 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 已验收成品零件 (`finished_part_output`)

报告已验收零件净质量，排除不合格品和运输包装。零件元数据将宽泛的参考产品流限定到实际配置。

- 选定流：挤奶和乳制品机械零件，未另分类 `0ea78094-45f3-4068-9e30-73c26232c351`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_mass`
- 来源：`un-cpc-3-2025`

##### Waste flows

###### 新钢废料产出 (`new_steel_scrap_output`)

仅在钢材加工路线产生并输出新的黑色金属废料时纳入。废物流的实测总量不得与回收抵扣额直接抵消。

- 选定流：新钢废料 `bc4cdf13-d9bb-4ea1-a8ad-398f13fcfcaa`
- 流属性/单位：质量 / kg
- 数量规则：归属于批次的新钢废料称量 kg 除以已验收成品净质量 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_scrap`
- 来源：

##### Elementary flows

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用制造过程 | 优先为声明的零件配置使用独立批次、领料及分电表记录。 |  |
| `allocation_shared_meter` | 共用电力 | 如无分电表，按同一期间记录的设备运行时间及额定或实测功率分配实测电量；披露未分配的剩余用量。 |  |
| `allocation_scrap` | 钢废料 | 分别记录新钢废料总量及去向；不得隐含抵消再生利用的避免负担收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finished_mass` | `part_manufacture` | 已验收零件产出 | 校准秤及验收记录 | 零件编号；批次；合格件数；验收净质量；不合格品质量；秤编号 | 称量不含包装的合格零件，并与验收记录核对。 | kg | 每批 | 报告期 | 制造场址 | 每批验收净质量 kg；所有行的分母 | 校准证明及验收台账 |
| `cp_steel_input` | `part_manufacture` | 合金钢板投入 | 领料及称量记录 | 合金牌号；供应商；批次；领料质量；退料 | 将钢板领用和退料与声明批次核对。 | kg | 每批 | 报告期 | 制造场址 | 每 1 kg 参考流 | 物料台账及牌号证明 |
| `cp_nbr_input` | `part_manufacture` | 未硫化丁腈橡胶投入 | 批次投料记录 | 混炼胶牌号；批次；投料质量；退料 | 称量混炼胶投料并核对退料。 | kg | 每批 | 报告期 | 制造场址 | 每 1 kg 参考流 | 批次记录及称量凭证 |
| `cp_electricity` | `part_manufacture` | 外购电力 | 电表及分配记录 | 电表 kWh；设备工时；功率依据；批次 | 抄录电表，按记录的运行时间和功率归属共用电量。 | kWh | 每批或每计量期 | 报告期 | 制造场址 | 每 1 kg 参考流 | 电表记录及分配工作表 |
| `cp_steel_scrap` | `part_manufacture` | 新钢废料 | 废料称量单 | 批次；废料类型；总质量；去向 | 将新产生的黑色金属废料与旧料或混合废料分开称量。 | kg | 每批 | 报告期 | 制造场址 | 每 1 kg 参考流 | 称量单及去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot_mass` | `steel_plate_input`, `nbr_compound_input`, `electricity_input`, `new_steel_scrap_output` | q_ref = q_lot / m_accepted；q_lot 为归属于批次的相应单位交换量；m_accepted 为通过 `cp_finished_mass` 取得的验收成品净质量 kg。 | q_lot; m_accepted; cp_finished_mass; 相应清单行采集协议 | 每 1 kg 参考流的 q_ref |  |
| `accepted_output` | `finished_part_output` | m_accepted / m_accepted = 每 1 kg 参考流对应 1 kg 验收成品；m_accepted 必须大于零。 | m_accepted; cp_finished_mass | 1 kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料 | 将零件编号、适配主机、材料牌号及乳品接触状态追溯到同一验收批次。 | 图纸、物料清单、牌号证明及验收记录 |
| `dq_completeness` | 所有实际操作 | 将上表未列出的每种实际材料、公用工程、直接排放及废物另设原子行；只有证明未发生时才记录零值。 | 核对后的物料、电表和废物台账 |
| `dq_period` | 所有前景行 | 使用一致的场址与期间；披露跨批分配及缺失记录。 | 报告期台账及分配工作表 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若缺少零件编号、主机适配性、材料牌号、路线、乳品接触状态或验收批次，则拒绝数据包。 | `un-cpc-3-2025` |
| `validate_mass_basis` | 清单 | 验收净质量必须为正，各行使用同一验收批次分母；核对材料、产品、不合格品和废物质量。 |  |
| `validate_flow_identity` | 清单 | 仅使用精确匹配的公开流身份；在产品状态、分类、属性及单位核实前，未解决行不得关联 UUID。 |  |
| `validate_route` | 条件材料行 | 钢板和新钢废料仅适用于钢材路线，丁腈橡胶混炼胶仅适用于相应成型路线；其他实际交换须各自作为原子行。 | `alfalaval-h20-separator` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 零件制造前景数据集，经后续审查可用作 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 声明零件配置的 process 或 lifecyclemodel 投影 |
| allowed_use | 已识别的一种零件配置及其适配主机用途 |
| excluded_use | 混合不同零件族的平均结果、完整机械运行或未指定材料路线 |
| required_metadata | 零件编号；适配主机；路线；材料牌号；乳品接触状态；场址及期间；验收净质量；分配方法；废物去向 |
| required_quality_disclosure | 一手记录覆盖率、电表分配、未解决 UUID、未纳入操作、数据缺口及关联的上游数据集 |
| update_trigger | 材料、设计、路线、场址、电量分配或上游供应商发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版解释性说明，2025 年 6 月 30 日，第 4413 节，印刷页 229。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界 |
| `alfalaval-h20-separator` | `handbook` | Alfa Laval，《H20 Disc stack separator for the dairy industry》，文件编号 200002019-1-EN-GB，第 1–2 页。https://www.alfalaval.com/globalassets/documents/products/separation/centrifugal-separators/separators/dairy/product_leaflet_h20_separator_en.pdf | 乳制品机械钢材及丁腈橡胶部件实例；不转用制造数量 |
