---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-man-made-filaments-multiple-or-cabled-other-than-sewing-thread-high-tenacity-ya-0a2734ab
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非供零售的人造长丝纱线，多股纱线或编织纱线（缝纫线，聚酰胺、聚酯或粘胶人造丝的高强力纱线除外）

## 1. 范围与适用性

本 PCR 适用于由人造连续长丝纱合并制成多股、折叠、合股或缆线纱的工厂门前景数据包，覆盖非供零售的工业纱线。它不包括缝纫线、聚酰胺/聚酯/粘胶人造丝高强力纱、零售包装纱、短纤纱、作为单丝销售的产品，以及以变形而非合股或成缆为产品定义工序的变形纱。

最小前景边界从采购的合格长丝纱生产卷装开始，经过并纱卷绕、加捻或成缆和成品卷绕，止于合格多股或缆线纱净产品。聚合物生产、长丝成形、染色、化学整理、使用和生命终期位于最小边界之外。若报告设施执行任何被排除的工序且无法与产品批次分离，必须将其作为单独识别的前景过程加入，并逐项列出原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-man-made-filaments-multiple-or-cabled-other-than-sewing-thread-high-tenacity-ya-0a2734ab |
| classification_refs | CPC 3.0: 26421 |
| covered_products | 合成或人工连续长丝制成的多股、折叠、合股或缆线纱，但不包括明确排除项 |
| excluded_products | 缝纫线；聚酰胺、聚酯或粘胶人造丝高强力纱；供零售的纱线；短纤纱；作为单丝销售的产品；以变形而非合股或成缆为定义工序的产品 |
| representative_product | 工厂门涤纶长丝双股纱，按工业散装转移方式卷绕并以纱线净质量报告 |
| production_route | 合格长丝纱并纱卷绕或直接筒子架喂入、加捻或成缆、成品卷绕 |
| market_state | 生产设施门口的工业成品纱，非供零售，以扣除可重复使用载具和外部运输包装后的净质量计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可用于下游纺织加工的合格人造长丝多股或缆线纱 |
| How much | 1,000 kg 纱线净质量 |
| How well | 符合 CPC 26421，并声明长丝材料、组分根数、合股或成缆结构、捻向和捻度、线密度及卷装形式 |
| How long or cycle | 工厂门一个已完成生产批次；不赋予使用阶段服务期限 |
| reference_flow_link | `doubling_twisting_winding` 的合格输出流净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 纱线净质量 |
| 参考产品流 | 非供零售的人造长丝纱线，多股纱线或编织纱线（缝纫线，聚酰胺、聚酯或粘胶人造丝的高强力纱线除外） `d3526e15-e0a8-4d96-8688-2738fd9d20ba` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 长丝聚合物或材料；组分根数；合股或成缆结构；S 或 Z 捻向；捻度；线密度；非高强力确认；非零售市场状态；净质量基准；生产地理范围和报告期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。限定信息缺失时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和纱线材料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告扣除可重复使用载具和外部运输包装后的纱线净质量，并声明称量所用调湿基准。 |
| `electricity_energy` | 中压电力输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用已披露的换算将经核验的电表读数转换为 MJ，并保留原始电表单位。 |
| `twist_linear_density` | 产品身份和批次记录 | 已声明的工程测量 | turns/m 和 tex 或 dtex | 对报告批次采用同一试验或生产控制基准记录捻向、捻度和线密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格的单股或已合股人造长丝纱以生产卷装形式入厂，并声明材料身份和上游数据集引用 |
| starting_condition_role | 前景并纱、加捻、成缆和卷绕工序的采购产品输入 |
| product_classification_scope | 输出为 CPC 26421；CPC 35520 合成长丝纱和 CPC 35550 人工长丝纱是常见上游输入范围 |
| recursive_input_rule | 任何已属于 CPC 26421 的采购纱线仍作为可见产品输入并链接单独的上游数据集，不得并入前景输出身份。 |
| upstream_dataset_requirement | 每种采购长丝纱输入必须有与聚合物、纱线状态和地理范围匹配的供应商特定或代表性上游生产数据集。 |
| disclosure | 声明输入聚合物、卷装状态、组分根数、设备路线、过程所有权、批次覆盖范围、被排除的湿法或热处理工序，以及可重复使用载具是否跨越报告边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground_system_boundary | 纳入报告批次直接控制的并纱卷绕或筒子架喂入、加捻或成缆、成品卷绕、过程检验、电力使用、合格输出和纱线废物处理。 | `kim-et-al-2025-twisting-process`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | purchased_filament_yarn | 将每种采购长丝纱作为原子产品输入并链接上游数据集；不得在本前景过程中重建聚合物或长丝生产。 | `unsd-cpc-3-0-26421` |
| `boundary_excluded_operations` | excluded_operations | 排除染色、化学整理、外部运输包装、配送、使用和生命终期；若研究明确扩展边界，则必须单独盘查每个新增工序。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `doubling_twisting_winding` | 并纱卷绕、加捻或成缆及成品卷绕 | `required` | 合格前景产品始终需要 | 前景生产 | 1,000 kg 合格纱线净输出 |

