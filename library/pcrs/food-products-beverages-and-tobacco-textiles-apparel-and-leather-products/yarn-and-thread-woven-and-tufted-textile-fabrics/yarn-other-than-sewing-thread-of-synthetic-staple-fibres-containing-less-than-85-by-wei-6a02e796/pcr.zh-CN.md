---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 合成短纤维含量低于85%（不含缝纫线）的纱

## 1. 范围与适用性

本 PCR 适用于合成短纤维占产品质量低于 85% 的非缝纫线短纤纱。必须声明合成聚合物、共混纤维、混纺比例、纱支、捻度、回潮或调湿状态、颜色或处理状态、生产技术、地域和工厂门。长丝纱、缝纫线、合成短纤维含量达到或超过 85% 的纱，以及不含合成短纤维的人工纤维素纱不在本 PCR 范围内。

代表性前景路线以棉/合成纤维混合短纤条为起点，包括并条、适用时的粗纱、环锭或紧密纺、规格要求时的加捻以及络筒。其他符合范围的聚合物/共混纤维配方数据集必须采用同样具体的原子材料和废物流身份；只有语义匹配时才可使用代表性短纤条身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796 |
| classification_refs | CPC 3.0: 26440（exact） |
| covered_products | 合成短纤维质量占比低于 85%、并与一种或多种已声明非合成共混纤维混纺的非缝纫线短纤纱 |
| excluded_products | 缝纫线；连续长丝纱；合成短纤维质量占比达到或超过 85% 的纱；不含合成短纤维的纱 |
| representative_product | 纺纱厂门处已络筒、未染色、未上浆的涤棉短纤维混纺纱 |
| production_route | 混合短纤条；并条；适用时的粗纱；环锭或紧密纺；规格要求时的加捻；络筒 |
| market_state | 络筒包装上的成品短纤纱，位于织造、针织、染色、上浆、零售包装以及离开纺纱厂运输之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为后续纺织制造提供符合要求的混纺短纤纱 |
| How much | 1 kg 净纱产品 |
| How well | 合成短纤维质量占比低于 85%，并声明聚合物、共混纤维、纱支、捻度、回潮或调湿状态、颜色/处理状态和络筒形式 |
| How long or cycle | 纺纱厂门处一个验收合格的生产批次 |
| reference_flow_link | `finished_blended_yarn` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres `914fcc34-ead6-4938-af63-b4ffa94e0a99` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | synthetic polymer; synthetic staple-fibre mass share; co-fibre and mass share; yarn count; twist; spinning technology; moisture condition; colour/treatment state; winding form; geography; plant gate; production period |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考纱线和材料质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按同一个已声明回潮或调湿基准记录净质量；扣除络筒包装皮重，并对投入产出核对使用相同基准。 |
| `synthetic_fraction` | 产品组成 | Mass fraction | kg/kg | 证明合成短纤维对总纤维质量的贡献低于 0.85 kg/kg；通过供应商规格或组成检测识别每种聚合物和共混纤维。 |
| `electricity_metering` | 低压电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留以 kWh 记录的过程电表或分表分配记录；记录任何换算因子并保留原始电表单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入纺纱过程的混合短纤条，已声明合成聚合物、共混纤维、混纺比例、供应商、回潮或调湿状态以及上游数据集引用 |
| starting_condition_role | 二次纺纱的前景材料投入 |
| product_classification_scope | 合成短纤维质量占比低于 85% 的非缝纫线短纤纱 |
| recursive_input_rule | 如果符合本类别的纱线重新进入过程，则将该纱线作为单独原子投入记录一次，不在当前前景过程中重复其上游纺纱清单。 |
| upstream_dataset_requirement | 为纤维生产和纤维条制备链接独立上游数据集，并匹配聚合物、共混纤维、再生/原生状态、地域和时间。 |
| disclosure | 披露起始纤维条的组成和调湿状态、纳入的纺纱阶段、技术、任何省略阶段、处理状态、门，以及公用工程是直接计量还是分配。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | 前景过程 | 从接收已声明组成的混合短纤条开始；纤维生产、开松、混合、梳理和成条保留在上游。 | `jrc-textiles-bref-2023` |
| `boundary_spinning_gate` | 前景过程 | 纳入并条、适用时的粗纱、纺纱、规格要求时的加捻、络筒、直接消耗的电力和润滑剂、合格纱线输出以及单独计量的捕集纤维废物。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_downstream` | 下游活动 | 排除染色、上浆、织造、针织、零售包装、出厂运输、使用和生命末期，除非更广研究另行增加已识别过程。 | `jrc-textiles-bref-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sliver_to_yarn_spinning` | 混合短纤纱的并条、粗纱、纺纱、加捻和络筒 | required | 始终纳入；只有产品路线有记录时才存在粗纱和加捻 | 前景纱线生产 | 1 kg 验收合格纱线输出 |

### 过程：混合短纤纱的并条、粗纱、纺纱、加捻和络筒（`sliver_to_yarn_spinning`）

#### 输入

##### 产品流

###### 已声明组成的混合短纤条（`blended_staple_fibre_sliver`）

这是代表性棉/合成纤维路线的单一进料纤维中间产品。其批次组成和领用质量在纺纱厂跨越前景边界。

- 选定流：Blended staple fibre sliver; cotton and man-made fibres blend, at plant, CN `0d57947b-b2f9-4a30-8a2c-7f648fd0ee55`
- 流属性/单位：Mass / kg
- 数量规则：按生产批次记录领用纤维条质量，并按验收合格纱线输出归一化；不得采用默认得率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sliver_mass`
- 来源：`jrc-textiles-bref-2023`

