---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.sewing-thread-of-man-made-filaments-or-staple-fibres
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 人造长丝或短纤维制缝纫线

## 1. 范围与适用性

本 PCR 适用于以外购人造长丝纱或人造短纤维纱制造缝纫线的工厂门前景数据包。核心前景边界从纱线进厂开始，纳入适用路线上的并纱、合股或加捻、络筒与卷绕、纺织加捻油施加、检验和包装；边界终点是处于声明锥筒或线轴包装状态的可销售缝纫线及其直接运输包装。

湿法预处理、染色、水洗、干燥、热定形及其他化学整理不属于核心转换过程。当上述任一操作构成销售产品状态时，应以显式关联的前景过程建模，并记录其实际原子化学品、水、能源载体、废水、直接排放和残余物；不得将其隐藏在核心转换清单中。聚合、人造纤维生产、进厂纱线生产、配送、成衣制造、使用和生命末期属于上游或下游过程，不属于本门到门数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.sewing-thread-of-man-made-filaments-or-staple-fibres |
| classification_refs | CPC 3.0: 26410 - Sewing thread of man-made filaments or staple fibres |
| covered_products | 以人造连续长丝或合成/人工短纤维制成的缝纫线；产品可为未染色状态，或为已通过单独过程建模的染色/整理状态 |
| excluded_products | 非缝纫用途纱线；天然纤维缝纫线；不作为缝纫线销售的刺绣纱；钓鱼线、绳索、细绳、织物、服装和缝制作业 |
| representative_product | 以多股或合股人造长丝纱制成、经润滑并卷绕于声明锥筒上的未染色缝纫线 |
| production_route | 外购纱线接收；并纱/合股或加捻；纺织加捻油施加；卷绕/络筒；检验；包装；适用时关联单独湿处理过程 |
| market_state | 工厂门可销售缝纫线；声明纤维家族、长丝/短纤路线、线密度、股数、捻向与捻度、整理、颜色状态、锥筒/线轴类型和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门人造长丝或短纤维制可销售缝纫线 |
| How much | 1 kg 缝纫线净质量，不含锥筒/线轴和运输包装 |
| How well | 满足所声明的纤维家族与组成、长丝或短纤路线、线密度、股数、捻向与捻度、拉伸/伸长等级、整理、颜色状态及包装规格 |
| How long or cycle | 工厂门一个完整生产批次；不声称与任何使用寿命等效 |
| reference_flow_link | final_sewing_thread |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 kg |
| reference_product_flow | Yarn `c98c206f-fee3-45d6-9549-b22eeb6b058b` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | CPC 26410 产品身份；纤维家族与质量组成；长丝或短纤路线；如有则声明再生含量；线密度；股数；捻向与捻度；颜色与湿处理状态；润滑剂/整理剂身份；锥筒或线轴类型；产品净质量；生产地域；报告期 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明全部必需限定信息。Tiangong 中的通用基本名称不能替代 CPC 26410 和缝纫线限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 最终缝纫线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测定声明工厂门状态下缝纫线的调湿净质量；排除锥筒/线轴和运输包装，并披露调湿或含水基准。 |
| `material_mass_basis` | 纱线、加捻油、锥筒/线轴、纸箱和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测质量记录每个原子材料或废物，并归一化至 1 kg 缝纫线净产出。 |
| `electricity_energy_basis` | 交流电输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留以 kWh 表示的电表记录，并记录电压等级、地域和供应商或电网组合基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 缝纫线转换工厂接收的外购人造纱线；声明纤维组成、长丝/短纤路线、先前染色/整理状态、质量、供应商和批次身份 |
| starting_condition_role | 门到门缝纫线转换数据集的上游产品输入 |
| product_classification_scope | CPC 3.0 代码 26410 内的缝纫线；分类仅作为范围证据，不构成 canonical PCR 身份 |
| recursive_input_rule | 已分类为 CPC 26410 缝纫线的外购输入应保留为独立上游产品流，不得改标为原纱，也不得在本数据集内递归展开。 |
| upstream_dataset_requirement | 每个外购纱线或缝纫线输入均需有兼容上游数据集或显式记录的数据缺口；上游数据集应匹配纤维家族、组成、路线、地域和市场状态。 |
| disclosure | 披露现场发生的线形成、湿处理、整理、卷绕、检验和包装操作，并识别每项排除或单独关联的操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_core_conversion` | 核心前景过程 | 纳入生产声明缝纫线所需的全部现场并纱、合股、加捻、加捻油施加、卷绕/络筒、检验、返工和包装。 | `jrc-textiles-bref-2023` |
| `boundary_wet_processing` | 销售状态为染色或化学整理的缝纫线 | 当湿处理或化学整理属于销售状态时，关联单独前景过程，并记录每种实际原子化学品、水、能源、废水、残余物及直接排放流。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_downstream` | 产品系统 | 将进厂纱线生产置于上游，将配送、缝制、使用和生命末期置于下游；除非关联上述数据集，否则不得声称摇篮到门覆盖。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `thread_conversion_winding_packaging` | 缝纫线转换、卷绕与包装 | `required` | 工厂门缝纫线生产始终纳入 | 前景机械转换和包装 | 1 kg 可销售缝纫线净质量 |
| `wet_processing_linked` | 关联湿处理或化学整理 | `conditional` | 销售缝纫线经染色、水洗、热定形、涂层或其他化学整理时，作为单独关联前景过程纳入 | 路线特定前景湿处理 | 1 kg 转移至最终卷绕或工厂门的处理后缝纫线 |

