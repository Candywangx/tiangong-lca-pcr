---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-bars-rods-profiles-and-wire-zinc-plates-sheets-strip-and-foil
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 锌条、锌棒、锌型材及锌丝；锌板、锌薄板、锌带条及锌箔

## 1. 范围与适用性

本 PCR 适用于以条、棒、型材、线材、板、薄板、带或箔形态制造，并在加工设施门口报告的无涂层锌或锌合金半成品。范围涵盖锌质进料接收、路线特定的合金添加、适用时的熔化与合金化、铸造或等效坯料制备、轧制、挤压或拉拔、热态调节、纵切、切割，以及直至合格产品产出的过程废料收集。

除通过上游数据集表示外，本 PCR 不包括原生锌的采矿、选矿、冶炼与精炼；锌粉尘、粉末和片状粉；锌管、管道及管件；以锌废料为参考产品的系统；其他基材上的锌涂层；制成品；使用；安装；维护；所声明工厂门口之后的运输；以及报废阶段。包装材料不计入参考产品质量，也不属于核心边界；仅在单独声明的扩展研究边界中纳入。

前景数据包应选择一种产品形态和一条生产路线，不得把不同产品形态、合金配方或路线合并为未标识的平均值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-bars-rods-profiles-and-wire-zinc-plates-sheets-strip-and-foil |
| classification_refs | CPC 3.0：41545，精确映射语境 |
| covered_products | 以半成品金属供应的无涂层锌或锌合金条、棒、型材、线材、板、薄板、带和箔 |
| excluded_products | 未锻轧锌；锌粉尘、粉末和片状粉；锌管、管道及管件；锌废料；基材为其他材料的镀锌产品；锌制成品 |
| representative_product | 在加工设施门口、符合所声明规格的一种锌或锌合金半成品 |
| production_route | 熔化与铸造后采用所声明的轧制、挤压、拉拔、热态调节、纵切与切割组合；如已声明，也允许直接加工购入的中间坯料 |
| market_state | 具有所声明形态、合金牌号、尺寸、状态和表面状况的裸半成品金属；包装不计入参考质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足所声明形态、化学成分、尺寸、状态和表面状况要求的锌或锌合金半成品 |
| How much | 1 kg 合格产品净质量，不含包装 |
| How well | 满足所声明产品规格和质量验收准则，不合格产出不计入产品质量 |
| How long or cycle | 在加工设施门口交付的一个生产批次或报告期份额；不指定使用寿命 |
| reference_flow_link | `out_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | 锌条、锌棒、锌型材及锌丝，锌板、锌薄板、锌带条及锌箔 `e638d7e2-b3f5-4c1f-a5b2-da12d75d89d2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；锌或锌合金牌号及成分；包括厚度或直径在内的尺寸；回火或力学状态；表面状况；生产路线；设施地理位置；技术；再生含量核算方法；工厂门口定义；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格裸半成品的净干质量。包装、托盘、不合格产出和内部循环量不得计入参考数量。 |
| `zinc_feed_property` | 特高品位锌投入 | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg Zn | 同时记录接收毛重和供应商认证的锌质量分数；换算为 kg 锌含量，不得把合金元素计为锌。 |
| `fuel_energy_conversion` | 天然气投入 | Net calorific value | MJ | 保留气体计量体积和参比条件，并使用报告期内设施或供应商的低位热值换算为 MJ。 |
| `water_consumption` | 工艺用水投入 | Mass | kg | 记录跨越边界的净补充或消耗工艺用水；内部循环体积不得重复计数。说明体积转质量时采用的密度。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从购入锌质及合金化投入接收到所声明加工设施门口合格裸半成品为止的作业。 | `iza-zinc-sheet-environmental-profile` |
| `boundary_route_selection` | 过程纳入 | 仅纳入所声明产品路线实际采用的铸造、轧制、挤压、拉拔、热态调节、纵切与切割作业；披露购入的中间坯料及被省略的作业。 | `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire` |
| `boundary_upstream_inputs` | 购入产品和能源 | 原生锌生产、购入再生材料制备、电力、天然气、水和合金化材料生产应使用上游数据集建模，不纳入前景加工过程。 | `iza-zinc-sheet-environmental-profile` |
| `boundary_internal_recycling` | 内部锌回料 | 把内部废料循环作为前景系统内转移跟踪，不得同时将其计作外部投入和输出废物。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在设施接收点购入的未锻轧锌、验收的外来锌废料或购入的铸造/成形锌中间料，并声明其形态、成分、供应商和上游数据集 |
| starting_condition_role | 前景加工投入，其上游生产由供应商特定或代表性数据集表示 |
| product_classification_scope | 对应 CPC 3.0 代码 41545 的加工锌及锌合金半成品条、棒、型材、线材、板、薄板、带和箔 |
| recursive_input_rule | 当购入投入本身属于本产品类别时，将其一次性记录为具有自身上游数据集的购入同类别投入，不在接收过程中递归复制其加工清单 |
| upstream_dataset_requirement | 每项购入金属、合金化添加料、燃料、电力和水投入均使用在地理、技术、时间和成分方面具有代表性的上游数据集 |
| disclosure | 声明产品形态、合金、投入起始形态、购入中间料份额、再生含量核算、纳入路线步骤、内部循环、分配、工厂门口位置和报告期 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `melting_casting` | 进料制备、熔化、合金化和铸造 | conditional | 设施熔化锌质进料或生产铸造坯料时纳入；仅当购入中间坯料直接进入成形时省略 | 前景坯料制备 | 转移至成形的铸锌中间坯料 kg |
| `forming_finishing` | 轧制、挤压、拉拔和尺寸精整 | required | 选择并声明产品形态实际采用的作业；不得在未分别说明产品份额时平均无关路线 | 前景半成品制造 | 1 kg 合格参考产品净质量 |

