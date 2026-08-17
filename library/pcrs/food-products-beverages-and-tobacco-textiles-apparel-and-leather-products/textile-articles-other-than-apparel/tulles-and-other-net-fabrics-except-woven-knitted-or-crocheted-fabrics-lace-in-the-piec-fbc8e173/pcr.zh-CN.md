---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tulles-and-other-net-fabrics-except-woven-knitted-or-crocheted-fabrics-lace-in-the-piec-fbc8e173
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 薄纱及其他网眼织物（机织、针织或钩编织物除外）；成幅、成条或成花纹图案的花边

## 1. 范围与适用性

本 PCR 适用于以非机织、非针织、非钩编的纱线交结构造生产薄纱及其他开放式网眼织物，以及以成幅、成条或成花纹图案形式供应的花边的工厂门生产。范围包括 bobbinet 或类似的捻线成网、梭结花边及 CPC 27912 语义边界内的其他花边路线，并包括适用路线的准备、湿法处理、整理、检验、修剪和包装。申报数据集以外购纱线或线进入报告设施为起点，以适销包装产品在该设施门口为终点。

不包括机织纱罗或网格稀松布、针织或钩编网及花边、另行分类的刺绣、狭幅机织饰带、打结网或制成网、非织造布、另行分类的涂层或浸渍织物，以及制成服装或制品。前景数据包应识别一条具体生产路线；除非披露聚合并满足本 PCR 的分配与质量规则，不得合并存在实质差异的纤维体系、成网技术、整理路线或场址。CPC 范围由 `unsd-cpc-3-0-2025` 支持；纤维身份与成分披露由 `eu-textile-fibre-regulation-1007-2011` 和 `iso-1833-1-2020` 支持。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tulles-and-other-net-fabrics-except-woven-knitted-or-crocheted-fabrics-lace-in-the-piec-fbc8e173 |
| classification_refs | CPC 3.0: 27912 (exact) |
| covered_products | 薄纱及其他非机织、非针织、非钩编网眼织物；bobbinet 及类似捻线网；成幅、成条或成花纹图案的花边 |
| excluded_products | 机织织物和网格稀松布；针织或钩编织物；刺绣；狭幅机织物和饰带；打结网和制成网；非织造布；另行分类的涂层或浸渍织物；制成服装和制品 |
| representative_product | 具有已申报纤维成分、结构、整理和市场状态的一批适销工厂门 CPC 27912 成品薄纱、网眼织物或花边 |
| production_route | 外购纱线或线接收；非机织/非针织/非钩编成网或花边形成；适用路线的精练、漂白、染色、洗涤和整理；检验、修剪及包装 |
| market_state | 已制造成品；干燥并按质量测定要求调湿；成幅、成条或成花纹图案；工厂内包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门提供成品薄纱、非机织/非针织/非钩编网眼织物，或成幅、成条、成花纹图案的花边 |
| How much | 1 kg 适销成品净质量，不含运输包装 |
| How well | 符合已申报的纤维成分、路线、结构、尺寸、整理、颜色、质量等级及调湿方法 |
| How long or cycle | 已申报报告期内一个完整生产批次或生产活动 |
| reference_flow_link | 参考数量等于 `integrated_net_lace_manufacturing` 的 CPC 27912 合格适销产出的调湿净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Tulles and other net fabrics, except woven, knitted or crocheted fabrics, lace in the piece, in strips or in motifs `50009892-d697-4047-8df6-0d07a25cf0bb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维名称及质量分数；纱线或线规格；薄纱、网眼织物或花边产品形式；形成技术；网孔或花型名称；幅宽及成幅/成条/花纹图案尺寸；合同相关时的单位面积质量或单位长度质量；颜色与染色路线；所施整理及整理增重；调湿方法；质量等级；生产场址；报告期；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格适销参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报调湿程序确定产品净质量；1 kg 参考量不含托盘、纸箱、卷芯和包膜。保留毛重、皮重和净重证据。 |
| `conditioning_basis` | 产品、纱线和边角料质量测定 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用测定质量进行产品鉴定或质量平衡校验前，按 ISO 139 或申报的合同等效大气条件调湿试样或批次；披露任何替代大气条件。 |
| `area_length_conversion` | 以 m2 或延米采集的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用批次特定的实测单位面积质量或单位长度质量及已申报幅宽，将面积或长度记录换算为质量；不得代入通用织物系数。 |
| `fibre_composition_basis` | 混纺产品和材料投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | mass fraction | 依据供应商证据或适用的 ISO 1833 方法申报纤维名称和干质量分数；不包含在纤维成分中的整理/增重质量应单列。 |
| `water_mass_volume` | 工艺用水和废水 | Mass or volume | kg or m3 | 保留计量单位。仅在记录密度和温度基础时将体积换算为质量；不得假定化学浴液或浓缩废水的密度等于纯水。 |
| `energy_carrier_separation` | 电力、天然气和外购蒸汽 | Energy or mass | kWh, MJ or kg | 各计量载能体分别记录并说明每个换算因子；不得把电力、燃料和蒸汽合并为一行能源。 |

## 5. 系统边界

前景边界包括纱线、线、化学品和包装接收及内部搬运；络筒或路线特定的等效准备；非机织/非针织/非钩编的成网或花边形成；适用路线的洗涤、精练、漂白、染色、漂洗、干燥、热定型或化学整理；检验、修补（如实施）、修剪和包装；场内公用工程；内部物料搬运；直接排放；场内废物和废水处理。外购纱线、化学品、能源、水和包装的上游生产由上游数据集表示。资本品、员工出行、产品使用和下游报废处理不在本工厂门数据集内，除非研究目标明确扩展边界。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购纱线或线批次、外购助剂和包装进入报告设施时，具有供应商身份、数量、纤维/成分规格和上游数据集引用。 |
| starting_condition_role | 接收的纱线或线是第一个由前景控制的材料状态；上游纤维、聚合物、纺纱、长丝和运输负荷仍由链接的上游数据集表示。 |
| product_classification_scope | 仅符合 CPC 27912 边界的产品可作参考产品；排除机织、针织、钩编、刺绣、打结网、制成品及另行分类的涂层织物产出。 |
| recursive_input_rule | 作为另一 CPC 27912 产品投入的外购 CPC 27912 产品只作为带供应商数据集的上游产品投入记录一次；不得在本前景数据集中递归重建其制造。 |
| upstream_dataset_requirement | 每项外购纱线/线、化学品、载能体、供水和包装投入均需地域及技术有代表性的上游数据集，或明确记录数据缺口。 |
| disclosure | 申报纤维成分、形成路线、湿处理和整理适用性、外包操作、场址、时期、分配基础、拒收产出、废水路线、包装状态及所有排除操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有前景数据包 | 纳入从纱线/线接收到适销包装产品的全部场内操作及相关直接废物和排放；识别外包操作并链接其数据集，不得静默排除。 | `ec-jrc-textiles-bref-2023`; `eu-pef-2021-2279` |
| `boundary_route_specificity` | 形成、湿处理和整理 | 每项路线适用操作标为纳入或经证据证明不适用；缺失须有产品和过程证据，不得无说明填零。 | `irvine-ruskey-bobbin-lace-2014`; `ec-jrc-textiles-bref-2023` |
| `boundary_no_recursive_rebuild` | 外购 CPC 27912 中间产品 | 前景追溯止于申报的供应商产品并要求上游数据集，以防重复计算相同制造步骤。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_net_lace_manufacturing` | 薄纱、网眼织物或花边一体化制造 | required | 始终纳入；准备、形成、湿处理、整理和包装的操作级适用性必须申报 | 从外购纱线/线到工厂门包装 CPC 27912 产品的前景生产 | 1 kg 合格调湿净产品产出 |