###### 低压交流电消费组合（`low_voltage_electricity`）

本卡仅覆盖电机、吸风和络筒设备使用的一个已声明中国用户侧低压电力场景。任何单独建模热处理的电力不得合并到此卡。

- 选定流：Alternating current; less than 1 kV; consumption mix, at user, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / kWh
- 数量规则：记录纳入阶段的过程电表电量或有记录的分表分配电量，并按验收合格纱线输出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 合成酯类纺纱润滑剂（`synthetic_ester_spinning_lubricant`）

这是施用于短纤维或纺纱设备并可归属于纱线批次的单一润滑剂产品。检索到的 POY 和 FDY 油剂均为长丝纱产品，因此其 Tiangong 身份仍未解析。

- 选定流：Synthetic ester spinning lubricant
- 流属性/单位：Mass / kg
- 数量规则：记录向纳入纺纱阶段发出的润滑剂质量，扣除实测退库量，并按验收合格纱线输出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_mass`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品混合短纤纱（`finished_blended_yarn`）

这是络筒并经质量放行后位于纺纱厂门的验收合格参考产品。

- 选定流：Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres `914fcc34-ead6-4938-af63-b4ffa94e0a99`
- 流属性/单位：Mass / kg
- 数量规则：按已声明回潮基准，在扣除包装皮重和废品后记录净合格纱线质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass`
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 捕集的涤棉短纤维废物（`captured_blended_fibre_waste`）

这是从代表性并条、纺纱和络筒路线单独收集的一个松散纤维废物流。其不包括织物废物和通用颗粒物废物。