### 过程：进料制备、熔化、合金化和铸造（`melting_casting`）

#### 输入

##### 产品流

###### 特高品位锌金属（`in_shg_zinc`）

当符合规格的未锻轧锌金属作为主要原生锌进料购入并熔化时，记录该投入。

- 选定流：特高品位（SHG）锌金属 `4719799f-8e90-4dce-83f6-55d932702228`
- 流属性/单位：Zinc content / kg Zn
- 数量规则：投配至所声明产品批次的验收进料中经供应商认证的锌含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`iza-zinc-sheet-environmental-profile`

###### 铜合金化添加料（`in_copper_alloying_addition`）

仅当产品配方要求铜时记录铜金属或所声明的含铜中间合金。所选交换应为一种已说明成分的供应商产品。

- 选定流：铜金属合金化添加料
- 流属性/单位：Mass / kg
- 数量规则：投配的验收含铜材料质量，并单独保留元素铜含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`iza-zinc-sheet-environmental-profile`

###### 钛合金化添加料（`in_titanium_alloying_addition`）

仅当产品配方要求钛时记录钛金属或所声明的含钛中间合金。所选交换应为一种已说明成分的供应商产品。

- 选定流：钛金属合金化添加料
- 流属性/单位：Mass / kg
- 数量规则：投配的验收含钛材料质量，并单独保留元素钛含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`iza-zinc-sheet-environmental-profile`

###### 铝合金化添加料（`in_aluminium_alloying_addition`）

仅当产品配方要求铝时记录铝金属或所声明的含铝中间合金。所选交换应为一种已说明成分的供应商产品。

- 选定流：铝金属合金化添加料
- 流属性/单位：Mass / kg
- 数量规则：投配的验收含铝材料质量，并单独保留元素铝含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`iza-zinc-sheet-environmental-profile`

###### 熔化与铸造用电力（`in_electricity_melting`）

熔化、保温、铸造及相关本地控制所用的交付电力，应根据过程电表或有充分依据的设施电表分配值记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至熔化与铸造的计量交付电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸锌中间坯料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`iza-zinc-sheet-environmental-profile`