### 过程：薄纱、网眼织物或花边一体化制造（`integrated_net_lace_manufacturing`）

该过程是聚合的前景单元过程。其操作台账应分别识别纱线/线准备、bobbinet 或其他非机织/非针织/非钩编形成、任何湿处理、干燥/定型/整理、检验/修剪和包装。梭结花边的多线编结形成由 `irvine-ruskey-bobbin-lace-2014` 支持；跨路线准备、预处理、染色和整理由 `ec-jrc-textiles-bref-2023` 支持。

#### 输入

##### 产品流

###### 聚酯长丝纱（`polyester_filament_yarn_input`）

仅在申报产品成分含此纱线时记录；材料等级、再生含量、线密度或供应商批次存在实质差异时分别建流。

- 选定流：Polyester filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据称量单、仓库领料和批次核对，记录合格投产量及归属的准备和形成损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textile-fibre-regulation-1007-2011`

###### 聚酰胺长丝纱（`polyamide_filament_yarn_input`）

仅在申报产品使用时记录；若上游数据集存在实质差异，不合并等级和供应商批次。

- 选定流：Polyamide filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据称量单、仓库领料和批次核对，记录合格投产量及归属的准备和形成损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textile-fibre-regulation-1007-2011`

###### 棉线（`cotton_thread_input`）

