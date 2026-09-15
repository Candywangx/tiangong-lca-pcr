---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-profiles-and-wire-of-nickel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 镍条、镍棒、镍型材及镍丝

## 1. 范围与适用性

本 PCR 适用于制造场址门口的镍条、镍棒、镍型材及镍丝前景数据包。范围包括镍质进料或同类别前体的接收与准备，采用轧制、锻造、挤压、拉拔、矫直或已声明的等效路线进行机械成形，按路线要求实施的热处理与表面精整，以及合格半成品的检验和放行。

本类别包括以镍为主要商业材料并以上述形态销售的无涂层镍及镍合金半成品。不包括镍矿石及精矿、镍锍及其他冶金中间品、镍铁、未锻轧镍、镍粉或镍片、板材、薄板、带材、箔材、管材、制成品，以及产品识别并非镍半成品的异种金属包覆或涂覆产品。接收进料的上游生产、资本设备、员工通勤、产品使用、下游制造和生命周期末端均不属于前景边界；研究需要时，应以单独链接的数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-profiles-and-wire-of-nickel |
| classification_refs | CPC 3.0：41522，镍条、镍棒、镍型材及镍丝 |
| covered_products | 在进一步加工为制成品之前，以直条或卷状交付的镍或镍合金条、棒、开口型材及丝材 |
| excluded_products | 矿石、精矿、镍锍、冶金中间品、镍铁、未锻轧镍、粉末、薄片、板材、薄板、带材、箔材、管材、制成品及异种金属包覆或涂覆产品 |
| representative_product | 在制造场址门口放行的合格镍丝或镍棒 |
| production_route | 已声明的进料准备和机械成形工序；仅在所代表产品实际采用时纳入热处理和表面精整 |
| market_state | 干燥、经检验的半成品镍材，并声明形态、合金或牌号、尺寸、状态、表面质量及交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明商业规范的镍条、镍棒、镍型材或镍丝 |
| How much | 1,000 kg 合格产品净质量 |
| How well | 已声明产品形态、镍或合金牌号及成分、尺寸与公差、状态或热处理条件、表面质量及合格判据 |
| How long or cycle | 一个制造批次或报告期；不为半成品指定使用寿命功能 |
| reference_flow_link | `out_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 镍条、镍棒、镍型材及镍丝 `ba8e5505-ab12-42bb-8dc3-4680a6914899` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；镍或合金牌号及成分依据；尺寸及公差；状态或热处理条件；表面质量；制造路线；再生进料占比及核算方法；场址及地理范围；报告期；交付状态 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息将导致参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品、镍进料、前体及镍废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤测定净干质量；托盘、线轴和运输包装不属于所售产品质量时应予扣除。 |
| `electricity_energy` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表读数，并按 1 kWh = 3.6 MJ 换算；披露是否纳入辅助负荷和共用产线负荷。 |
| `gas_volume` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量气体体积及参考温度和压力；换算至同一参考条件前不得比较或汇总体积。 |
| `water_and_chemical_mass` | 工艺用水和氢氧化钠投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录交付质量；对于溶液应披露浓度并单独计算干化学品质量，不得将溶液质量视为纯试剂质量。 |
| `wastewater_volume` | 含镍表面处理废水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 计量分流废水体积，并在具有实质影响时报告镍浓度、处理去向、回用比例及参考条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口接收的未锻轧镍炉料，或接收的镍条、镍棒、镍型材或镍丝前体 |
| starting_condition_role | 其先前生产负荷由链接数据集表示的上游材料；仅场内准备和转化属于前景操作 |
| product_classification_scope | 由已声明类别识别所代表的镍条、镍棒、镍型材及镍丝；形态、成分和交付状态仍为必需的前景限定信息 |
| recursive_input_rule | 当接收的前体本身属于本 PCR 类别时，仅作为 `in_semifinished_nickel_precursor` 记录一次并链接其上游数据集，不得递归套用本 PCR 来重建供应商数据集 |
| upstream_dataset_requirement | 对每项接收的金属投入、电力、天然气、水和试剂，链接在成分、产品状态、技术、地理和时间方面具有代表性的上游数据集 |
| disclosure | 声明起始进料状态、工艺路线、纳入与省略的操作、再生进料占比、内部废料循环、场址边界、地理范围、报告期及共用负荷分配 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_site_gate` | 前景制造 | 纳入场内接收与准备、成形、路线要求的热处理和表面精整、检验，以及直至制造场址门口的放行。 | `nickel-institute-11002`; `arya-et-al-2021`; `chen-et-al-2023` |
| `boundary_upstream_links` | 接收的投入 | 将接收金属和公用工程的生产排除在前景过程之外，但通过上游链接数据集表示且不得重复计算。 | `iso-14044-2006` |
| `boundary_route_condition` | 条件性操作 | 仅在记录表明操作服务于所代表产品时，纳入热处理、重熔、碱洗、湿式表面处理和燃料燃烧。 | `nickel-institute-11002`; `chen-et-al-2023` |
| `boundary_downstream` | 下游生命周期 | 除非研究明确扩展本 PCR 的前景系统，否则排除已声明门口之后的运输、下游制成品加工、使用、维护和生命周期末端。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | 进料接收与准备 | required | 始终纳入场址实际实施的接收、身份核验、称量、切割和准备。 | 前景进料调理 | 每 1,000 kg 合格参考产品 |
| `mechanical_forming` | 机械成形 | required | 纳入所代表产品实际使用的轧制、锻造、挤压、拉拔、矫直和相关产线操作。 | 前景形状转化 | 每 1,000 kg 合格参考产品 |
| `heat_treatment` | 热处理 | conditional | 当所代表产品实施退火、固溶处理、去应力或其他热循环时纳入。 | 前景性能调理 | 每 1,000 kg 合格参考产品 |
| `surface_finishing` | 表面清洗与精整 | conditional | 当场内实施湿式清洗、碱洗、酸洗、磨削、抛光、去除涂层或其他表面操作时纳入。 | 前景表面调理 | 每 1,000 kg 合格参考产品 |
| `product_release` | 检验与产品放行 | required | 始终纳入最终称量、合格检验和在已声明场址门口的放行。 | 前景产品放行 | 1,000 kg 合格参考产品 |