### 过程：缝纫线转换、卷绕与包装（`thread_conversion_winding_packaging`）

#### 输入

##### 产品流

###### 人造长丝纱路线输入（`input_man_made_filament_yarn`）

仅在长丝路线中记录这一原子产品。供应商和批次记录应证明其为进厂纱线，而非已经可销售的缝纫线。

- 选定流：Yarn of man-made filaments, multiple or cabled (other than sewing thread, high tenacity yarn of polyamides, polyesters or viscose rayon), not put up for retail sale `d3526e15-e0a8-4d96-8688-2738fd9d20ba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次实际接收并消耗的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 合成短纤维纱路线输入（`input_synthetic_staple_yarn`）

仅在符合条件的合成短纤维路线中记录这一原子产品。Tiangong 精确 UUID 尚未解析；低于 85% 和人工纤维候选因不等价而被拒绝。

- 选定流：Yarn (other than sewing thread) of synthetic staple fibres, containing 85% or more by weight of such fibres
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次实际接收并消耗的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 人工短纤维纱路线输入（`input_artificial_staple_yarn`）

仅在人工短纤维路线中记录这一原子产品，并保留所声明的人工纤维组成。

- 选定流：Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次实际接收并消耗的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 纺织加捻油（`input_textile_twisting_oil`）

记录络筒或加捻期间施加的纺织加捻油配方质量。精确 Tiangong UUID 尚未解析，因为通用润滑油候选未保留纺织用途语义。

- 选定流：Textile twisting oil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次领用并消耗的实测质量，扣除有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 中压交流电（`input_medium_voltage_electricity`）

记录声明的 1-35 kV 供电边界下，加捻、卷绕、检验、抽风及包装设备的电表交流电消耗。

- 选定流：alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：生产批次期间生产线电表用量或从工厂总表按物理依据分配的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：

###### 聚丙烯缝纫线锥筒（`input_polypropylene_thread_cone`）

当可销售缝纫线保留在聚丙烯锥筒上时记录这一原子包装组件。精确 Tiangong UUID 尚未解析；聚丙烯树脂候选不是制成的锥筒，因而被拒绝。

- 选定流：Polypropylene sewing-thread cone
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：纳入生产批次的锥筒实测质量或供应商声明质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞纸箱（`input_corrugated_board_box`）

记录声明工厂门产品所使用的原子瓦楞纸板运输箱质量。

- 选定流：corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次消耗的纸箱实测质量或供应商声明质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终缝纫线（`final_sewing_thread`）

记录符合要求的工厂门缝纫线净质量。锥筒/线轴和运输包装质量不得计入参考产品数量。

- 选定流：Yarn `c98c206f-fee3-45d6-9549-b22eeb6b058b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经放行的合格缝纫线实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 合成缝纫线边角料（`output_synthetic_thread_offcuts`）

将批次产生的剪切线头、受损线和不可返工合成线作为一种具体废物流记录。精确 Tiangong UUID 尚未解析；废弃纤维织物候选与线类边角料不等价，因而被拒绝。