### 过程：并纱卷绕、加捻或成缆及成品卷绕（`doubling_twisting_winding`）

#### 输入

##### 产品流

###### 涤纶长丝输入（`input_polyester_filament`）

当采购涤纶长丝作为组分纱进入报告批次时记录。

- 选定流：涤纶长丝 `30173859-61d4-4518-ba9e-6846b8491c1b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入批次的前景净质量，与产品输出和涤纶纱废物核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

###### 锦纶 6 长丝输入（`input_nylon6_filament`）

当普通强度锦纶 6 长丝进入报告批次时记录；高强力聚酰胺纱不属于本 PCR。

- 选定流：Nylon 6 filament yarn, non-high-tenacity
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入批次的前景净质量，与产品输出和锦纶 6 纱废物核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

###### 人工长丝纱输入（`input_artificial_filament`）

当采购人工长丝纱作为组分纱进入报告批次时记录。

- 选定流：人造长丝纱（不包括缝纫线及多股线或缆线），不供零售 `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入批次的前景净质量，与产品输出和人工长丝纱废物核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

###### 电网供应的中压交流电（`input_medium_voltage_electricity`）

记录供应给加捻和卷绕设备以及过程边界内直接辅助设备的计量电力。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告批次的前景分表用电量，或经设施总表核对的用电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格人造长丝多股或缆线纱（`output_multiple_cabled_yarn`）

仅记录满足本 PCR 产品身份和全部排除条件的输出。

