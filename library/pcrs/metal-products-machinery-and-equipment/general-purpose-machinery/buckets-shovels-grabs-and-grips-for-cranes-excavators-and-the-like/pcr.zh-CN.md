---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.buckets-shovels-grabs-and-grips-for-cranes-excavators-and-the-like
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 起重机、挖掘机及类似机械用戽斗、铲斗、抓斗和夹斗

## 1. 范围与适用性

本 PCR 适用于起重机、挖掘机及类似机械所用的可互换承载或挖掘属具成品（戽斗、铲斗、抓斗和夹斗）的工厂门生产。适用产品包括钢板焊接结构以及装有外购铸造或锻造耐磨件的产品。不包括主机、单独销售的液压执行器、单独销售的快速连接器、推土铲、并不构成完整属具的通用备件，以及使用、维护、分销和报废阶段。

前景边界从制造场址接收外购钢板、适用时的外购铸造或锻造成品零件、焊接材料、工艺气体、涂料和电力开始。上述外购投入的上游生产应采用独立的供应商或背景数据集表示。产品经检验合格、具备交付条件后离开边界，并须声明涂装状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.buckets-shovels-grabs-and-grips-for-cranes-excavators-and-the-like |
| classification_refs | CPC 3.0: 43580 |
| covered_products | 为起重机、挖掘机或类似机械设计的戽斗、铲斗、抓斗和夹斗成品属具 |
| excluded_products | 主机；独立液压执行器；独立快速连接器；推土铲；通用备件；手工具 |
| representative_product | 带切削刃和主机连接接口的合金钢焊接挖掘机铲斗 |
| production_route | 外购钢板以及可选的外购铸造或锻造耐磨件；下料和成形；焊接和装配；机械加工；可选防护涂装；检验 |
| market_state | 工厂门属具成品，按声明为未涂装或已涂装；除非运输包装作为原子流明确加入，否则不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个与声明的主机接口和预定物料处理工况相容的承载或挖掘属具成品 |
| How much | 属具成品净质量 1,000 kg |
| How well | 符合声明的图样、材料牌号、额定容量、接口尺寸、焊缝验收准则和涂装规范 |
| How long or cycle | 工厂门声明单位；不按使用寿命归一化，下游使用寿命建模时须另行披露 |
| reference_flow_link | 参考流为最终检验放行的合格属具成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 起重机、挖掘机及类似机械用戽斗、铲斗、抓斗和夹斗；UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 属具类别；主机制造商或接口标准；额定容积或夹持能力；成品净质量；主要钢板与耐磨件牌号；切削刃和斗齿配置；焊接、铸造或混合结构；涂装状态和涂层体系；制造场址和期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用最终检验后合格属具成品的净质量；不计可拆运输支架和运输包装。所有清单数量归一化至 1,000 kg 参考产品。 |
| `energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电力的原始单位，并按 1 kWh = 3.6 MJ 换算；不得把电力与燃料或外购热合并。 |
| `gas_mass_basis` | 工业氧气和二氧化碳 | 质量或由来源记录体积换算的质量 | kg | 优先使用供应商质量或气瓶质量差。若使用体积，须保留气体组成、压力、温度、参考条件和换算系数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的外购合金钢板，以及适用时的外购铸造或锻造耐磨件成品和其他列明消耗品 |
| starting_condition_role | 下料、成形、焊接、装配、机械加工、可选涂装和最终检验的前景起点 |
| product_classification_scope | 符合本语义产品边界的机械属具成品；分类映射仍独立于 PCR 身份 |
| recursive_input_rule | 若同类属具成品作为外购投入，应保留为单独关联的上游产品数据集，不得在当前前景过程中递归展开 |
| upstream_dataset_requirement | 优先使用供应商特定数据集；否则为每项外购投入使用地理、技术和产品状态具有代表性的背景数据集 |
| disclosure | 声明纳入的制造工序、外协工序、材料牌号、外购件含量、涂装路线、废钢去向、场址、地理、期间和排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部前景数据集 | 纳入下料、成形、焊接、装配、机械加工、适用的涂装、最终检验、直接能源、列明消耗品、产生的废钢和制造场址实测直接排放。钢铁生产和外购铸锻件生产留在上游。 | `eu-commission-pef-method-2021`; `ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_outsourcing` | 外协工序 | 若外协工序在工厂门放行前制造声明属具，则须纳入；应识别分包过程，且不得遗漏其投入、废物或直接排放。 | `eu-commission-pef-method-2021` |
| `boundary_additional_flows` | 场址特定交换 | 实际跨越声明边界的每种材料、燃料、工艺气体、废物和基本流排放均应在存在时作为单独原子流加入；不得以笼统的公用工程、废物或排放标签替代。 | `eu-commission-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| integrated_attachment_manufacture | 属具一体化制造 | required | 始终纳入；各流卡说明路线条件 | 前景下料、成形、焊接、装配、机械加工、可选涂装和检验 | 1,000 kg 合格属具成品 |