###### 熔化与铸造用天然气（`in_natural_gas_melting`）

用于熔化、保温或铸造的气态天然气应与电力分开记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已说明参比条件下计量并分配至熔化与铸造的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸锌中间坯料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`iza-zinc-sheet-environmental-profile`

##### 废物流

###### 验收的再生锌废料投入（`in_recycled_zinc_scrap`）

作为废物进入熔化过程的外购锌废料应与内部循环回料分开记录。

- 选定流：锌废料 `b1629e09-83ea-4027-aab4-3a02406fac02`
- 流属性/单位：Mass / kg
- 数量规则：称量并投配至批次的验收外来锌废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`iza-zinc-sheet-environmental-profile`

##### 基本流

本过程不规定通用基本流输入。其他场址特定基本流跨越前景边界时，应作为单独交换记录。

#### 输出

##### 产品流

###### 内部铸锌中间坯料（`out_cast_zinc_stock`）

转移至成形的铸造板坯、坯料、杆坯或带坯属于内部产品流，其形态和合金应与下游路线一致。

- 选定流：铸锌中间坯料
- 流属性/单位：Mass / kg
- 数量规则：称量或生产系统记录的、放行至成形的铸造坯料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 铸锌中间坯料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_stock_transfer`
- 来源：`iza-zinc-sheet-environmental-profile`; `unido-techmart-91-zinc-wire`

##### 废物流

###### 熔化锌浮渣（`out_zinc_dross`）

从熔化或保温设备清除的含锌浮渣应作为单独废物输出记录，不得与清洁边角料合并。

- 选定流：熔化锌浮渣
- 流属性/单位：Mass / kg
- 数量规则：称量离开本过程的锌浮渣，并记录水分和锌含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 铸锌中间坯料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iza-zinc-sheet-environmental-profile`

##### 基本流

###### 现场天然气燃烧产生的化石源二氧化碳（`out_fossil_carbon_dioxide`）

仅记录在前景边界内燃烧燃料产生的直接化石源二氧化碳；本行不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：设施记录并分配至熔化与铸造的直接化石源二氧化碳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸锌中间坯料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`iza-zinc-sheet-environmental-profile`

### 过程：轧制、挤压、拉拔和尺寸精整（`forming_finishing`）

#### 输入

##### 产品流

###### 内部铸锌中间坯料（`in_cast_zinc_stock`）

`melting_casting` 过程产生的内部铸造坯料在进入所声明轧制、挤压或拉拔路线时记录一次。如使用购入中间坯料，则在此记录并标明为购入。

- 选定流：铸锌中间坯料
- 流属性/单位：Mass / kg
- 数量规则：称量或生产系统记录的、进入成形的坯料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_stock_transfer`
- 来源：`iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire`

###### 成形与精整用电力（`in_electricity_forming`）

所选轧制、挤压、拉拔、冷却、纵切和切割设备使用的交付电力，应根据路线特定电表或有充分依据的分配电表值记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量并分配至所声明成形与精整路线的交付电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire`

###### 热态调节用天然气（`in_natural_gas_forming`）

用于路线特定坯料加热或热态调节的气态天然气，在成形边界内燃烧时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已说明参比条件下计量并分配至所声明成形路线的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`nist-circular-395-zinc-and-alloys`

###### 工艺补充水（`in_process_water`）

路线特定冷却或调节过程消耗水时，记录工艺补充水。内部循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越成形过程边界的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`iza-zinc-sheet-environmental-profile`

##### 废物流

本过程不规定通用废物输入。任何作为废物进入、并在外部接受处理的材料均应作为单独且明确识别的交换记录。

##### 基本流

本过程不规定通用基本流输入。其他场址特定基本流跨越前景边界时，应作为单独交换记录。

#### 输出

##### 产品流

###### 合格锌半成品（`out_reference_product`）