- 选定流：Captured polyester-cotton staple fibre waste
- 流属性/单位：Mass / kg
- 数量规则：按批次或报告期称量从纳入阶段清除的捕集松散纤维废物，并按验收合格纱线输出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_waste_mass`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_measurement` | 产品特定的材料、能源、润滑剂和废物记录 | 优先使用批次、机器或产品线计量，并在任何分配之前直接归属每条记录。 | `eu-textiles-bat-2022` |
| `allocation_shared_operations` | 共用纺纱和络筒作业 | 如果无法直接分离，则按相同回潮基准的验收合格产品质量分配共用投入和废物记录；披露分配期间、产品、质量和理由。 | `eu-textiles-bat-2022` |
| `allocation_recovered_fibre` | 捕集纤维废物 | 除非有记录的废物终止或共产品判定，否则将捕集纤维作为废物。如果其成为共产品，则报告物理质量拆分和敏感性结果，不得在前景清单内扣除假设的再生信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sliver_mass` | `sliver_to_yarn_spinning` | 混合短纤条投入 | 材料领用和供应商组成记录 | lot_id; issued_mass_kg; returned_mass_kg; polymer; synthetic_fraction; co_fibre; co_fibre_fraction; moisture_basis; supplier | 对账后的仓库领用记录，以及供应商规格或组成检测 | kg | 每个生产批次 | 数据集报告期 | 纳入的纺纱线和产品 | 领用质量减退库质量后求和，再按相同基准的合格纱线质量归一化 | 校准秤记录；批次追踪；组成证书或检测 |
| `cp_electricity_meter` | `sliver_to_yarn_spinning` | 低压电力投入 | 电表记录 | meter_id; start_reading_kWh; end_reading_kWh; included_equipment; allocation_key; downtime | 优先使用专用电表，否则使用有记录的分表分配 | kWh | 每个电表间隔 | 数据集报告期 | 纳入的并条、粗纱、纺纱、吸风和络筒设备 | 净 kWh 除以同一期间合格纱线质量 | 电表标识；读数照片或导出；分配工作表 |
| `cp_lubricant_mass` | `sliver_to_yarn_spinning` | 合成酯类纺纱润滑剂投入 | 材料领用记录 | product_name; safety_data_sheet; lot_id; issued_mass_kg; returned_mass_kg | 对账后的领用和退库记录 | kg | 每次领用或每个生产批次 | 数据集报告期 | 纳入的纺纱设备和纱线产品 | 领用质量减退库质量后求和，再按合格纱线质量归一化 | 领用记录；退库记录；安全数据表 |
| `cp_yarn_mass` | `sliver_to_yarn_spinning` | 合格成品纱线输出 | 生产和质量放行记录 | lot_id; gross_mass_kg; package_tare_kg; rejected_mass_kg; accepted_mass_kg; moisture_basis; yarn_count; twist | 校准秤和质量放行系统 | kg | 每个生产批次 | 数据集报告期 | 纳入的产品和纺纱线 | 在扣除皮重和废品后汇总净合格纱线质量 | 秤校准；质量放行记录；批次追踪 |
| `cp_fibre_waste_mass` | `sliver_to_yarn_spinning` | 捕集混合纤维废物输出 | 废物称量记录 | lot_or_period; container_gross_mass_kg; container_tare_kg; fibre_composition; destination | 专用标签容器和校准秤 | kg | 每次容器移除 | 数据集报告期 | 纳入的并条、纺纱、吸风和络筒设备 | 汇总净捕集纤维废物并除以匹配期间合格纱线质量 | 秤记录；容器标签；废物转移或再利用记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_inventory` | 每条前景清单行 | 将匹配期间的净流量除以相同回潮基准的合格净纱质量；保留原始数量和期间链接。 | net flow quantity; accepted yarn mass | flow quantity per kg accepted yarn | `eu-textiles-bat-2022` |
| `calc_material_reconciliation` | 材料投入和输出 | 将净纤维条加净润滑剂与合格纱线加捕集纤维废物进行比较。披露未核对差额；记录显示存在其他材料输出时，增加单独识别的原子流。 | sliver mass; lubricant mass; yarn mass; captured fibre waste mass | material reconciliation and disclosed difference | `eu-textiles-bat-2022` |
| `calc_synthetic_fraction` | 产品组成 | 使用一个一致基准，将合成短纤维干质量或等效调湿质量除以总纤维质量。 | synthetic staple-fibre mass; total fibre mass | synthetic staple-fibre mass fraction | `unsd-cpc-3-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_composition` | 参考产品和进料纤维条 | 从供应商记录追溯聚合物、共混纤维、混纺比例和回潮基准至每个纱线批次，并证明合成短纤维质量占比低于 85%。 | 供应商规格或组成检测；批次追踪；质量放行 |
| `dq_process_completeness` | 前景清单 | 覆盖每个纳入阶段，并单独记录跨越边界的每项材料、电力、润滑剂、产品和废物交换；解释任何材料核对差额。 | 过程流程图；电表图；领用记录；废物记录；核对 |
| `dq_temporal_representativeness` | 数据集报告期 | 使用代表正常生产的期间并纳入重大变化、停机和非典型批次；优先使用年度监测记录，较短期间必须说明理由。 | 生产日历；BAT 监测记录；停机日志 |
| `dq_technology_geography` | 电力和纺纱作业 | 声明国家、电压等级、消费组合场景、纺纱技术、纳入设备和计量/分配方法。 | 电表元数据；设备清单；数据集元数据 |
| `dq_unresolved_uuid` | 润滑剂和捕集纤维废物 | 在 Tiangong 直接读取确认语义精确的公开身份之前，保留具体原子名称和 manifest 审查记录。 | Manifest unresolved-identity entries and subsequent lookup evidence |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 前景数据包 | 确认恰好 1 kg 净合格纱线、参考产品 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位和所有必需限定信息。 | `unsd-cpc-3-2025` |
| `validate_category_composition` | 产品身份 | 如果产品是缝纫线或长丝纱、不含合成短纤维，或者合成短纤维质量分数达到或超过 0.85，则拒绝数据包。 | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | 过程清单 | 拒绝组合流或选择器流；每项交换必须有一个具体名称、一个方向、一种流类型、一条数量记录和一个适用采集协议。 |  |
| `validate_material_reconciliation` | 材料质量平衡 | 重新计算匹配期间的材料核对，并要求数据集披露和解释每项差额，不得静默配平。 | `eu-textiles-bat-2022` |
| `validate_foreground_records` | 数量证据 | 拒绝默认数量或 AI 估算数量；要求全部五行具有原始前景记录、匹配时间范围、单位、归一化和保留的质量证据。 | `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 纺纱厂门处混纺合成短纤纱的前景生产数据集 |
| downstream_use | 供使用组成和技术匹配纱线投入的纺织产品作为 secondary_dataset 和 background_dataset 使用 |
| allowed_use | 产品组成、纱线规格、技术、地域、时间和门匹配或已透明调整时的产品与过程建模 |
| excluded_use | 缝纫线；连续长丝纱；合成短纤维含量至少 85% 的纱；未添加下游过程的染色、上浆、织造或针织产品；存在未解决发布阻断项 |
| required_metadata | PCR id；产品和投入 UUID；聚合物和共混纤维比例；纱支；捻度；回潮基准；颜色/处理状态；络筒形式；技术；地域；电压和电力场景；期间；分配；上游数据集链接 |
| required_quality_disclosure | 一手数据比例；电表和秤覆盖率；组成证据；时间覆盖；分配方法；材料核对差额；未解析 UUID 状态；对代表性路线的偏离 |
| update_trigger | 新产品配方或技术；电力场景变化；重大过程变化；新的精确 Tiangong 身份；证据或法规更新；重大核对或校验失败 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26440, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品类别边界、排除项和合成纤维质量占比校验 |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, 2023, DOI 10.2760/355887. https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | 纱线制造过程分解、电力、润滑剂和捕集纤维清单纳入 |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, 9 December 2022. http://data.europa.eu/eli/dec_impl/2022/2508/oj | 投入产出清单、过程级监测、合成/酯类润滑剂选择、能源和废物记录 |
