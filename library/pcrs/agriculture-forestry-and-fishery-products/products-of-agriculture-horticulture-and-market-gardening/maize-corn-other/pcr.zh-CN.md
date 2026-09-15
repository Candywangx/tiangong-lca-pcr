---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他玉米（谷物）

## 1. 范围与适用性

本 PCR 适用于在农场门口交付、除种植用种子以外的脱粒玉米籽粒（*Zea mays* L.）这一未加工农产品。其覆盖一个作物周期：从声明的田块起始条件，经整地、播种、田间管理和收获，直至声明农场门口之前实际发生的场内清理、干燥、搬运和储存。

本 PCR 不包括种植用玉米种子、作为蔬菜收获的甜玉米、全株青饲或青贮玉米，以及经制粉、湿法加工、淀粉提取、发酵、烹煮、压片或其他下游加工得到的产品。默认边界不包括声明门口之后的场外运输、贸易商储存、工业干燥和下游转化。研究可以把这些活动作为单独的下游过程加入，但不得把扩大后的结果重新标称为默认农场门口画像。

本 PCR 不预设地域和技术。具体数据包应识别生产地域、作物年份或周期、已知时的品种或杂交种、雨养或灌溉状态、耕作和残体管理、前茬作物及相关先前土地利用、收获形态、含水率基准、声明等级或终端用途类别，以及农场门口的位置和状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other |
| classification_refs | CPC 3.0: 01122 Maize (corn), other |
| covered_products | 除种植用种子外的脱粒玉米籽粒；在农场门口交付、用于声明食品、饲料、工业或其他用途的未加工籽粒 |
| excluded_products | 种植用种子；作为蔬菜收获的甜玉米；青饲或青贮玉米；绿色全株玉米；玉米粉、面粉、粗粒、压片、淀粉、油、乙醇及其他加工玉米产品 |
| representative_product | 散装脱粒玉米籽粒，按适用情况清理，并按声明含水率和质量基准在农场门口交付 |
| production_route | 整地、播种、田间管理、收获，以及农场门口之前实际发生的场内收获后作业 |
| market_state | 农场门口未加工农产品籽粒；声明净质量、含水率、等级或预定用途类别、地域和作物周期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场门口交付、除种植用种子外的脱粒未加工玉米籽粒 |
| How much | 1 kg 产品净质量 |
| How well | 声明含水率及其基准、可获得时的破损或碎粒比例、杂质或筛下物基准、声明等级或预定用途类别及地理来源；声称符合人类食用要求时还应识别适用规范 |
| How long or cycle | 一个声明玉米作物周期直至农场门口；如纳入场内储存，应声明储存时间 |
| reference_flow_link | `farm_gate_preparation` 的参考输出；使用实测可售籽粒质量和含水率把全部作物周期数量归一化到该输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 声明农场门口 1 kg 玉米籽粒净质量 |
| 参考产品流 | 玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 3.0 代码 01122 范围；农场门口位置；作物年份或作物周期日期；地域；已知时的品种或杂交种；雨养或灌溉状态；收获和交付形态；含水率百分比及湿基或干基约定；校正质量时的参考或合同含水率；等级或预定用途类别；不含包装的声明；纳入的收获后作业；纳入储存时的储存时间 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息时，该数据包的参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 kg 记录不含包装的玉米籽粒净质量，并说明该质量是收货状态质量还是按声明含水率校正后的质量。 |
| `moisture_basis` | 收获和农场门口籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 除非明确说明其他约定，否则以湿基百分比记录含水率；应用任何校正前应保留实测收货状态质量和含水率。 |
| `dry_matter_conversion` | 不同含水状态下比较的籽粒质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只能用 `calc_moisture_correction` 的干物质恒等式换算质量；不得把干燥过程的水分损失报告为物料损失。 |
| `area_and_yield` | 田间作业和作物产量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化到 1 kg 参考产品前，保留以 ha 表示的种植和收获面积、以 kg 或 t 表示的收获质量、含水率及计算产量基准。 |
| `fertilizer_nutrients` | 矿质和有机养分投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录配方产品质量与 N、P2O5、K2O、元素 P 或 K 及其他养分数量；说明所用养分约定，不得把产品质量当作养分质量。 |
| `energy_preservation` | 燃料、电力、干燥、泵送和储存能源 | Energy | MJ and kWh | 保留燃料实测数量和类型、以 kWh 计量的电力及热能或燃料的原始单位；记录每次换算，并避免重复计算燃料供应与直接燃烧。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_crop_cycle` | 前景作物生产 | 纳入整地、播种、作物管理、使用时的灌溉、施肥、植保、收获，以及声明农场门口之前发生的全部场内清理、干燥、搬运和储存作业。 | `fao-leap-feed-2016` |
| `sb_upstream_inputs` | 购入和转入投入 | 记录种子、肥料、有机改良物、植保产品、燃料、电力、供应水、重要时的机械或承包服务，以及使用时的包装；每项技术圈投入应关联地域和技术具有代表性的上游数据集，或披露代理数据。 | `fao-leap-feed-2016`; `eu-pef-2021` |
| `sb_field_emissions` | 管理土壤和田间排放 | 计算合成和有机 N、作物残体及相关土壤 N 矿化产生的直接和间接 N2O；使用石灰和尿素时计算 CO2；使用最具体、被接受的区域方法和采集的活动数据纳入 NH3、NO、硝酸盐淋溶及其他重要田间排放。 | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `sb_land_and_soil` | 土地占用、土地利用变化和土壤碳 | 记录占用面积和作物周期时长。当所选 LCA 方法要求，或存在近期土地转化、排水、生物炭或重要管理变化时，评估土地利用变化和土壤碳储量变化；披露方法、期间和排除项。 | `eu-pef-2021`; `fao-leap-feed-2016` |
| `sb_residues` | 秸秆、穗轴、苞叶和其他作物残体 | 将留田、覆盖、还田、原地放牧或焚烧的残体作为田间管理路径，并核算相关排放。只有在数量和去向有证据时，才把跨越农场门口的残体记录为共产品。 | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `sb_postharvest_gate` | 收获后作业 | 仅在声明农场门口之前实际发生时纳入干燥、清理、通风、输送和储存；报告进入和离开作业的籽粒质量与含水率，使干燥失水与干物质损失分离。 | `fao-grain-drying`; `fao-postharvest-loss-2019` |
| `sb_default_exclusions` | 默认农场门口画像 | 除非作为单独识别的下游过程加入，否则排除种植用种子生产、门口之后的场外分销、贸易商或工业储存、制粉、淀粉或油提取、发酵、烹煮、饲料制造以及产品使用或寿命终结。 | `fao-leap-feed-2016` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 玉米作物周期开始时已识别的土地地块，并声明前茬、残体状态、土壤管理遗留影响、相关先前土地利用，以及任何已经发生的作物或整地活动 |
| starting_condition_role | 前景作物周期起点；只有所选 LCA 方法分配时才纳入继承负担或信用，并记录分配方式 |
| product_classification_scope | 除种植用种子外、对应 CPC 3.0 代码 01122 的脱粒未加工玉米籽粒 |
| recursive_input_rule | 当前景过程投入同一产品类别的非种用玉米籽粒时，以供应商或上游数据集将其记录一次为产品投入，不得依据本 PCR 递归重建其生产；种植用种子应作为不同产品类别处理 |
| upstream_dataset_requirement | 每项购入或转入的产品、能源、运输、机械服务或废物处理投入均具有代表性上游数据集，或具有说明地域、技术、时间和不确定性限制的代理数据 |
| disclosure | 地域；作物年份和日期；品种或杂交种；前茬和相关土地历史；耕作；雨养或灌溉状态；水源；施肥和植保方案；残体路径；收获和可售质量；含水率基准；损失；共产品；分配；门口；纳入的收获后作业；储存时间；排放因子方法；数据缺口和代理 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation_and_harvest` | 田间种植与收获 | required |  | 从声明田块起点至收获的前景作物周期；天工过程身份候选 `47013f74-294a-40d7-aefb-89221c484af4` 仅作为区域身份依据，不代表默认地域或精确参考产品过程 | 1 ha 种植面积和完整作物周期，再以声明含水率下的实测可售籽粒产出归一化 |
| `farm_gate_preparation` | 场内处理至农场门口 | required |  | 从收获籽粒到声明农场门口产品的前景转移；仅在实际发生时纳入干燥、清理、通风、储存和包装子活动 | 声明农场门口 1 kg 玉米籽粒净产出 |