仅在申报的薄纱、网或花边路线使用时记录，并保留供应商规格和回潮基础。

- 选定流：Cotton thread
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据称量单、仓库领料和批次核对，记录合格投产量及归属的准备和形成损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textile-fibre-regulation-1007-2011`; `iso-139-2005`

###### 蚕丝纱（`silk_yarn_input`）

仅用于已申报的含蚕丝路线；保留供应商批次、纱支和调湿基础。

- 选定流：Silk yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据称量单、仓库领料和批次核对，记录合格投产量及归属的准备和形成损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textile-fibre-regulation-1007-2011`; `iso-139-2005`

###### 粘胶长丝纱（`viscose_filament_yarn_input`）

仅在申报纤维成分含粘胶时记录；保留供应商批次和长丝规格。

- 选定流：Viscose filament yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据称量单、仓库领料和批次核对，记录合格投产量及归属的准备和形成损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_and_issues`
- 来源：`eu-textile-fibre-regulation-1007-2011`

###### 中压电力（`medium_voltage_electricity_input`）

对络筒、形成、湿处理、干燥、整理、检验、通风和包装所耗电力进行分表计量，或依据经验证的分表记录分配。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录报告批次电表差值；共用电表仅按经验证的机器小时和额定负荷证据分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 天然气（`natural_gas_input`）

天然气在场内锅炉、干燥器、烘箱或热定型设备使用时记录，不与外购蒸汽或电力合并。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录交接计量或校准分表数量，以及报告批次的低位/高位热值基础。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 外购蒸汽（`purchased_steam_input`）

仅在蒸汽跨越设施边界时记录，并申报压力、温度、凝结水回收和供应商。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：记录供应商计量或发票数量，仅按有记录的蒸汽条件和焓基础换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 工艺用水（`process_water_input`）

记录进入精练、漂白、染色、洗涤、漂洗、整理、清洗或场内处理的水；有计量条件时与非接触冷却水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录校准流量计差值或报告批次经验证的浴液配制体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### 氢氧化钠（`sodium_hydroxide_input`）

在精练、pH 控制、丝光或清洗中使用时作为独立化学品交换记录，并申报供货浓度。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution
- 数量规则：依据批单和化学品库存核对记录领用质量，并保留供货浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### 过氧化氢（`hydrogen_peroxide_input`）

用于漂白或清洗时记录，并单独披露供货浓度和稳定剂体系。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution
- 数量规则：依据批单和化学品库存核对记录领用质量，并保留供货浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### 氯化钠（`sodium_chloride_input`）

在申报的染色或整理配方中使用时记录，不与其他盐合并。

- 选定流：Sodium chloride
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据批单和化学品库存核对记录领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`us-epa-textile-effluent-2004`

###### 聚二甲基硅氧烷纺织柔软剂（`pdms_softener_input`）

仅在申报整理配方使用该制剂时记录，并保留活性含量和载体。

- 选定流：Polydimethylsiloxane textile softener
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied formulation
- 数量规则：记录配方领用质量，并与该批次化学品库存变动核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ec-jrc-textiles-bref-2023`

###### 苯乙烯-丙烯酸酯粘合剂分散液（`styrene_acrylate_binder_input`）

用于稳定申报网或花边产品时记录，并保留固含量和载体。