### 过程：属具一体化制造（`integrated_attachment_manufacture`）

#### 输入

##### 产品流

###### 合金钢板（`steel_plate`）

按牌号和厚度记录进入下料与成形的外购结构钢板和耐磨钢板。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产订单领用的实测收货质量，扣除有记录且原样退库的未使用钢板
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`ssab-hardox-bucket-welding-techsupport-29`

###### 外购铸造合金钢挖掘机斗齿（`cast_alloy_steel_bucket_tooth`）

仅当外购铸造合金钢挖掘机斗齿成品并装入产品时记录这一具体斗齿投入；UUID 未解决。任何齿座或其他外购件均须作为单独原子行加入。

- 选定流：铸造合金钢挖掘机斗齿；UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装入生产订单的斗齿实测收货质量；仅当物料清单证明未使用外购铸造斗齿时才可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024`

###### 切割用工业氧气（`industrial_oxygen`）

仅记录声明生产订单采用氧气辅助切割时的氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：供应商交付或分表计量的氧气体积，并保留参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 采用氧气辅助切割的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`ssab-hardox-bucket-welding-techsupport-29`

###### 药芯焊丝（`flux_cored_wire`）

仅当采用 FCAW 时记录药芯焊丝；其他焊接材料须作为单独原子流加入。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用质量减去密封完好并退库的未用焊丝
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 采用 FCAW 焊接的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`ssab-hardox-bucket-welding-techsupport-29`

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅当焊接级二氧化碳作为保护气供应时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配到生产订单的供应商质量或气瓶质量差；记录所有体积到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 采用二氧化碳保护焊的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`ssab-hardox-bucket-welding-techsupport-29`

###### 工业维护涂料（`industrial_maintenance_coating`）

仅当工厂门放行前施涂时记录配制好的防护涂料；配方、固体分和 VOC 含量为必需限定信息。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用的混合涂料质量减去有记录且退回再用的未用涂料；处置的混合涂料须另加废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已涂装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`eu-commission-pef-method-2021`

###### 外购电力（`electricity`）

记录纳入边界的下料、成形、焊接、机械加工、涂装和检验所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分表计量值或按产量份额从场址总表分配的用电量，并按 `energy_conversion` 换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`eu-commission-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 属具成品参考产品（`reference_product`）

最终检验放行的合格成品净质量为参考产品；准确的 TianGong 产品 UUID 未解决。