### 过程：田间种植与收获（`field_cultivation_and_harvest`）

#### 输入

##### 产品流

###### 供应到田间的种植用种子（`planting_seed`）

把播种用种子记录为单独产品投入；它不是 CPC 01122 参考输出。

- 选定流：Corn seed
- 流属性/单位：Mass / kg
- 数量规则：向已识别田块发出的实测种子质量，扣除退回的未使用种子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定用种量筛选估算，应由田间记录或经评审的区域证据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：5
  - 上限：100
  - 单位：kg/ha crop cycle
  - 基准：籽粒玉米播种用种的宽泛编写筛选值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 矿质肥料产品（`mineral_fertilizers`）

分别记录每种配方肥料，并保留产品质量和声明养分分析。

- 选定流：Mineral fertilizer products
- 流属性/单位：Mass / kg product；养分含量 / kg N、kg P2O5 或 kg P、kg K2O 或 kg K，按声明约定
- 数量规则：实测交付或领用质量减去有记录的退回量，并与田间施用记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定配方肥料总量筛选估算，应由田间记录或经评审的区域证据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg product/ha crop cycle
  - 基准：配方矿质肥料总质量，而非养分质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有机改良物和粪肥（`organic_amendments`）

仅在施用时记录粪肥、堆肥、消化液、污泥或其他有机改良物，包括湿质量、干物质、N 含量、来源、处理方式和所选方法要求的输入负担。