- 选定流：Styrene-acrylate binder dispersion
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied dispersion
- 数量规则：记录配方领用质量，并与该批次化学品库存变动核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ec-jrc-textiles-bref-2023`

###### 低密度聚乙烯包装膜（`ldpe_packaging_film_input`）

产品包膜与纸箱、卷芯和托盘分开记录，并申报厚度和再生含量。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录包装领用质量，或以计数乘经验证的单件质量计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸板箱（`corrugated_carton_input`）

适销单元所用瓦楞纸箱单列，并申报纸板等级和再生含量。

- 选定流：Corrugated board carton
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录包装领用质量，或以纸箱数量乘经验证的单件质量计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

以上未列但实际跨越前景边界的任何纱线、线、染料、颜料、助剂、整理剂、溶剂、燃料、制冷剂、卷芯、托盘或包装组件，应在具体前景数据包中按化学或物理身份各建一个原子交换，不得放入复数类别或选择器行。

##### 废物流

默认制造路线无废物投入。如回收材料以废物投入进入，具体前景数据包应增加一个处理路线特定的原子废物交换，并披露其质量和负荷分配。

##### 基本流

不规定基本流投入。资源基本流由链接的上游数据集表示；如由报告设施直接取用，则每种资源和环境介质分别增加一个原子前景交换。

#### 输出

##### 产品流

###### 合格 CPC 27912 产品（`finished_net_lace_product_output`）

合格、调湿并包装的工厂门产出是定量参考。该 UUID 仅因精确 CPC 27912 Product flow 及 Mass 参考属性同时通过 hybrid 发现和 state-100 直接读取而使用。

- 选定流：Tulles and other net fabrics, except woven, knitted or crocheted fabrics, lace in the piece, in strips or in motifs `50009892-d697-4047-8df6-0d07a25cf0bb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：取合格调湿产品净质量，并将数据集归一化为恰好 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_and_quality`
- 来源：`unsd-cpc-3-0-2025`; `iso-139-2005`

##### 废物流

###### 聚酯纺织边角料（`polyester_textile_offcuts_output`）

仅对含聚酯路线记录离开前景过程、送回收或处置的聚酯边角料、线头和形成废品。

- 选定流：Polyester textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线和报告批次称量分拣的聚酯边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`eu-pef-2021-2279`

###### 聚酰胺纺织边角料（`polyamide_textile_offcuts_output`）

处理路线不同时，聚酰胺边角料、线头和形成废品与其他纤维废物分开。

- 选定流：Polyamide textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线和报告批次称量分拣的聚酰胺边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`eu-pef-2021-2279`

###### 棉纺织边角料（`cotton_textile_offcuts_output`）

棉边角料、线头和形成废品与合成纤维废物分开记录。

- 选定流：Cotton textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线和报告批次称量分拣的棉边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`eu-pef-2021-2279`

###### 蚕丝纺织边角料（`silk_textile_offcuts_output`）

仅对含蚕丝路线记录离开前景过程的蚕丝边角料、线头和形成废品。

- 选定流：Silk textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线和报告批次称量分拣的蚕丝边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`eu-pef-2021-2279`

###### 粘胶纺织边角料（`viscose_textile_offcuts_output`）

仅对含粘胶路线记录离开前景过程的粘胶边角料、线头和形成废品。

- 选定流：Viscose textile offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线和报告批次称量分拣的粘胶边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`eu-pef-2021-2279`

###### 不合格 CPC 27912 成品（`off_spec_finished_product_output`）

检验后拒收的成品与形成边角料分开，并按实际回收、返工或处置路线记录。

- 选定流：Off-spec finished CPC 27912 product
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据质量放行和废物转移记录记录调湿拒收质量；不得重复扣除返工材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_and_quality`
- 来源：`eu-pef-2021-2279`

###### 纺织工艺废水（`textile_process_wastewater_output`）

转移至场内或场外处理的废水按申报处理路线作为单一废物交换；不同路线须在具体数据包中分别建行。

- 选定流：Textile process wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录报告批次排放流量计差值或经验证的批次排放体积，并链接取样成分记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

###### 纺织废水处理污泥（`wastewater_sludge_output`）

仅在场内废水处理纳入前景边界时记录离场污泥，并申报湿/干基和去向。