- 选定流：起重机、挖掘机及类似机械用戽斗、铲斗、抓斗和夹斗；UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1,000 kg 合格属具成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`un-cpc-3-0-structure-2025`; `eu-commission-pef-method-2021`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录以废物形式离开前景边界的边角料、不合格钢制零件和机加工废钢；分别披露内部再用和外部回收去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产订单产生并离场的实测质量，扣除有记录且原样退库的洁净边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_manufacturing_records`
- 来源：`eu-commission-pef-method-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 生产记录 | 优先使用生产订单计量、称量和直接归属；先细分工序，再采用分配。 | `eu-commission-pef-method-2021` |
| `allocation_shared_operations` | 共用电力和消耗品 | 无独立计量时，采用设备时间、焊缝长度、熔敷金属质量、涂装面积或加工质量等有记录的因果驱动因素；不得默认按收入分配。 | `eu-commission-pef-method-2021` |
| `allocation_scrap` | 废钢 | 报告全部实测废钢输出及去向；不得在前景清单内扣减替代原生钢的信用。任何回收模型仅在下游生命周期模型中应用并披露。 | `eu-commission-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_integrated_manufacturing_records` | integrated_attachment_manufacture | 全部列明投入和产出行 | 生产订单、物料清单、称量单、领退料记录、气体交付记录、电表、涂装批次日志、废料单和检验放行记录 | production_order_id; product_family; finished_mass_kg; plate_grade_mass_kg; cast_part_mass_kg; oxygen_m3; flux_cored_wire_kg; carbon_dioxide_kg_or_m3; coating_kg; electricity_kWh; scrap_kg; operating_hours; site; date | 将物料和公用工程记录与已放行生产订单核对，并保留换算系数和路线标志 | kg; m3; kWh; h | 按批次或生产订单采集，按月汇总 | 至少连续 12 个有代表性的月份；生产期较短时覆盖完整生产期 | 声明制造场址运营控制范围内的全部工序，包括已识别的外协工序 | 对合格放行产品的各项原子交换求和，以合格成品总净质量归一化，并核对不合格品和退库量 | 校准计量记录；供应商发票；称量单；签署的生产订单；物料清单版本；涂装批次单；废料转移单；检验放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 全部质量行 | 归一化数量 = 纳入交换质量 / 合格成品净质量 × 1,000 | 交换质量；合格成品质量 | kg 每 1,000 kg 参考产品 | `eu-commission-pef-method-2021` |
| `calc_electricity` | electricity | electricity_MJ = included electricity_kWh × 3.6；归一化电力 = electricity_MJ / 合格成品净质量 × 1,000 | 纳入电力 kWh；成品质量 kg | MJ 每 1,000 kg 参考产品 | `eu-commission-pef-method-2021` |
| `calc_gas_mass` | industrial_oxygen; carbon_dioxide_shielding_gas | 优先使用供应商质量；仅有体积时，使用有记录的组成、压力、温度和参考条件系数换算后再归一化 | 气体质量或体积；换算系数；成品质量 | 按选定流属性计为 kg 或 m3 每 1,000 kg 参考产品 | `eu-commission-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 将放行产品与图样版本、属具类别、主机接口、容量、质量、材料牌号和涂装状态匹配。 | 物料清单、图样、检验放行记录和产品数据表 |
| `dq_completeness` | 清单 | 核对钢板、外购件、焊接材料、气体、涂料、电力、成品和废钢；将任何其他实际存在的交换作为原子流加入。 | 物料平衡、公用工程核对和废物台账 |
| `dq_temporal` | 前景数据 | 覆盖有代表性的连续期间，并披露停机、返工活动、产品组合变化和异常批次。 | 带日期的生产和计量记录 |
| `dq_technology` | 条件行 | 记录外购铸件、氧气辅助切割、FCAW、二氧化碳保护和涂装路线标志；不得在无相应路线时报告条件数量。 | 工艺规程、设备日志、焊接工艺和涂装规范 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 数据集身份 | 确认参考产出恰为 1,000 kg 合格属具成品净质量，且全部必需限定信息完整。 | `un-cpc-3-0-structure-2025`; `eu-commission-pef-method-2021` |
| `validate_inventory_coverage` | 过程清单 | 确认每项实际存在的投入、废物和直接基本流排放均作为一个原子交换表示，且未使用笼统的公用工程、废物或排放行。 | `eu-commission-pef-method-2021` |
| `validate_mass_reconciliation` | 物料平衡 | 调查金属投入与成品、退库量、废钢和其他声明金属产出之间的未核对差异；记录氧化皮和计量影响。 | `eu-commission-pef-method-2021` |
| `validate_conditions` | 条件行 | 铸件、氧气、药芯焊丝、二氧化碳和涂料须有路线证据；不适用行须有物料清单或工艺路线支持。 | `ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_uuid_status` | UUID 引用 | 将未解决的 `reference_product` 和 `cast_alloy_steel_bucket_tooth` UUID 作为审查发现；不得以更宽泛或不匹配的 TianGong 流替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集；经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 工厂门机械属具成品的产品系统建模，以及汇总到 `process` 或 `lifecyclemodel` 记录 |
| allowed_use | 属具类别、结构路线、材料牌号、主机接口、制造地理、期间和涂装状态具有代表性的研究 |
| excluded_use | 起重机或挖掘机整机；独立连接器或液压执行器；使用、维修、分销和报废阶段；除非单独建模，否则不适用于制造路线有重大差异的产品 |
| required_metadata | PCR id；产品类别；参考质量；场址和地理；期间；技术路线；材料牌号；外购件含量；焊接工艺；涂装状态；分配驱动因素；数据源；未解决 UUID 状态 |
| required_quality_disclosure | 初级数据占比；计量和称量基础；时间覆盖；物料平衡结果；外协工序；背景数据集选择；数据缺口；路线特定排除项 |
| update_trigger | 产品设计、钢板或耐磨件牌号、焊接技术、涂层体系、供应商路线、场址能源组合、分配方法、生产地理发生重大变化，或未解决 UUID 得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-05 | 正式产品分类身份 |
| `ssab-hardox-bucket-welding-techsupport-29` | 手册（`handbook`） | SSAB, Welding of cutting edge to bucket and adapters to cutting edge, TechSupport 29, https://www.ssab.com/-/media/files/en/hardox/brochures/29-hardox-welding-of-cutting-edge-to-bucket-and-adapters-to-cutting-edge.pdf，检索于 2026-09-05 | 铲斗钢板选择、接头准备、焊接方法和焊接材料 |
| `eu-jrc-smitheries-foundries-bref-2024` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《锻造与铸造行业最佳可行技术参考文件》，2024，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry，检索于 2026-09-06 | 外购铸锻件边界和上游过程披露 |
| `eu-commission-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279《环境足迹方法使用建议》，2021-12-30 合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，检索于 2026-09-05 | 功能单位、参考流、系统边界、分配、前景数据质量和校验 |