- 选定流：Organic soil amendments
- 流属性/单位：Mass / kg or t wet mass and dry matter；kg N
- 数量规则：实测施用量和经分析或供应商声明的组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 植物保护产品（`crop_protection_products`）

记录实际使用的每种配方除草剂、杀虫剂、杀菌剂、种子处理剂、植物生长调节剂或其他植保产品，并记录有效成分和施用方法。

- 选定流：Crop-protection products
- 流属性/单位：Mass / kg formulated product and kg active ingredient
- 数量规则：实测领用或施用产品量，并与喷施或施用日志核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定配方产品筛选估算，应由产品特定田间记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg formulated product/ha crop cycle
  - 基准：全部植保产品合计，而非有效成分质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业燃料（`field_fuels`）

按燃料类型和作业记录燃料；当自有和承包机械的燃料处于前景边界内时均应纳入。

- 选定流：Field-operation fuels
- 流属性/单位：Volume or mass and net calorific value / L, kg, and MJ
- 数量规则：实测领用量、发票、罐存平衡、远程信息或承包商记录；说明直接燃烧是单独建模还是包含在燃烧服务数据集中
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 数量范围：暂定田间燃料筛选估算，应由机械或供应商记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：L diesel-equivalent/ha crop cycle
  - 基准：全部田间作业；其他燃料应透明换算
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`field_electricity`）

使用电力进行灌溉泵送和其他田间作业时，应记录电量、计量边界和电力供应身份。

- 选定流：Electricity supplied to field operations
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或用泵功率和运行时间依据 `calc_pumping_electricity` 进行工程计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 数量范围：暂定田间电力筛选估算，应由电表或工程记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha crop cycle
  - 基准：灌溉和其他田间电力合计
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`supplied_irrigation_water`）

仅当处理或交付的灌溉水作为产品投入建模时使用本行；不得把同一水量同时记为直接基本流取水。

- 选定流：Supplied irrigation water
- 流属性/单位：Volume / m3
- 数量规则：在田间边界实测的交付水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：暂定灌溉水筛选估算，应由计量或水量平衡证据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha crop cycle
  - 基准：田间边界交付的毛水量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 直接灌溉取水（`irrigation_water_withdrawal`）

仅当水直接取自环境时使用本行；识别水源和环境区室，不得与供应水重复。

- 选定流：Water withdrawal from environment
- 流属性/单位：Volume / m3
- 数量规则：按水源计量的取水量或有记录的泵流量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：暂定直接取水筛选估算，应由计量或水量平衡证据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha crop cycle
  - 基准：水源处直接取水毛量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业土地占用（`land_occupation`）

记录占用田块面积和作物周期时长；任何土地转化均应按所选方法作为单独基本流记录。

- 选定流：Occupation of arable land
- 流属性/单位：Area-time / ha·year
- 数量规则：地理空间或田块登记面积乘以作物周期占全年比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_and_land_records`

#### 输出

##### 产品流

###### 转入收获后处理的已收获玉米籽粒（`harvested_maize_transfer`）

记录场内清理或干燥之前的已收获脱粒籽粒质量和含水率，不得混入全株青饲质量。

- 选定流：Harvested maize grain, field-edge transfer
- 流属性/单位：Mass / kg
- 数量规则：实测收获籽粒质量及同步含水率测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output`
- 数量范围：暂定籽粒产量筛选估算，应由地磅记录和经评审的区域证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：30
  - 单位：t as-received grain/ha crop cycle
  - 基准：实测含水率下的收获脱粒籽粒质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 跨越门口的移出作物残体（`removed_crop_residues`）

仅当秸秆、穗轴、苞叶或其他残体被计量、移出田间或农场系统且转往有记录的用途时，才把它记录为产品输出。