- 选定流：Textile wastewater-treatment sludge
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg wet sludge
- 数量规则：对每个处理去向记录发运地磅质量和固含率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004`

##### 基本流

###### 化石二氧化碳排入空气（`carbon_dioxide_fossil_output`）

仅在燃料燃烧位于前景边界内时记录直接化石二氧化碳，并保留供应商燃料量及申报的实测或辖区认可计算证据。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录连续实测排放，或记录由采集燃料记录计算并经设施认可的结果；不得使用无引用的 PCR 默认因子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_records`

###### 化学需氧量排入水体（`chemical_oxygen_demand_water_output`）

仅当排放离开前景边界进入受纳环境时，COD 才作为直接基本流；转移至处理设施仍为废物流。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg COD
- 数量规则：记录实验室负荷，或以取样浓度和同期实测排放体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`us-epa-textile-effluent-2004`

###### 总氮排入水体（`total_nitrogen_water_output`）

仅在直接排放至受纳环境且适用许可证要求或实施监测时记录总氮。

- 选定流：Total nitrogen, to water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N
- 数量规则：记录实验室负荷，或以取样浓度和同期实测排放体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 总磷排入水体（`total_phosphorus_water_output`）

仅在直接排放至受纳环境且适用许可证要求或实施监测时记录总磷。