### 过程：进料接收与准备（`feed_preparation`）

#### 输入

##### 产品流

###### 未锻轧镍炉料（`in_unwrought_nickel`）

仅当所代表路线在场内熔化未锻轧镍或以未锻轧镍为起点时记录。应明确合金牌号、成分、原生或再生来源、形态、供应商及上游数据集；未确认完全匹配的 Tiangong 产品流 UUID。

- 选定流：未锻轧镍
- 流属性/单位：Mass / kg
- 数量规则：计量归属于产品批次的未锻轧镍净干投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_material_records`
- 来源：

###### 同类别镍前体（`in_semifinished_nickel_precursor`）

当直接轧制、拉拔或精整以购入的镍条、棒、型材或丝材前体为起点时，仅记录一次；应用递归投入规则并保留供应商产品状态证据。

- 选定流：镍条、镍棒、镍型材及镍丝 `ba8e5505-ab12-42bb-8dc3-4680a6914899`
- 流属性/单位：Mass / kg
- 数量规则：计量产品归属批次消耗的同类别前体净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_material_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分流回收的进料废料（`out_feed_scrap`）

仅记录单独称量并进入内部闭环或外部回收路线的镍切屑或不合格进料；披露其成分、污染状态、去向以及循环是否留在前景系统内。

- 选定流：镍废料 `3bf7374b-cece-4fd3-84af-c5252799fd38`
- 流属性/单位：Mass / kg
- 数量规则：计量离开进料准备过程的分流镍废料净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_material_records`
- 来源：

##### 废物流

##### 基本流

### 过程：机械成形（`mechanical_forming`）

#### 输入

##### 产品流

###### 成形产线电力（`in_forming_electricity`）

记录用于所代表批次的轧制、锻造、挤压、拉拔、矫直、泵、控制系统和可归属辅助设备的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：批次归属的计量电力，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_energy_records`
- 来源：

###### 热成形天然气（`in_forming_natural_gas`）

仅当直接燃烧加热服务于本过程的热成形或再加热时记录天然气；不得将上游天然气供应排放作为前景直接排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明参考条件下归属于产品的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分流回收的成形废料（`out_forming_scrap`）

记录单独回收并作为可回收产品流的、归属于产品的修边料、端部切料、断料和不合格镍金属。

- 选定流：镍废料 `3bf7374b-cece-4fd3-84af-c5252799fd38`
- 流属性/单位：Mass / kg
- 数量规则：计量成形过程产生的分流可回收镍废料净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_scrap_records`
- 来源：

##### 废物流

##### 基本流

###### 热成形产生的直接化石源二氧化碳（`out_forming_co2_fossil`）