- 选定流：非供零售的人造长丝纱线，多股纱线或编织纱线（缝纫线，聚酰胺、聚酯或粘胶人造丝的高强力纱线除外） `d3526e15-e0a8-4d96-8688-2738fd9d20ba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格纱线输出的前景净质量；以该测量值作为归一化分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

##### 废物流

###### 废涤纶长丝纱（`waste_polyester_filament_yarn`）

记录作为断头、开机损失、不合格纱或卷绕废料移除的涤纶长丝纱。

- 选定流：Waste polyester filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程或转入场内回收的前景分类废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

###### 废锦纶 6 长丝纱（`waste_nylon6_filament_yarn`）

记录作为断头、开机损失、不合格纱或卷绕废料移除的普通强度锦纶 6 长丝纱。

- 选定流：Waste Nylon 6 filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程或转入场内回收的前景分类废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

###### 废人工长丝纱（`waste_artificial_filament_yarn`）

记录作为断头、开机损失、不合格纱或卷绕废料移除的人工长丝纱。

- 选定流：Waste artificial filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程或转入场内回收的前景分类废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_lots` | mixed_product_production | 在应用分配前，按产品批次、设备和报告期细分生产。 |  |
| `allocation_shared_electricity` | shared_electricity | 无法直接分表计量时，使用有记录的设备运行时间和实测负荷分配共用电力，并保留原始电表和生产记录。 | `eu-textiles-bat-2022` |
| `allocation_yarn_waste` | yarn_waste | 生成纱线废物的负担保留在前景过程中直至废物交接点；不得在本前景清单内抵扣避免的原生生产。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_mass_balance` | `doubling_twisting_winding` | 长丝纱输入、合格纱线输出和按聚合物区分的纱线废物 | 地磅、秤、批次台账和质量放行记录 | timestamp; lot_id; material_identity; polymer; high_tenacity_flag; input_mass; accepted_output_mass; waste_mass; carrier_tare; disposition | 使用经校准设备称量每项输入、合格输出和分类废物流；扣除有记录的载具皮重，并将每条记录链接至批次。 | kg | 每批次及每次废物交接 | 整个报告期 | 全部纳入的生产线和班次 | 按 row_id 和批次汇总净质量，再用 `calc_normalize_reference_mass` 归一化 | 校准记录；皮重记录；批次谱系；质量放行状态；废物转移记录 |
| `cp_electricity_meter` | `doubling_twisting_winding` | `input_medium_voltage_electricity` | 电力分表或经核对的设施总表 | meter_id; timestamp_start; timestamp_end; opening_reading; closing_reading; original_unit; machine_runtime; measured_load; lot_id | 每批次读取专用分表；共用时核对设施读数，并仅凭有记录的运行时间和实测负荷分配。 | 原始电表单位和 MJ | 每批次或电表区间 | 整个报告期 | 全部纳入的加捻、卷绕和直接辅助设备 | 末读数减初读数，剔除有记录的边界外用电，分配共用量，换算为 MJ 并归一化 | 电表身份；电表校准或核验；核对记录；分配记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 全部清单交换 | 归一化因子 = 1,000 kg / 实测合格纱线净输出 kg；每项实测交换乘以该因子 | 实测交换；实测合格纱线净输出 | 每 1,000 kg 参考产品的交换量 |  |
| `calc_yarn_mass_reconciliation` | 纱线材料平衡 | 按聚合物核对纱线输入、合格纱线输出、分类纱线废物和有记录的在制品变化；披露任何残差且不得强制归零。 | 净输入质量；合格输出质量；废物质量；在制品变化 | 已披露的质量平衡残差 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留聚合物或材料、组分根数、合股或成缆结构、捻向和捻度、线密度、非高强力排除及非零售市场状态的证据。 | 产品规格；批次放行；试验或生产控制记录 |
| `dq_completeness` | 过程清单 | 将声明过程边界内每项实际材料、电力、废物和基本交换作为独立原子行纳入；实际交换未在上文表示时新增具体行。 | 输入输出清单；采购记录；电表；废物记录；排放记录 |
| `dq_temporal_site_scope` | 前景记录 | 覆盖完整声明报告期和全部纳入的生产线及班次；披露排除项、停机、异常运行和数据缺口。 | 生产日历；电表区间覆盖；批次登记；缺口日志 |
| `dq_identity_resolution` | Tiangong 引用 | 仅使用类型、名称、分类、属性和单位语义均与交换匹配且经核验为 state_code 100 的 UUID；未解析 UUID 保持空缺并保留具体流名称。 | Tiangong 身份核验和 manifest 审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_product | 输出使用 UUID `d3526e15-e0a8-4d96-8688-2738fd9d20ba`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 和已声明的 CPC 26421 范围。 | `unsd-cpc-3-0-26421` |
| `validate_exclusions` | product_lot | 记录确认产品不是缝纫线，不是聚酰胺、聚酯或粘胶人造丝高强力纱，且非供零售。 | `unsd-cpc-3-0-26421` |
| `validate_normalization` | inventory | 使用 `calc_normalize_reference_mass` 将每项交换归一化为准确的 1,000 kg 实测合格纱线净输出，同时保留原始前景值。 |  |
| `validate_atomic_inventory` | inventory | 每个选定流仅命名一种具体产品、电力供给、废物或基本流；不得出现集合类别和选择指令。 | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | yarn_material_balance | 按聚合物核对纱线输入、合格输出、纱线废物和在制品变化，并披露任何残差。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 人造长丝多股或缆线纱前景生产数据集 |
| downstream_use | `secondary_dataset`；经代表性审查后可作为 `background_dataset` |
| allowed_use | 需要 CPC 26421 工厂门纱线输入的产品碳足迹、过程 LCA 和下游纺织模型 |
| excluded_use | 缝纫线、被排除的高强力纱、零售包装纱、短纤纱、单丝，或仅用假捻变形表示的变形纱生产 |
| required_metadata | PCR id；地理范围；报告期；技术；聚合物或材料；组分根数；合股或成缆结构；捻向和捻度；线密度；卷装状态；净质量基准；上游输入数据集链接；分配方法 |
| required_quality_disclosure | 电表和秤覆盖范围；校准；批次覆盖；质量平衡残差；未解析 UUID；排除项；异常运行；数据缺口；分配和换算方法 |
| update_trigger | 聚合物输入、合股或成缆结构、加捻技术、电力供给、场址、分配基准、输出规格发生变化，或出现重大数据缺口或 UUID 解析更新 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26421` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Explanatory Notes》，代码 26421，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-12） | 产品范围、参考身份和排除项 |
| `kim-et-al-2025-twisting-process` | `literature` | Kim, H., Rho, S., and Jeong, W. (2025), Manufacturing and characterization of conductive threads based on twisting process for applying smartwear, Fashion and Textiles 12:4, https://doi.org/10.1186/s40691-024-00406-7 | 多根 PET 长丝通过连续加捻工序合并的证据；仅用于过程分解，不采用数量范围 |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索日期 2026-08-12） | 可转用于输入输出、材料、能源、废物和数据质量记录的原则；不对纱线生产应用任何 BAT 数值水平 |