- 选定流：Total phosphorus, to water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg P
- 数量规则：记录实验室负荷，或以取样浓度和同期实测排放体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调湿参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`ec-jrc-textiles-bref-2023`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用生产和公用工程 | 优先采用分表、批记录和物理分离清单以避免分配。不得把可避免的材料损失或返工从造成它的批次中分走。 | `eu-pef-2021-2279` |
| `allocation_physical` | 多产品共用设备或仪表 | 无法分离时，按实测因果驱动分配电力、燃料、蒸汽、水和共用耗材，相关性优先次序为经实测负荷修正的机器小时、浴液体积、干燥器吞吐量或调湿产品质量。记录分母和覆盖率。 | `eu-pef-2021-2279` |
| `allocation_economic_exception` | 缺乏合理物理关系的多个有价值产出 | 只有在说明细分和物理因果均不可行后才用经济分配；使用同期工厂门价值，披露价格期和币种，并做敏感性检验。 | `eu-pef-2021-2279` |
| `allocation_rework` | 内部返工 | 原始材料和能源负荷保留在报告批次；只记录新增返工投入，不把同一中间物质量计为共产品。 | `eu-pef-2021-2279` |
| `allocation_waste_recovery` | 边角料、废品、污泥和包装废物 | 分别报告废物质量及去向。统一应用所选研究已记录的废物/回收方法；没有具名下游数据集和明确负荷/收益边界时不得计回收抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_and_issues` | `integrated_net_lace_manufacturing` | 纤维特定纱线/线投入 | 供应商证书、采购接收、仓库领退料和批次谱系 | 材料身份；纤维名；供应商；批次；纱线/线规格；干基/调湿基；接收、领用、退回质量；再生含量；上游数据集 | 将供应商和仓库记录与生产批次谱系核对；成分声明重要或有争议时按适用 ISO 1833 分析验证。 | kg | 每次接收和生产领料 | 完整报告期及期初期末库存 | 报告场址全部仓库和生产线 | 按精确材料身份汇总净领料；上游数据集存在实质差异时分开；合格产出确定后归一化。 | 供应商证书；校准秤记录；库存核对；成分检测报告；批次追溯 |
| `cp_energy_records` | `integrated_net_lace_manufacturing` | 电力、天然气和外购蒸汽 | 公用工程表、分表、发票、批次和机器日志 | 载能体；表号；起止读数；单位；时间戳；机器小时；负荷证据；蒸汽条件；热值；批次链接 | 优先批次级分表；否则把场址仪表与发票核对，并用经验证的因果驱动分配。 | kWh; MJ; kg steam | 仪表间隔及每批次/活动 | 完整报告期，停机和开机负荷一致分配 | 边界内全部场内操作 | 起止读数相减，修正有记录的复位，扣除排除负荷，再分配并按合格质量归一化。 | 校准状态；发票核对；仪表覆盖；分配工作表 |
| `cp_water_and_wastewater_records` | `integrated_net_lace_manufacturing` | 工艺用水和废水 | 供排水表、批单、取样及处理转移记录 | 来源；表号；体积；时间戳；浴号；操作；排放去向；样品号；浓度；处理路线 | 计量供排水；保留批次配液和排液记录；代表性样品与同期流量配对。 | m3; mg/L; kg | 每批次和仪表间隔；按许可证或控制计划取样 | 完整报告期和代表性运行状态 | 全部湿处理、清洗和场内处理操作 | 核对水量平衡；按来源和去向汇总；仅以实测体积和浓度计算负荷。 | 仪表校准；样品监管链；实验室认可；水量平衡闭合 |
| `cp_chemical_ledger` | `integrated_net_lace_manufacturing` | 每种原子工艺化学品 | 配方、批次领退料、采购和库存记录 | 化学品身份；CAS 或制剂 id；供应商；浓度/固含量；批次；领退质量；浴号；操作；安全数据表 | 将配方领退料与库存变动核对；每种实际化学品或供货制剂各建一个交换。 | kg supplied product | 每次批次领退料 | 完整报告期 | 边界内全部化学品仓库和工艺线 | 按精确身份和浓度汇总净领用；不得把染料、盐、助剂或整理剂聚成复数行。 | 签批单；库存核对；供应商 SDS/技术表；秤校准 |
| `cp_packaging_records` | `integrated_net_lace_manufacturing` | 每个包装组件 | 领料记录、物料清单和单件质量核查 | 组件身份；材料；等级；再生含量；数量；单件质量；领退质量；产品批次 | 称量包装或以经验证单件质量乘数量；膜、纸箱、卷芯和托盘分开。 | kg; count | 每个包装批次 | 完整报告期 | 报告场址包装操作 | 按组件汇总净领用并按合格产品质量归一化。 | 批准的 BOM；单件质量样本；领退核对 |
| `cp_finished_product_and_quality` | `integrated_net_lace_manufacturing` | 合格和不合格成品 | 完工、调湿质量、检验、放行、返工和拒收记录 | 批次；产品形式；形成路线；成分；尺寸；质量；调湿大气；合格、拒收、返工质量；缺陷原因；包装皮重 | 调湿并称量产品；将合格、拒收和返工数量与放行记录核对。 | kg; m; m2; count | 每个生产批次 | 完整报告期 | 边界内全部生产线和质量放行点 | 按申报产品汇总合格调湿净质量；扣除包装皮重；防止返工重复计量。 | 校准秤；ISO 139 调湿记录；检验报告；放行授权；质量核对 |
| `cp_solid_waste_records` | `integrated_net_lace_manufacturing` | 每种纤维特定边角料和污泥 | 线边收集、秤单、废物联单和处理接收单 | 废物身份；纤维/材料；湿/干基；质量；来源批次；去向；回收/处置路线；运输方；处理数据集 | 收集或发运时分类称量，并将每条路线链接至产生批次。 | kg | 每容器或发运 | 完整报告期 | 全部生产和场内处理区域 | 按精确废物身份和去向汇总；共用容器按称量组成分配，不用假定比例。 | 校准秤；联单；接收单；污泥固含量测试；路线核对 |
| `cp_direct_emissions_records` | `integrated_net_lace_manufacturing` | 每项直接空气或水基本流 | 连续监测、烟道测试、许可证样品、燃料计算或认可实验室结果 | 物质；介质；位置；时间戳；浓度；流量/体积；负荷；方法；检出限；链接燃料或排水记录 | 有实测负荷时优先使用；否则仅以有记录的批准因子和已采集活动记录计算。 | kg; mg/L; mg/Nm3 | 许可证/控制计划要求的监测间隔 | 覆盖报告期代表性运行条件 | 边界内全部直接排放点 | 积分实测负荷或以浓度乘同期流量；未检出按申报实验室/许可证规则处理。 | 校准；样品监管链；认可方法；许可证报告；计算审计轨迹 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化量 = 报告期归属交换量 / 合格调湿产品净质量 | 交换量；合格净产品质量 | 每 1 kg 参考产品交换量 | `eu-pef-2021-2279`; `iso-139-2005` |
| `calc_net_material_issue` | 纱线/线、化学品和包装投入 | 净领用 = 期初库存 + 接收 - 期末库存 - 有记录退回；归一化前与批次领料核对 | 库存和接收/退回记录 | 按精确身份的净材料投入 | `eu-pef-2021-2279` |
| `calc_area_length_to_mass` | 以 m2 或 m 记录的产品 | 质量 = 实测面积或长度 × 批次特定实测单位面积或长度质量；涉及面积换算时必须有幅宽 | 实测尺寸；批次特定系数；适用时的幅宽 | 调湿产品质量 | `iso-139-2005` |
| `calc_shared_utility_allocation` | 共用公用工程仪表 | 归属公用工程量 = 共用仪表总量 × 目标批次经验证因果驱动 / 全部服务批次同一驱动之和 | 仪表总量；机器小时/负荷、浴液体积、吞吐量或质量驱动 | 分配载能体量 | `eu-pef-2021-2279` |
| `calc_discharge_load` | 监测水排放 | 负荷 = 同期排放体积 × 实验室浓度，并明确单位换算 | 排放体积；浓度；样品代表性 | 排入水体的 kg 物质或参数 | `us-epa-textile-effluent-2004` |
| `calc_mass_balance` | 材料系统 | 核对调湿材料投入与合格产品、不合格产品、纤维特定边角料、库存变动及有记录排放/增重；调查不能解释的差异，不强行闭合 | 材料领用；合格/拒收产品；废物；库存变动；整理增重 | 质量平衡残差及说明 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料流 | 保留精确纤维名、成分、纱线/线等级、路线、整理、供应商和批次；实际身份可得时禁止通用纺织材料行。 | 供应商规格；成分测试；批次谱系；产品放行记录 |
| `dq_temporal` | 全部前景记录 | 使用连续且有代表性的报告期，通常至少十二个月，活动式生产则覆盖完整活动；披露开机、停机和异常事件处理。 | 有日期覆盖记录；生产日历；异常日志 |
| `dq_geographical` | 前景和上游数据 | 前景数据代表申报场址；上游数据在重要时匹配供应商地域和技术，并披露缺口。 | 场址 id；供应商来源；上游数据集元数据；缺口登记 |
| `dq_completeness` | 全部边界交换 | 核对材料、公用工程、水、化学品、废物和产品台账；记录每项排除/不适用操作及未监测直接排放。 | 核对工作表；仪表覆盖；许可证清单；排除登记 |
| `dq_measurement` | 仪表、秤和实验室数据 | 使用校准仪器和有记录方法；保留检出限、不确定度或准确度及取样代表性。 | 校准证书；实验室报告；取样计划；QA/QC 记录 |
| `dq_allocation` | 共用记录 | 记录来源总量、驱动、分母、受影响产品和敏感性；每项共用记录分配因子之和为一。 | 分配工作簿；仪表与驱动证据；敏感性检查 |
| `dq_versioning` | 发布数据集 | 纤维成分、供应商、形成技术、湿处理配方、整理、能源系统、废水路线、场址、分配基础或代表期发生实质变化时更新。 | 变更控制记录；年度代表性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 参考产品不在 CPC 27912 或未核查排除项时拒绝；要求申报产品形式、形成路线、纤维成分、整理和市场状态。 | `unsd-cpc-3-0-2025`; `eu-textile-fibre-regulation-1007-2011` |
| `validate_reference_flow` | 参考数量 | 要求恰好 1 kg 合格调湿净产品、包装皮重单列、经核验的产品流 UUID 和 Mass 流属性 UUID，并具备全部必需限定信息。 | `iso-139-2005` |
| `validate_atomic_exchanges` | 清单 | 拒绝复数集合、合并公用工程、选择指令和未解析占位身份。每项具体材料、化学品、载能体、包装组件、废物和基本流排放须为带路线适用性的一个原子行。 | `ec-jrc-textiles-bref-2023`; `eu-pef-2021-2279` |
| `validate_uuid_evidence` | Tiangong 引用 | 仅当 hybrid 发现与 state-100 直接读取在语义身份、公开状态、流类型、适用分类和参考属性上一致时接受 UUID；否则省略并保留行级拒绝原因。 | `unsd-cpc-3-0-2025` |
| `validate_foreground_amounts` | 全部清单行 | 要求采集前景记录或由采集记录计算的值及链接协议。拒绝 AI 编写或无引用的默认数量范围。 | `eu-pef-2021-2279` |
| `validate_route_coverage` | 过程边界 | 要求准备、形成、湿处理、整理、检验/修剪和包装的操作台账；每项操作须纳入、外包并链接数据集，或经证据证明不适用。 | `irvine-ruskey-bobbin-lace-2014`; `ec-jrc-textiles-bref-2023` |
| `validate_mass_balance` | 材料和产出 | 要求核对纱线/线及整理投入与合格产品、拒收品、纤维特定边角料、库存变动和有记录排放，并调查残差。 | `eu-pef-2021-2279` |
| `validate_wastewater` | 湿处理路线 | 要求计量或批次核对的水量、已申报化学品身份、废水去向和适用监测；不得把转移至处理设施的废水报告为直接基本流。 | `ec-jrc-textiles-bref-2023`; `us-epa-textile-effluent-2004` |
| `validate_allocation` | 共用记录 | 要求分配层级、因果驱动、因子求和检查和披露；拒绝无法说明的分配或无支持的回收抵扣。 | `eu-pef-2021-2279` |
| `validate_bilingual_alignment` | PCR 实施 | 英文和中文实施保持相同顺序的 process id、row id、rule id、受控 token、source id 和 UUID。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报 CPC 27912 薄纱、非机织/非针织/非钩编网眼织物或花边产品的工厂门前景数据集 |
| downstream_use | 产品和路线限定信息匹配时，可作为消费该纺织品的服装、家居、组件或其他产品的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 纤维成分、形成技术、整理、地域、时期、质量等级、包装状态和废水路线均匹配的产品系统建模 |
| excluded_use | 不得通用于机织、针织、钩编、刺绣、打结网、非织造、涂层织物或制成品；无敏感性分析不得跨实质不同纤维或整理路线替代 |
| required_metadata | PCR id；产品流 UUID；产品形式；CPC 范围；纤维名/分数；纱线/线等级；形成路线；尺寸和质量系数；湿处理/整理路线；场址和地域；时期；合格/拒收质量；分配；废水和废物去向；上游数据集引用；包装状态 |
| required_quality_disclosure | 前景份额；记录和仪表覆盖；调湿方法；成分证据；分配因子；质量平衡残差；取样和实验室方法；未解析 UUID/数据缺口；排除项；代表性和不确定度证据 |
| update_trigger | 纤维成分、供应商/上游数据集、形成技术、配方或整理、公用工程系统、废水处理、分配、场址、产品规格或代表报告期发生实质变化；否则至少每年审查 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 27912 精确范围及与相邻纺织类别的排除关系 |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | 纤维准备、预处理、染色、整理、能源、水、化学品、废水和排放过程覆盖 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | 功能单位、企业特定数据、数据质量、分配、截断、废物/回收和数据集规则 |
| `eu-textile-fibre-regulation-1007-2011` | standard | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, https://eur-lex.europa.eu/eli/reg/2011/1007/oj/eng | 纤维名称、成分披露、纺织产品身份及定量分析要求 |
| `iso-139-2005` | standard | ISO 139:2005, *Textiles — Standard atmospheres for conditioning and testing*, https://www.iso.org/standard/35179.html | 产品、纱线和废物质量证据的调湿基础 |
| `iso-1833-1-2020` | standard | ISO 1833-1:2020, *Textiles — Quantitative chemical analysis — Part 1: General principles of testing*, https://www.iso.org/standard/74881.html | 混合纤维成分验证 |
| `irvine-ruskey-bobbin-lace-2014` | literature | Irvine, V.; Ruskey, F. (2014), *Developing a mathematical model for bobbin lace*, Journal of Mathematics and the Arts 8(3-4), 95-110, https://doi.org/10.1080/17513472.2014.982938; open full text: https://arxiv.org/abs/1406.1532 | 梭结花边以多根线编结形成及路线特定构造证据 |
| `us-epa-textile-effluent-2004` | official_guidance | U.S. EPA, *Technical Support Document for the 2004 Effluent Guidelines Program Plan*, textile manufacturing review, https://www.epa.gov/sites/default/files/2015-11/documents/2004_effluent-guidelines-plan_tsd.pdf | 湿法工艺废水来源、化学品身份和排放负荷采集 |