净验收产出是完成所声明成形与精整作业后的选定参考产品。

- 选定流：锌条、锌棒、锌型材及锌丝，锌板、锌薄板、锌带条及锌箔 `e638d7e2-b3f5-4c1f-a5b2-da12d75d89d2`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格裸半成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 锌边角料与切边废料（`out_zinc_scrap`）

离开前景系统的清洁锌或锌合金边角料及切边废料，应与锌浮渣和内部循环回料分开记录。

- 选定流：锌废料 `b1629e09-83ea-4027-aab4-3a02406fac02`
- 流属性/单位：Mass / kg
- 数量规则：称量输出设施的锌废料，并扣除内部循环回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iza-zinc-sheet-environmental-profile`

##### 基本流

###### 成形阶段天然气燃烧产生的化石源二氧化碳（`out_fossil_carbon_dioxide_forming`）

成形过程使用天然气加热坯料或进行热态调节时，记录直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：设施记录并分配至成形与热态调节的直接化石源二氧化碳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`nist-circular-395-zinc-and-alloys`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 多种产品形态或路线 | 优先按生产线、批次、路线和产品形态细分。不得把轧制、挤压和拉拔合并为未标识的平均值。 |  |
| `allocation_internal_scrap` | 内部循环锌 | 把内部回料作为前景系统内转移：在锌平衡中保留其质量，但不再分配新的上游锌负荷，也不赋予输出废物抵扣。 |  |
| `allocation_exported_scrap` | 离开边界的锌废料和浮渣 | 分别报告实物产出和去向。仅当所声明 LCA 方法要求时应用替代、避免负荷或报废抵扣，并披露方法、质量损失和被替代产品。 |  |
| `allocation_shared_energy` | 共用计量与服务 | 尽可能使用分表计量分配共用电力、天然气和水；否则使用设备运行时间、产量与额定负荷等有文件依据的因果驱动因素，并检验重要性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `melting_casting` | 购入 SHG 锌、外来锌废料和合金化添加料 | 地磅、批次秤、收货、配方和证书记录 | 材料身份；供应商；接收质量；验收质量；投料质量；锌、铜、钛和铝质量分数；水分；污染物；批次 id | 将验收收货和批次投料与清单变动及供应商证书核对 | kg；质量分数 | 每次收货和每个批次 | 包括期初期末库存的完整报告期 | 设施边界内全部锌半成品生产线 | 按材料和产品批次汇总验收量与投料量；计算元素含量但不合并供应商产品 | 秤校准；成分证书；收货记录；库存核对 |
| `cp_energy_meters` | `melting_casting`; `forming_finishing` | 电力和天然气 | 结算表、过程分表和燃料发票 | 仪表 id；期初期末读数；区间用量；气体参比条件；低位热值；过程归属；运行时间 | 优先使用过程分表；与设施发票核对，并依据因果关系分配剩余共用量 | MJ；m3 | 连续或每月 | 完整报告期 | 全部纳入设备及共用服务 | 按过程和路线汇总；天然气单独换算为 MJ；核对后归一化 | 仪表校准；发票；分配工作簿；能源平衡 |
| `cp_internal_stock_transfer` | `melting_casting`; `forming_finishing` | 内部铸造坯料输出和输入 | 生产执行系统和经校准秤记录 | 批次 id；合金；坯料形态；转移质量；时间戳；来源过程；接收过程；期初期末在制品 | 将每项放行的铸造坯料记录与成形接收记录配对，并核对在制品变化 | kg | 每次转移 | 完整报告期 | 全部纳入的铸造与成形生产线 | 按批次汇总匹配转移；输出与输入之差应等于有记录的在制品变化和实测损失 | 秤校准；批次谱系；在制品核对 |
| `cp_waste_records` | `melting_casting`; `forming_finishing` | 锌浮渣和输出锌废料 | 经校准秤、废物联单和成分检测 | 废物身份；批次；毛重与皮重；净重；水分；锌含量；污染物；去向；内部或外部处置 | 称量每项输出物流，并将浮渣、清洁废料和内部回料分开 | kg | 每次转移 | 完整报告期 | 全部纳入生产线和储存点 | 按废物身份、合金和去向汇总净干质量；输出废物不包括内部回料 | 秤校准；联单；实验室结果；接收方记录 |
| `cp_direct_emissions` | `melting_casting`; `forming_finishing` | 直接化石源二氧化碳 | 由监测或获认可燃料碳平衡支持的设施排放台账 | 排放源 id；燃料用量；碳含量或排放因子；氧化基础；实测排放；方法；期间 | 使用受监管的设施方法或直接监测，仅把现场燃烧排放分配至适用前景过程 | kg CO2 | 每月或法规报告间隔 | 完整报告期 | 全部纳入的现场燃烧源 | 按排放源汇总直接化石源 CO2，并按因果关系分配共用源 | 监测 QA 记录；方法批准；燃料核对 |
| `cp_process_water` | `forming_finishing` | 工艺补充水 | 经校准补充水表和水平衡 | 仪表 id；取水；排放；循环；排污；存量变化；密度；路线归属 | 计量跨越过程边界的水，并核对循环系统水平衡 | kg；m3 | 连续或每月 | 完整报告期 | 纳入的冷却与调节系统 | 净消耗等于取水减去返还排水并按存量变化调整；内部循环不得求和 | 仪表校准；水平衡；排放记录 |
| `cp_finished_product` | `forming_finishing` | 合格参考产品 | 经校准产品秤、生产及质量放行记录 | 产品 id；形态；合金；尺寸；状态；表面；毛重；包装皮重；不合格质量；验收净质量；批次 id | 称量验收裸产品，或扣除经验证包装皮重，并与质量放行记录核对 | kg | 每个批次 | 完整报告期 | 全部纳入精整生产线 | 按所声明产品汇总验收净产品质量；全部清单归一化到 1 kg | 秤校准；质量放行；皮重检查；生产核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 核对后的报告期数量 / 合格产品净质量 | 过程或设施数量；来自 `cp_finished_product` 的验收产品净质量 | 每 1 kg 参考产品的数量 |  |
| `calc_zinc_content` | `in_shg_zinc` | 锌含量 = 验收干进料质量 × 供应商认证的锌质量分数 | 验收质量；水分；锌质量分数 | 锌投入 kg Zn |  |
| `calc_natural_gas_energy` | 天然气行 | 能量 = 校正后的气体体积 × 报告期低位热值；保留原始 m3 记录和参比条件 | 计量气体体积；压力与温度基础；低位热值 | 按过程记录的天然气 MJ 和 m3 |  |
| `calc_zinc_mass_balance` | 含锌投入与产出 | 期初库存 + 购入进料中的锌 + 验收外来废料中的锌 = 合格产品中的锌 + 输出废料中的锌 + 浮渣中的锌 + 期末库存 + 已量化损失 | 进料、产品、废物和库存中的锌含量 | 核对后的锌平衡及未解释差异 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明一种产品形态、合金牌号与成分、尺寸、状态、表面状况和适用规格；不合格质量与包装质量不得计入 | 产品规格、证书和质量放行记录 |
| `dq_route_identity` | 过程图 | 识别进料是在现场熔化还是以中间坯料购入，并识别每项纳入的轧制、挤压、拉拔、热态调节、纵切和切割步骤 | 工艺流程图、批次谱系和设备清单 |
| `dq_mass_balance` | 含锌物流 | 核对含锌投入、产出、内部回料和在制品；调查并披露重大未解释差异 | `calc_zinc_mass_balance`、库存记录和核对表 |
| `dq_energy_water` | 电力、天然气和水 | 将过程数量与设施总量核对，并记录仪表覆盖率、共用服务分配、气体参比条件、热值和水循环处理 | 仪表台账、发票、校准和分配工作簿 |
| `dq_temporal_geography` | 全部前景记录 | 使用一个完整且有代表性的报告期，识别异常停机或生产活动，并说明设施地理位置和技术 | 报告期台账和代表性审查 |
| `dq_completeness` | 全部边界交换 | 将采购、生产、废物、排放和排水台账与清单比较；披露排除项和已量化截断 | 台账与清单核对表及截断声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认参考输出恰为 1 kg 合格裸产品净质量，并且所有必需限定信息均已提供。 | `un-cpc-3-0-structure-2025` |
| `validate_route_boundary` | 过程图与清单 | 确认纳入过程与所声明形态和路线一致，已披露购入中间料，且未将被省略的现场作业隐藏在上游数据集中。 | `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire` |
| `validate_atomic_flows` | 过程清单 | 确认每行都是一个实物、化学品、废物、能源或基本流交换，且内部转移、浮渣和清洁废料未合并。 |  |
| `validate_zinc_balance` | 含锌物流 | 执行 `calc_zinc_mass_balance`；超过设施已记录计量不确定度的未解释差异必须纠正或明确披露。 |  |
| `validate_energy_emissions` | 能源与直接排放 | 将电力和天然气与仪表及发票核对；确保直接化石源二氧化碳仅包括现场燃烧，不包括上游电力排放。 | `iza-zinc-sheet-environmental-profile` |
| `validate_allocation` | 共用作业与输出材料 | 确认已优先尝试细分，并且每项剩余因果分配或外部再生抵扣均有文件记录且可复现。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种所声明锌或锌合金半成品及路线的前景加工数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要与成分、技术和地理位置具有代表性的锌半成品工厂门口数据集的产品 LCA 和生命周期模型 |
| excluded_use | 在未提供限定信息时替代不同产品形态、合金或路线；表示未锻轧锌生产、锌粉、涂层基材、制成品、使用或报废；未经完整研究审查用于比较性声明 |
| required_metadata | PCR id 与版本；产品形态；合金及成分；尺寸；状态；表面状况；规格；进料起始形态；路线；设施地理位置与技术；报告期；再生含量方法；上游数据集；分配；截断；数据质量 |
| required_quality_disclosure | 仪表与秤覆盖率；供应商证书覆盖率；路线细分；共用服务分配；锌质量平衡结果；内部与外部再生处理；时间、地理和技术代表性；未解决身份；排除项与不确定度 |
| update_trigger | 产品形态或合金、进料起始状态、炉型或成形路线、设施或电网地理位置、燃料、再生含量方法、分配方法、上游数据集、报告期发生变化，或锌收率、能源、水、废物或直接排放发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | dataset | 联合国统计司，《产品总分类 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41545 正式分类身份及其与相邻锌产品的区分 |
| `iza-zinc-sheet-environmental-profile` | literature | 国际锌协会，*Zinc Sheet Environmental Profile*。https://beta.zinc.org/wp-content/uploads/sites/30/2015/04/pdf_Zinc_Sheet_environ_profile.pdf | 锌板工厂门口边界；熔化、合金化、铸造、轧制和纵切顺序；电力、天然气、合金化添加料和废料的相关性 |
| `nist-circular-395-zinc-and-alloys` | official_guidance | 美国国家标准局，*Circular No. 395: Zinc and Its Alloys*。https://www.govinfo.gov/content/pkg/GOVPUB-C13-0c7e0740debaa74ea7b39bf1d7dfed55/pdf/GOVPUB-C13-0c7e0740debaa74ea7b39bf1d7dfed55.pdf | 包括轧制、挤压和拉拔在内的锌加工路线；锌板与锌带成形差异 |
| `unido-techmart-91-zinc-wire` | official_guidance | 联合国工业发展组织，*TECHMART 91: A Catalogue of Technology Opportunities for Manufacturing Industry*。https://downloads.unido.org/ot/48/20/4820628/15001-20000_19293.pdf | 从液态锌经连续铸造和拉拔生产锌丝的路线 |