仅计算成形炉燃烧化石天然气产生的烟气二氧化碳。排除上游电力和燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据产品归属的燃料碳记录计算直接化石源二氧化碳
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_energy_records`
- 来源：

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理电力（`in_heat_electricity`）

当电阻加热、感应加热、真空设备或辅助设备为已声明热处理循环供能时记录电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按循环或批次归属的计量电力，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_energy_records`
- 来源：

###### 热处理天然气（`in_heat_natural_gas`）

仅对服务于所代表产品的燃气退火或其他已声明热处理循环记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明参考条件下按循环或批次归属的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 热处理产生的直接化石源二氧化碳（`out_heat_co2_fossil`）

仅计算热处理过程中燃烧化石天然气产生的烟气二氧化碳。不得将电网排放或燃料上游排放报告为直接排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据产品归属的燃料碳记录计算直接化石源二氧化碳
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_energy_records`
- 来源：

### 过程：表面清洗与精整（`surface_finishing`）

#### 输入

##### 产品流

###### 表面处理工艺用水（`in_surface_water`）

仅在纳入湿式清洗、漂洗、淬冷或精整时记录所供应的工艺用水；应从新鲜供应投入中扣除经核验的循环水，但不得删除内部循环记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供应至产品归属操作的新鲜工艺用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 碱洗用氢氧化钠（`in_surface_sodium_hydroxide`）

仅在使用碱洗槽时记录氢氧化钠；应将氢氧化钠干质量与载体水及其他槽液成分分开报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据补加记录和经核验浓度计算氢氧化钠干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 表面精整电力（`in_surface_electricity`）

记录服务于所代表产品的泵、抛光、磨削、槽液控制、抽排和其他表面精整设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按操作归属的计量电力，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含镍表面处理废水（`out_nickel_wastewater`）

记录送往场内或场外处理的分流含水废物，并记录计量体积、镍浓度、其他已声明成分、处理去向及回用比例。未确认完全匹配的 Tiangong 废物流 UUID。

- 选定流：含镍表面处理废水
- 流属性/单位：Volume / m3
- 数量规则：计量离开表面处理操作的分流废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 基本流

### 过程：检验与产品放行（`product_release`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格镍条、镍棒、镍型材或镍丝（`out_reference_product`）

仅报告在已声明场址门口放行的合格产品净质量。固定数量用于建立参考流归一化；实测批次产量和不合格产品应保留在前景记录中。

- 选定流：镍条、镍棒、镍型材及镍丝 `ba8e5505-ab12-42bb-8dc3-4680a6914899`
- 流属性/单位：Mass / kg
- 数量规则：批次归一化后恰为 1,000 kg 合格参考产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程和计量表 | 应优先采用过程细分、批次记录、分表计量或其他经证明的因果关系，再考虑分配。 | `iso-14044-2006` |
| `allocation_internal_scrap` | 内部镍废料循环 | 将内部返回废料保留在前景系统内，并保留产生及再处理该废料所需的能源、材料损失和处理负荷；不得将内部循环报告为外部共产品。 | `iso-14044-2006` |
| `allocation_external_scrap` | 离开前景系统的镍废料 | 将单独称量的外部镍废料报告为输出，并披露其成分、去向和任何回收抵扣方法；不得自动采用避免原生镍的抵扣。 | `iso-14044-2006` |
| `allocation_residual` | 不可分离的共用负荷 | 若无法细分且无法确定物理因果关系，则应一致采用一种已声明的质量、能量、时间或经济分配基础，并披露理由、分母、受影响清单行及敏感性。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_material_records` | `feed_preparation` | 金属进料及准备废料 | 地磅、秤、接收、领用及废料转移记录 | 批次编号；供应商；材料形态；合金或牌号；成分证据；毛重、皮重和净重；水分或污染；去向 | 以材料台账和批次归属核对经校准秤的记录 | kg | 每次接收、领用和转移 | 报告期内全部代表性批次 | 服务于已声明产品的全部进料准备区域 | 汇总归属于产品的净投入和外部废料；内部返回量另行保留循环记录 | 校准证书；供应商证书；批次追溯；核对签字 |
| `cp_forming_energy_records` | `mechanical_forming` | 电力、天然气及直接燃烧碳 | 电表；燃气表；炉窑日志；燃料规范 | 计量表编号和读数；时间戳；产品批次；参考条件；燃料碳或经核验供应商成分；分配驱动因子 | 优先使用分表读数，并以生产日志核对共用负荷 | MJ; m3; kg CO2 | 每班或每批，按月核对 | 报告期内全部代表性批次 | 成形产线及可归属辅助设备 | 仅在方法有记录时扣除经核验基线；其余共用负荷采用一个已披露因果驱动因子分配 | 计量表校准；发票；炉窑日志；分配工作表 |
| `cp_forming_scrap_records` | `mechanical_forming` | 可回收成形废料 | 废料箱秤量及转移记录 | 批次；产品牌号；废料类型；毛重、皮重和净重；污染状态；内部或外部去向 | 对每批分流废料称量并与材料平衡核对 | kg | 每次转移 | 报告期内全部代表性批次 | 服务于已声明产品的成形产线 | 汇总外部净废料；内部返回量另行保留 | 秤校准；转移单；牌号分流核查 |
| `cp_heat_energy_records` | `heat_treatment` | 电力、天然气及直接燃烧碳 | 能源计量表；炉窑循环日志；燃料规范 | 循环编号；炉号；装炉质量；电力；燃气；参考条件；燃料碳或经核验成分；时间戳；产品归属 | 将能源读数和燃料碳计算链接至每个已声明热循环 | MJ; m3; kg CO2 | 每循环，按月核对 | 全部代表性热处理循环 | 服务于已声明产品的炉窑及可归属辅助设备 | 汇总归属于产品的循环，并记录共用炉窑分配 | 校准；循环日志；发票核对；计算工作表 |
| `cp_surface_treatment_records` | `surface_finishing` | 水、氢氧化钠、电力及含镍废水 | 计量表；槽液配制和补加日志；化学品证书；废水槽及实验室记录 | 操作编号；给水和废水读数；电力；试剂数量与浓度；镍浓度；回用体积；处理去向 | 核对计量表和批次记录；根据经核验浓度计算干试剂质量 | kg; MJ; m3 | 每批或每班，按月核对 | 全部代表性表面处理操作 | 所有纳入的湿式和机械精整区域 | 汇总归属于产品的记录；有记录的内部水循环仅扣除一次 | 校准；试剂证书；实验室报告；废物转移记录 |
| `cp_release_mass_records` | `product_release` | 合格参考产品 | 最终称量、检验及放行记录 | 产品形态；合金或牌号；尺寸；状态；表面质量；毛重、皮重和净重；合格及不合格质量；放行编号 | 称量放行产品并将检验结果链接至批次 | kg | 每个放行批次 | 报告期内全部代表性批次 | 已声明制造场址门口 | 汇总合格净质量，并将全部清单行归一化至 1,000 kg | 秤校准；检验证书；放行授权；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 产品归属的期间数量 × 1,000 / 合格产品净质量（kg） | 产品归属数量；合格产品净质量 | 每 1,000 kg 参考产品的数量 | |
| `calc_electricity_conversion` | 电力投入 | 电力（MJ）= 计量电力（kWh）× 3.6 | 计量 kWh | MJ 电力 | |
| `calc_dry_sodium_hydroxide` | 氢氧化钠投入 | 氢氧化钠干质量 = 溶液质量 × 经核验氢氧化钠质量分数 | 补加溶液质量；浓度证书或检验 | kg 干氢氧化钠 | |
| `calc_direct_fossil_co2` | 直接天然气燃烧 | 根据产品归属燃料数量、经核验碳含量和有记录的氧化依据计算化石源 CO2；不得加入燃料上游或电力排放 | 燃料数量；参考条件；碳含量；氧化依据 | kg 直接化石源 CO2 | |
| `calc_mass_reconciliation` | 含镍材料平衡 | 将外部含镍投入与合格产品、外部镍废料、已声明废水中的镍、其他单独识别输出及库存变化进行核对；调查无法解释的差异 | 外部进料；合格产品；外部废料；废水中的镍；其他输出；库存变化 | 有记录的镍材料平衡及无法解释的差异 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和金属投入 | 保留批次层面的产品形态、合金或牌号、成分依据、尺寸、状态、表面质量及供应商或放行身份。 | 供应商证书；内部规范；检验和放行记录 |
| `dq_measurement` | 质量、能源、燃气、水、试剂和废水记录 | 使用经校准或核验的仪器，保留原始读数和单位，并记录换算、参考条件、浓度依据及共用负荷分配。 | 校准记录；计量日志；发票核对；计算工作表 |
| `dq_temporal` | 报告期 | 覆盖全部代表性批次，并披露停机、试制批次、异常事件和任何外推。 | 生产日历；批次日志；异常登记 |
| `dq_completeness` | 过程清单 | 核对所有纳入过程和重要交换；零值需有不存在该交换的证据，条件行需有适用性判断。 | 经签字的完整性检查表；材料和能源核对 |
| `dq_geography_technology` | 前景及上游链接 | 声明场址地理范围和工艺技术，并采用在进料状态、电力结构、燃料供应、供水和试剂交付方面有代表性的上游数据集。 | 数据集元数据；供应商及公用工程记录；代表性评估 |
| `dq_uncertainty` | 缺失外部范围 | 保留前景值并定性解释不确定性，直至至少两个相互独立、边界兼容的原始来源支持外部范围。 | 未解决范围登记；审查记录；具有实质影响时的敏感性分析 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 核验归一化后输出 `out_reference_product` 恰为 1,000 kg，并包含全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validation_process_applicability` | 过程图 | 核验所有必需过程均有表示，且每个条件过程和条件交换均有记录的适用性判断。 | `nickel-institute-11002`; `arya-et-al-2021`; `chen-et-al-2023` |
| `validation_atomic_flows` | 清单 | 核验每行均为一个原子交换，具有一个方向、流类型、属性、单位、数量规则及路线条件；拒绝笼统流和重复计算。 | `iso-14044-2006` |
| `validation_uuid_identity` | 带 UUID 的流 | 对照公共状态 100 核验每个所存 UUID 的 baseName、流类型、分类、属性、单位组及产品状态；未解决行保持 UUID 为空。 | |
| `validation_energy_emissions` | 电力、燃气和二氧化碳 | 核验统一单位换算、燃气参考条件、直接输出中对上游排放的排除，以及燃料碳记录与直接化石源 CO2 的一致性。 | `iso-14044-2006` |
| `validation_material_balance` | 含镍投入和输出 | 审查有记录的镍材料核对，并在发布前解决对研究有实质影响的无法解释差异。 | `iso-14044-2006` |
| `validation_allocation` | 共用负荷及废料 | 核验细分优先、内部循环处理、外部废料去向、分配基础、分母和敏感性，且不得自动采用回收抵扣。 | `iso-14044-2006` |
| `validation_bilingual_alignment` | PCR 双语文本 | 核验英文和中文文件保留相同的 rule id、process id、row id、受控值、UUID、清单行数和 source id。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造场址门口的镍条、镍棒、镍型材或镍丝前景生产数据集 |
| downstream_use | 当产品形态、合金或牌号、路线、地理、时间和门口具有代表性时，可在下游产品系统中作为 secondary_dataset 或 background_dataset |
| allowed_use | 保持已声明参考流和系统边界的产品碳足迹、生命周期清单、产品系统及 lifecyclemodel 研究 |
| excluded_use | 未经额外建模，不得直接表示上游镍开采或精炼、不同镍产品形态、异种金属包覆产品、制成品、使用阶段或生命周期末端 |
| required_metadata | PCR id 和版本；产品形态；合金或牌号及成分依据；尺寸；状态；表面质量；路线；进料状态；再生进料占比；场址及地理；报告期；技术；门口；分配；上游数据集链接 |
| required_quality_disclosure | 数据覆盖；计量与校准；分配和共用负荷；内部及外部废料；水循环；燃气参考条件；直接排放计算；材料平衡差异；未解决 UUID；缺失外部范围；不确定性及代表性 |
| update_trigger | 产品身份、成分、进料状态、成形或热处理路线、表面处理、能源系统、回收实践、分配、场址地理、报告期、来源或 UUID 证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | CPC 41522 正式名称和分类层级 |
| `nickel-institute-11002` | 手册（`handbook`） | Nickel Institute，Nickel Alloys for Electronics，Publication 11002，https://nickelinstitute.org/media/1740/nickelalloysforelectronics_11002_.pdf（检索于 2026-09-04） | 镍合金棒材和丝材成形、退火及表面质量工序分解 |
| `arya-et-al-2021` | 文献（`literature`） | A. Arya et al.，Strength and microstructure evolution in nickel during large strain wire drawing，Acta Materialia 221 (2021) 117396，https://doi.org/10.1016/j.actamat.2021.117396 | 纯镍轧制、棒材与丝材拉拔及退火工序序列 |
| `chen-et-al-2023` | 文献（`literature`） | Y. Chen et al.，Study on High-Temperature Oxidation Behavior of Platinum-Clad Nickel Composite Wire，Metals 13 (2023) 1264，https://doi.org/10.3390/met13071264 | 镍棒及镍丝的铸造、轧制、拉拔、清洗和退火操作；仅用于工序分解 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://committee.iso.org/standard/38498.html（核验于 2026-09-04） | LCI、报告、审查、系统边界和分配框架 |