- 选定流：Maize crop residues, removed
- 流属性/单位：Mass / kg dry matter
- 数量规则：实测移出质量并校正到干物质；残体留田、还田、焚烧或原地放牧时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_and_land_records`

##### 废物流

##### 基本流

###### 管理土壤产生的一氧化二氮（`direct_and_indirect_n2o`）

使用所选 IPCC 层级或有记录的更优区域方法，根据采集的 N 投入、残体 N、管理、气候、土壤、挥发和淋溶数据计算直接及相关间接 N2O。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg N2O
- 数量规则：`calc_managed_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：N 投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_activity_data`
- 来源：`ipcc-2019-managed-soils`

###### 施肥和作物残体产生的氨（`field_ammonia`）

按肥料类型和施用条件计算 NH3；适用时计算表面残体 NH3，并使用与 EMEP/EEA 指南一致的区域方法或有记录的更优方法。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg NH3
- 数量规则：`calc_field_ammonia`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：N 投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_activity_data`
- 来源：`eea-emep-agricultural-soils-2023`

###### 淋溶或径流损失的氮（`nitrate_leaching`）

仅在所选方法及气候或灌溉条件使该路径适用时计算 N 淋溶和径流；转换到选定硝酸盐或氮流之前保留 N 质量。

- 选定流：Nitrate or nitrogen to water
- 流属性/单位：Mass / kg N or kg nitrate, convention declared
- 数量规则：`calc_n_leaching`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：N 投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_activity_data`
- 来源：`ipcc-2019-managed-soils`

###### 石灰和尿素产生的二氧化碳（`lime_urea_co2`）

施用尿素和含碳酸盐石灰材料时计算 CO2；本行不得包含无关的燃料燃烧 CO2。

- 选定流：Carbon dioxide to air
- 流属性/单位：Mass / kg CO2
- 数量规则：`calc_lime_urea_co2`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 ha、每作物周期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_activity_data`
- 来源：`ipcc-2019-managed-soils`

### 过程：场内处理至农场门口（`farm_gate_preparation`）

#### 输入

##### 产品流

###### 从田间接收的已收获玉米（`harvested_maize_input`）

从 `harvested_maize_transfer` 转入实测收获籽粒和含水率，不得再次创建上游负担。

- 选定流：Harvested maize grain, field-edge transfer
- 流属性/单位：Mass / kg
- 数量规则：等于 `field_cultivation_and_harvest` 的内部转移输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每收获后过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_output`

###### 收获后燃料和热能（`postharvest_fuel_heat`）

仅当农场门口之前使用时记录干燥和储存燃料或购入热能，并记录干燥机技术及入口和出口含水率。

- 选定流：Drying and storage fuel or heat
- 流属性/单位：Energy / MJ；保留原始燃料数量
- 数量规则：可归属于籽粒批次的实测燃料、热量表、发票或工程记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 农场门口籽粒净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_operations`
- 数量范围：暂定干燥和储存热量筛选估算，应由批次和设备记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg net farm-gate grain
  - 基准：门口之前使用的全部热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获后电力（`postharvest_electricity`）

仅当农场门口之前使用时记录干燥风机、通风、输送、清理、称量和储存电力。

- 选定流：Electricity supplied to post-harvest operations
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电量，或使用设备运行时间和功率分配的设施电表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 农场门口籽粒净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_operations`
- 数量范围：暂定收获后电力筛选估算，应由电表或工程记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg net farm-gate grain
  - 基准：门口之前的干燥、通风、输送、清理、称量和储存
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`farm_gate_packaging`）

仅当包装随籽粒在门口交付时记录袋、内衬、托盘或其他包装；包装质量不计入参考产品质量。

- 选定流：Farm-gate grain packaging materials
- 流属性/单位：Mass / kg by material
- 数量规则：购入或领用包装与包装产品核对，扣除重复使用和退回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 农场门口籽粒净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_operations`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门口玉米籽粒净产品（`reference_maize_grain`）

这是参考输出：经过实际发生的场内作业后、声明含水率和质量限定信息的可售脱粒玉米籽粒。

- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：声明含水率下 1 kg 净产品，或用 `calc_moisture_correction` 将实测输出归一化到 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 筛下物和拒收籽粒（`screenings_and_rejects`）

按实测去向记录干物质损失、杂质、受损籽粒和拒收籽粒。当实测输出具有有记录的有益去向且适用分配规则时，应把它重新分类为共产品而非废物。