- 选定流：Synthetic sewing-thread offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：移交至声明废物管理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售缝纫线净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_output`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用转换与包装操作 | 首先细分或分表计量产品线、批次和湿处理操作，使缝纫线的输入、能源、包装和废物尽可能直接归属。 | `iso-14044-2006` |
| `allocation_physical_mass` | 剩余共用负荷 | 若细分或直接计量仍不能消除共用负荷，则按合格产品净质量分配，披露受影响流和分配比例；当其他物理关系可能实质改变结果时进行敏感性检验。 | `iso-14044-2006` |
| `allocation_rework_and_waste` | 内部返工和废物输出 | 内部重新卷绕或返工的线返回同一批次，不作为共产品；仅将离开场址进行外部回收或处置的物料记录为废物，并在本门到门清单之外披露外部回收收益。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `thread_conversion_winding_packaging` | 路线适用纱线和纺织加捻油 | 地磅、仓库领料、发票和退料记录 | 材料身份；如已解析则记录 Tiangong UUID；供应商；批次；纤维组成；期初质量；领用质量；退回质量 | 将采购/仓库记录与批次领退料记录核对 | kg | 每批次；每月核对 | 声明报告期 | 全部范围内转换生产线 | 消耗质量 = 领用质量 - 有记录退回质量；按合格缝纫线产出归一化 | 校准秤记录；供应商规格；库存核对 |
| `cp_electricity_meter` | `thread_conversion_winding_packaging` | 中压交流电 | 电表和生产时间记录 | 电表期初；电表期末；电压等级；生产线；批次时间；共用负荷分配基准 | 优先直接分表；否则从工厂总表按有文件记录的物理依据分配 | kWh | 每批次或班次；每月核对 | 声明报告期 | 全部范围内转换和包装设备 | 扣除有记录的空载/非产品负荷，以合格缝纫线产出归一化分配 kWh | 电表校准；账单核对；分配工作表 |
| `cp_packaging_records` | `thread_conversion_winding_packaging` | 聚丙烯锥筒和瓦楞纸箱 | 包装领用、供应商质量规格和退回记录 | 组件身份；组件数量；单位质量；领用数量；退回数量 | 称量代表性组件并核对领用减退回数量 | kg | 每个包装批次 | 声明报告期 | 参考产品所用全部包装 | 组件质量 = 净数量 × 已核实单位质量；按缝纫线净产出归一化 | 秤校准；供应商规格；数量核对 |
| `cp_product_output` | `thread_conversion_winding_packaging` | 最终缝纫线 | 成品秤和质量放行记录 | 批次；毛质量；皮重；缝纫线净质量；含水/调湿基准；不合格质量 | 称量放行产品，扣除单独测量的锥筒/线轴和包装皮重 | kg | 每批次 | 声明报告期 | 全部放行参考产品 | 仅汇总合格缝纫线净质量 | 校准秤；质量放行；皮重核实 |
| `cp_waste_output` | `thread_conversion_winding_packaging` | 合成缝纫线边角料 | 废物箱称重票和转移记录 | 废物身份；来源批次；容器皮重；毛质量；去向；日期 | 称量每次转移并扣除容器皮重 | kg | 每次转移；每月核对 | 声明报告期 | 全部范围内转换生产线 | 按批次汇总边角料净质量，并按合格产出归一化 | 校准秤；转移凭证；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 最终缝纫线 | net_thread_kg = gross_released_kg - cone_spool_tare_kg - transport_packaging_tare_kg | 放行毛质量；锥筒/线轴皮重；运输包装皮重 | 缝纫线净质量 | `iso-14048-2002` |
| `calc_material_normalization` | 质量型输入和废物 | normalized_kg_per_kg = lot_flow_kg / conforming_net_thread_kg | 批次流质量；合格净产出质量 | kg/kg 参考流 | `iso-14048-2002` |
| `calc_energy_normalization` | 中压交流电 | normalized_kWh_per_kg = assigned_lot_kWh / conforming_net_thread_kg | 分配至批次的电表用量；合格净产出质量 | kWh/kg 参考流 | `iso-14048-2002` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和纱线输入 | 保留产品规格、纤维组成、长丝/短纤路线、线密度、股数、捻度、整理、颜色状态及 CPC 26410 分类证据。 | 供应商证书；物料清单；质量放行记录 |
| `dq_temporal_coverage` | 全部前景流 | 在可获得时使用连续且有代表性的 12 个月；否则披露较短批次/生产期及其季节性、停机和产品组合限制。 | 带日期的电表、仓库、生产和废物记录 |
| `dq_completeness` | 过程边界 | 核对纱线输入、加捻油、包装、电力、合格产品、返工和线边角料；识别单独关联的湿处理及所有已知排除流。 | 已签署质量平衡和边界检查表 |
| `dq_measurement` | 质量和电力 | 使用校准仪器或供应商认证的单位质量，并保留任何共用电表的分配工作表。 | 校准证书；供应商规格；电表核对 |
| `dq_uuid_resolution` | 未解析原子流 | 在进入 active 审查前，对每个未解析 row_id 重复 Tiangong 检索；仅在状态、流类型、名称语义、流属性和单位均经核验后接受 UUID。 | 按 row_id 关联的审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 若数据集未声明缝纫用途、人造长丝或短纤维组成、CPC 26410 范围及全部必需限定信息，则产品类别不符合。 | `unsd-cpc-3-0-2025` |
| `validate_reference_mass` | 参考流 | 若参考数量包含锥筒/线轴或运输包装质量、缺少调湿基准，或未归一化为 1 kg 合格缝纫线净质量，则失败。 | `iso-14048-2002` |
| `validate_atomic_inventory` | 全部清单行 | 若选定流合并材料、公用工程、包装组件、废物、排放或未来选择指令，则失败；每行只能识别一个原子交换。 | `jrc-textiles-bref-2023` |
| `validate_route_boundary` | 染色或化学整理产品 | 当销售产品存在湿处理而被遗漏，或关联过程未记录实际原子配方、水、能源、废水、残余物和直接排放时，不符合完整工厂门要求。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | 转换批次 | 要求核对进厂纱线与加捻油、合格缝纫线、内部返工、库存变化和边角废料；无法解释的差额应报告，不得强行闭合。 | `iso-14048-2002` |
| `validate_uuid_state` | 含 UUID 行 | 仅当直接读取确认 state_code 100、所需流类型、匹配的名称语义及所声明流属性/单位时，才接受 Tiangong UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 人造长丝或短纤维制缝纫线的工厂门前景门到门生产数据集 |
| downstream_use | `secondary_dataset`；在审查地域、技术和产品状态代表性后可作为 `background_dataset` |
| allowed_use | 当兼容上游纱线和路线适用湿处理数据集已关联，且必需限定信息匹配时，用于摇篮到门或更广 LCA 模型 |
| excluded_use | 天然纤维缝纫线；非缝纫用途通用纱线；缺少上游纱线的摇篮到门声明；遗漏湿处理的染色/整理产品声明；使用阶段或耐久性等效 |
| required_metadata | PCR id 与版本；CPC 26410；产品限定信息；工厂与地域；报告期；技术；边界；上游纱线链接；如有则湿处理关联过程；分配；数据质量；未解析 UUID 披露 |
| required_quality_disclosure | 一手记录占比；电表和秤覆盖；时间与场址覆盖；共用电表分配；质量平衡结果；排除流；湿处理链接状态；未解析 UUID 行 |
| update_trigger | 纤维家族/组成、纱线路线、加捻技术、整理或湿处理路线、能源供应、包装、分配、工厂地域或实质改变清单的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, code 26410, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | 官方产品类别身份及其与非缝纫纱线类别的区分 |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023, ISSN 1831-9424, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | 人造纤维纱线准备、加捻与卷绕、络筒/加捻油、纱线染色及湿处理边界拆分 |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | 关联湿处理的物料、水和能源盘点，以及化学品管理、排放和废水记录 |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html (official description retrieved 2026-08-12) | LCI 边界、分配、报告和解释框架 |
| `iso-14048-2002` | Standard (`standard`) | ISO/TS 14048:2002, Environmental management - Life cycle assessment - Data documentation format, https://www.iso.org/standard/29872.html (official description retrieved 2026-08-12) | 透明的前景记录、计算和数据质量文档 |
| `wang-down-jackets-2023` | Literature (`literature`) | Wang et al., Carbon Footprint and Water Footprint Assessment of Down Jackets, 2023, DOI 10.1177/24723444231172216 | 同行评审全文对聚酯缝纫线作为辅料产品，以及纺织线生产包含纺纱、染色和整理阶段的独立确认 |