- 选定流：Grain screenings and rejects
- 流属性/单位：Mass / kg at measured moisture and kg dry matter
- 数量规则：实测排出废物或拒收质量，并按含水率校正以便核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 收获玉米投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_operations`
- 数量范围：暂定筛下物和拒收物筛选估算，应由批次质量平衡记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg harvested maize input
  - 基准：收获籽粒投入的干物质当量比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 全部多功能前景过程 | 通过拆分独立计量的作业来避免分配；记录允许时，把投入、能源、排放和损失直接归属于玉米籽粒、移出残体或其他输出。 | `eu-pef-2021`; `fao-leap-feed-2016` |
| `allocation_physical_then_other` | 不可分离的联合生产 | 无法拆分时，使用能够代表共享投入或排放驱动因素且有记录的因果或生物物理关系。不存在可辩护物理关系时，使用相对经济价值等有记录的其他关系；当分配显著影响画像时提供敏感性结果。 | `eu-pef-2021`; `fao-leap-feed-2016` |
| `allocation_residue_status` | 玉米秸秆、穗轴、苞叶和筛下物 | 留田、还田、焚烧或原地放牧的残体属于管理路径，不是离开系统的共产品。只有移出残体的实测数量、去向、产品或废物状态及所选分配关系有记录时，才分配上游负担。 | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `allocation_storage_energy` | 共享干燥和储存设施 | 尽可能分表计量能源。否则只把共享实测消耗量按有记录的物理驱动因素分配给玉米批次，例如计量运行时间、处理籽粒质量、干燥去除水分量或储存占用的体积—时间。 | `eu-pef-2021` |
| `allocation_rotation_and_infrastructure` | 轮作和共享资本服务 | 对跨作物轮作、土地管理变化、机械和基础设施共享的负担或信用遵循所选 LCA 方法；声明期间、分母、分配因子和排除的资本项目。 | `eu-pef-2021`; `fao-leap-feed-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation_and_harvest` | 种子、肥料、改良物和植保投入 | 发票、库存领用、施用日志、产品标签、养分分析 | field_id; date; product; supplier; lot; mass_or_volume; formulation; N_P_K_convention; active_ingredient; returned_quantity | 将购入和领用量与田间施用记录核对，并保留产品规格 | kg; L; kg N; kg P2O5 or kg P; kg K2O or kg K; kg active ingredient | 每次接收和施用 | 完整作物周期 | 数据集总体中的每个田块 | 按产品和田块求和，扣除有记录退回量；完成田块级核对后才按面积或产出加权 | 发票；库存账；校准秤或仪表；施用日志；标签或实验室分析 |
| `cp_field_energy` | `field_cultivation_and_harvest` | 田间燃料和电力 | 燃料领用、发票、机械或承包商日志、电表 | field_id; operation; equipment; fuel_type; quantity; electricity_kWh; hours; contractor_scope; meter_boundary | 优先直接计量；否则依据设备记录进行工程计算并保留假设 | L; kg; MJ; kWh; h | 每次作业或账单期 | 完整作物周期 | 全部纳入田块的自有和承包作业 | 按能源载体和作业求和；防止承包服务、燃料供应和直接燃烧重叠 | 发票；罐存平衡；电表读数；远程信息；承包商声明；设备额定值 |
| `cp_water_records` | `field_cultivation_and_harvest` | 灌溉水 | 取水表、交付记录、泵日志、灌溉计划 | source; compartment; field_id; date; meter_start; meter_end; flow_rate; runtime; delivered_volume; treatment_status | 计量直接取水或交付水；仅在无计量证据时使用泵流量计算 | m3 | 每次灌溉 | 完整作物周期 | 全部灌溉田块和水源 | 按水源和田块求和；在边界内时单独报告输水损失；不得重复记录供应水和直接取水 | 校准水表；取水许可；交付发票；泵试验；灌溉日志 |
| `cp_crop_and_land_records` | `field_cultivation_and_harvest` | 作物身份、土地、管理和残体 | 田块登记、空间边界、作物日志、土壤和残体记录 | field_id; area_ha; sowing_date; harvest_date; cultivar; previous_crop; prior_land_use; tillage; soil; residue_mass; residue_moisture; residue_destination; land_change_date | 识别每个田块多边形并核对管理面积、作物日期和残体路径 | ha; dates; kg; percent moisture | 田块设置、每次重要管理事件和收获 | 完整作物周期及方法要求的土地历史期间 | 每个纳入田块 | 保留田块级记录；检查面积重叠和作物周期完整性后才汇总 | 田块图；土地登记；空间文件；作物日志；称量记录；土壤或残体分析 |
| `cp_harvest_and_output` | `field_cultivation_and_harvest` | 收获和可售玉米产出 | 收割机监测、地磅、称重票、含水率检测、销售或转移记录 | field_id; lot_id; gross_mass; tare; net_mass; moisture_percent; moisture_basis; sampling_time; harvested_form; transfer_destination | 称量每个批次并在转移时测量代表性含水率；核对田块总量和农场门口批次 | kg; t; percent wet basis | 每个收获或转移批次 | 完整收获期和全部纳入交付 | 每个纳入田块和批次 | 按批次汇总净质量；保留实测含水率；单独计算干物质和共同含水率质量 | 校准地磅或秤；校准含水率仪或实验室结果；批次票据 |
| `cp_emission_activity_data` | `field_cultivation_and_harvest` | 管理土壤和田间排放 | 关联的养分、残体、土壤、气候、灌溉和施用记录 | synthetic_N; organic_N; residue_N; fertilizer_type; application_method; incorporation_delay; soil_pH; climate_zone; leaching_condition; lime_type; lime_mass; urea_mass; regional_factor_set | 把田块活动数据关联到所选 IPCC 或区域排放方法，不得以默认值替代实测活动数据 | kg N; kg product; kg C; ha; dates | 每次施用及每个作物周期 | 完整作物周期和因子具有代表性的气候期间 | 每个田块或有理由的同质分层 | 按田块和源路径计算后汇总；保留因子版本、层级、单位和换算 | 施用日志；养分分析；土壤检测；气候或区域分类；方法和因子引用 |
| `cp_postharvest_operations` | `farm_gate_preparation` | 清理、干燥、通风、储存、包装、损失和农场门口产出 | 批次质量平衡、含水率检测、仪表、燃料记录、储存日志、包装记录 | lot_id; input_mass; input_moisture; output_mass; output_moisture; screenings_mass; reject_mass; fuel; heat; electricity; storage_start; storage_end; capacity; packaging_mass; destination | 跟踪每个批次的纳入作业，核对质量、干物质、能源、损失和储存时间 | kg; percent wet basis; MJ; kWh; m3; days | 每批次和每作业；储存至少每月及入库和出库时 | 收获至声明农场门口 | 每个纳入批次、干燥机、仓储和包装线 | 在划分干物质损失前按含水率校正；以记录的物理驱动因素分配共享能源；只汇总已核对批次 | 校准秤；含水率仪或实验室结果；能源表；发票；干燥和储存日志；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_correction` | 不同含水率下比较的籽粒 | 对湿基含水率分数 MC，干物质 = M_as_received × (1 − MC_as_received)；声明参考含水率下质量 = dry_matter ÷ (1 − MC_reference)。保留实测质量和含水率，不得把计算水量差作为产品损失。 | measured mass; measured moisture; moisture convention; declared reference moisture | 干物质当量质量及声明含水率下质量 | `fao-postharvest-loss-2019`; `fao-grain-drying` |
| `calc_saleable_yield` | 田间作物产出 | 可售产量等于含水率一致的农场门口籽粒净质量除以收获面积；发生筛下、拒收或储存损失时分别报告收获和可售产量。 | net farm-gate grain mass; farm-gate moisture; harvested area; screenings and rejects | 声明含水率下 kg 或 t grain per ha | `faostat-crops-production` |
| `calc_pumping_electricity` | 无直接计量的灌溉泵送 | 使用实测流量和运行时间及泵功率，或使用扬程和经核验效率的有记录水力能计算；保留源测量和不确定性，不得用暂定范围替代记录。 | water volume or flow and runtime; pump power or head and efficiency | kWh irrigation electricity |  |
| `calc_managed_soil_n2o` | 直接和间接 N2O | 采用最具体且被接受的国家或区域 Tier 2 或 Tier 3 方法。否则对合成 N、有机 N、作物残体 N、相关土壤 N 矿化、挥发和淋溶路径应用披露的 IPCC 2019 Tier 1 方程和因子；保留 N2O-N 到 N2O 的换算。 | synthetic N; organic N; residue N; soil and climate class; volatilization and leaching applicability; selected factors | 按直接和间接路径的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_field_ammonia` | 肥料和残体产生的 NH3 | 使用被接受区域清单方法的肥料类型和施用条件因子；仅对适用的表面残体路径计算残体 NH3，并明确 NH3-N 与 NH3 单位。 | N by fertilizer type; soil pH; application and incorporation; residue N; surface duration; regional factors | 按源路径的 kg NH3 | `eea-emep-agricultural-soils-2023` |
| `calc_n_leaching` | N 淋溶和径流 | 有当地认可的养分损失模型时使用该模型；否则仅在气候和灌溉条件适用时使用披露的 IPCC 淋溶和径流分数，并声明 kg N 与所选硝酸盐或氮流之间的换算。 | susceptible N inputs; leaching applicability; selected fraction; molecular-mass convention | kg N leached 及所选水排放流 | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2` | 石灰和尿素施用 | 根据实测石灰石、白云石、其他碳酸盐材料和尿素的量与类型，使用碳含量或 IPCC 因子计算 CO2；只有存在未施用证据时才报告为零。 | lime type and mass; urea mass; carbon content or selected factor | kg CO2 to air | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和数据集总体 | 产品属于 CPC 01122 范围内的非种用脱粒玉米籽粒；每个纳入田块和批次均属于声明作物周期、地域和农场门口总体。 | 田块和批次登记；产品说明；CPC 范围；销售或转移记录 |
| `dq_temporal` | 活动数据 | 至少覆盖从田块起点到全部纳入农场门口批次的一个完整作物周期；披露异常天气、部分田块、跨期储存及是否使用多年平均。 | 带日期作物日志；发票；仪表；收获和储存记录；气候说明 |
| `dq_completeness` | 清单 | 核对边界内全部重要投入、能源、水、产出、残体、废物和直接排放活动记录；列出排除项，并量化或解释每个重要数据缺口。 | 核对表；仪表和发票覆盖；LEAP 完整性和数据质量评审 |
| `dq_mass_moisture` | 收获和收获后平衡 | 按批次核对籽粒投入、净产品、筛下物、拒收物、干物质损失和含水率变化；干燥造成的水分减少不是干物质损失。 | 校准称量；含水率检测；批次平衡；`calc_moisture_correction` |
| `dq_geography_technology` | 上游数据集和因子 | 匹配地域、灌溉状态、耕作、作物管理技术、能源供应和排放因子区域；记录每个代理及其为何是最佳可用匹配。 | 数据集元数据；因子文件；代理登记 |
| `dq_uncertainty` | 实测、计算和分配值 | 保留测量精度、抽样基准、缺失数据处理、因子不确定性、分配敏感性和暂定范围替换情况；区分采集记录与默认值和代理。 | 校准记录；抽样计划；不确定性或范围字段；分配敏感性 |
| `dq_source_priority` | 外部方法和基准 | 先使用适用官方标准、指南和数据集，再使用较低等级证据；记录来源版本或出版身份和访问日期，不得把搜索摘要或作者估算当作外部证据。 | 本 PCR 的来源登记和 source id |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份 | 确认输出是除种植用种子外的脱粒未加工玉米籽粒，且参考产品流解析为 Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`；拒绝以种子、甜玉米、青饲或青贮玉米及加工产品替代。 |  |
| `validation_reference_flow` | 功能单位和参考流 | 确认声明农场门口恰好 1 kg 籽粒净质量，并具有含水率百分比和约定、校正时的参考含水率、作物周期、地域、等级或预定用途、纳入的收获后作业、适用时的储存时间及不含包装状态。 | `fao-postharvest-loss-2019`; `codex-maize-cxs-153` |
| `validation_process_identity` | 天工过程引用 | 仅把过程 `47013f74-294a-40d7-aefb-89221c484af4` 作为区域种植身份候选。使用前核验其地域、技术、系统边界及参考输出是否解析为精确 CPC 01122 Corn 流；否则构建或选择合规前景过程，不得静默使用该候选。 |  |
| `validation_boundary` | 过程和清单完整性 | 确认两个必需过程均有表征、门口之前实际发生的全部场内作业均已纳入、场外下游加工已排除或单独识别，且每项技术圈投入都有上游数据集或披露的代理。 | `fao-leap-feed-2016`; `eu-pef-2021` |
| `validation_water` | 灌溉清单 | 确认同一水量没有同时作为供应水和直接环境取水使用；识别水源、区室、实测数量、泵送能源及边界内输水损失。 |  |
| `validation_nutrients_emissions` | 肥料、土壤和田间排放 | 将配方肥料和有机改良物记录与养分 N 核对；确认 N2O、NH3、淋溶或径流及石灰或尿素 CO2 的所选层级、因子、适用性、单位和换算；把缺失的重要路径报告为不确定，而不是零。 | `ipcc-2019-managed-soils`; `eea-emep-agricultural-soils-2023` |
| `validation_mass_balance` | 收获和收获后批次 | 将收获籽粒干物质与农场门口产品、移出共产品、筛下物、拒收物和实测干物质损失核对；分离水分去除和损失，并调查无法解释的不平衡。 | `fao-postharvest-loss-2019`; `fao-grain-drying` |
| `validation_allocation` | 多功能过程 | 核验先尝试拆分；仍需分配时，记录输出状态、所选物理或其他关系、因子、期间、适用时的价格，以及重要选择的敏感性。 | `eu-pef-2021`; `fao-leap-feed-2016` |
| `validation_human_food_claim` | 声称符合 Codex CXS 153-1985 的籽粒 | 仅在人类食用合规声明时应用该标准；此时核验声明含水率上限、安全性和适用性、异常气味或风味、活虫、污物及其他适用规格字段。不得把 15.5% 含水率上限作为饲料或工业用籽粒的普遍规则。 | `codex-maize-cxs-153` |
| `validation_data_quality` | 最终数据包 | 报告接受的输入、执行的检查、跳过的检查、发现、代理、剩余暂定估算和完整性。缺失关键身份、质量、含水率、边界、分配或排放方法证据时，校验结果应为不确定或失败，而不是完整。 | `fao-leap-feed-2016`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景作物生产数据包及可发布的摇篮到农场门口玉米籽粒数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 当范围和代表性匹配时，作为下游 `process` 和 `lifecyclemodel` 投影的数据源 |
| allowed_use | 对声明地域、作物周期、含水率、等级或预定用途类别、技术和分配基准下的非种用农场门口玉米籽粒进行归因型建模；只在兼容性检查后汇总 |
| excluded_use | 种植用种子、甜玉米、青饲或青贮玉米、加工玉米产品、不受支持的地域或技术、农场到市场分销，以及未经适用项目要求评审的比较或公开声明 |
| required_metadata | PCR id；CPC 01122 范围；参考流 UUID；所用过程身份；地域；田块总体；作物年份和日期；已知时的品种或杂交种；前茬和相关土地历史；耕作；雨养或灌溉状态；水源；投入和能源方案；收获及可售产量；含水率约定和值；等级或预定用途；残体路径；分配；门口；纳入的收获后作业；储存时间；排放方法和因子版本；上游数据集和代理 |
| required_quality_disclosure | 覆盖和核对；测量和抽样方法；校准；时间、地域和技术代表性；质量和含水率平衡；不确定性；数据缺口；已替换或保留的暂定 `reasoned_estimate` 范围；分配敏感性；跳过的校验检查 |
| update_trigger | 新作物周期数据；田块总体、地域、品种、灌溉、耕作、养分或植保方案变化；产量或含水率基准变化；新干燥或储存技术；残体或共产品去向变化；分配修订；新上游数据集；官方排放方法或因子修订；暂定证据缺口解决；重大 QA 失败 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-feed-2016` | `official_guidance` | FAO LEAP Partnership. *Environmental performance of animal feeds supply chains: Guidelines for assessment*. https://openknowledge.fao.org/server/api/core/bitstreams/6a82c7ca-8e71-426a-9994-557fd854b241/content（访问日期 2026-08-07）。 | 摇篮到门口作物/饲料系统边界、清单完整性、初级数据优先、数据质量维度、拆分和共产品处理 |
| `ipcc-2019-managed-soils` | `official_guidance` | IPCC. *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（访问日期 2026-08-07）。 | 直接和间接 N2O 路径、N 活动数据、挥发和淋溶适用性，以及石灰和尿素 CO2 |
| `eea-emep-agricultural-soils-2023` | `official_guidance` | European Environment Agency. *EMEP/EEA air pollutant emission inventory guidebook 2023*, 3.D Crop production and agricultural soils. https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-d-agricultural-soils-2023/@@download/file（访问日期 2026-08-07）。 | 施肥和作物残体 NH3、NO 的活动数据和计算路径 |
| `eu-pef-2021` | `official_guidance` | European Commission. Commission Recommendation (EU) 2021/2279, consolidated text and Annex I Product Environmental Footprint method. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230（访问日期 2026-08-07）。 | 功能单位框架、生命周期清单和数据质量期望、拆分和分配层级、共享电力和储存分配及披露 |
| `codex-maize-cxs-153` | `standard` | Codex Alimentarius Commission. *Standard for Maize (Corn), CXS 153-1985*, adopted 1985, revised 1995 and amended 2019. https://www.fao.org/input/download/standards/51/CXS_153e.pdf（访问日期 2026-08-07）。 | 条件性人类食用产品规范、含水率和质量限定信息；不是饲料或工业用籽粒的普遍要求 |
| `fao-grain-drying` | `handbook` | FAO. *Agricultural engineering in development: Drying* and *Monitoring grain*. https://openknowledge.fao.org/server/api/core/bitstreams/aa7e0adf-5bbb-4f73-bb2d-70d3d5802703/content/T0522E08.htm and https://www.fao.org/3/t0522e/T0522E0a.htm（访问日期 2026-08-07）。 | 条件性干燥和储存边界、基于仪器的含水率测量及安全储存含水率选择 |
| `fao-postharvest-loss-2019` | `official_guidance` | FAO. *Guidelines on the measurement of harvest and post-harvest losses*. https://openknowledge.fao.org/server/api/core/bitstreams/bd596c08-1202-4745-b23d-07bb5dc84b06/content（访问日期 2026-08-07）。 | 批次质量平衡、含水率一致的损失测量，以及干燥失水与干物质损失的分离 |
| `faostat-crops-production` | `dataset` | FAO. *FAOSTAT: Crop Production, Yield, Harvested Area and Processed*, global national annual dataset. https://data.apps.fao.org/catalog/dataset/crop-production-yield-harvested-area-and-processed-global-national-annual-faostat/resource/baad642c-1067-4a94-85ff-9a664fffba58（访问日期 2026-08-07）。 | 与地域和年份匹配的产量及收获面积合理性检查；不得替代前景产量记录 |
