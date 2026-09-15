---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.lead-plates-sheets-strip-and-foil-lead-powders-and-flakes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铅板、片、带、箔；铅粉及片状粉末

## 1. 范围与适用性

本 PCR 适用于一种已声明半成品铅形态的门到门制造：铅板、铅片、铅带、铅箔、金属铅粉或片状铅粉。前景边界始于精炼铅进入场址，止于已声明产品离开工厂大门。数据集仅选择实际适用的成形路线及一种产品输出形态。

本 PCR 不包括精炼铅之前的原生或再生铅生产、单独销售的铅合金、蓄电池、焊料、制成品、包装制造、出厂运输、使用及寿命终结处理。精炼铅、电力和天然气的上游供应保留为链接的产品输入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.lead-plates-sheets-strip-and-foil-lead-powders-and-flakes |
| classification_refs | CPC 3.0：41542，精确类别语境 |
| covered_products | 铅板、铅片、铅带、铅箔、元素态金属铅粉及片状铅粉，每个数据集声明一种具体市场形态 |
| excluded_products | 未经转换即销售的精炼铅；单独销售的铅合金；焊料；蓄电池；制成品；非铅金属产品 |
| representative_product | 工厂大门处一种已声明的铅板、片、带、箔、粉或片状粉末产品 1 kg |
| production_route | 精炼铅熔化和铸造，随后按实际情况进行扁平材成形、雾化制粉或片状粉末制造 |
| market_state | 可销售的半成品铅产品，并声明形态、尺寸或粒度规格、成分、表面状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 本 PCR 所覆盖且仅具有一种已声明形态的可销售半成品铅产品 |
| How much | 产品净质量 1 kg，不含包装 |
| How well | 符合生产商声明的成分、尺寸或粒度规格、表面状态和验收准则 |
| How long or cycle | 适用生产批次完成后的工厂大门处 |
| reference_flow_link | 与已声明形态一致的 `out_lead_plate`、`out_lead_sheet`、`out_lead_strip`、`out_lead_foil`、`out_lead_powder` 或 `out_lead_flakes` 中恰好一个 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铅板 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；铅成分；扁平材的厚度和宽度；铅粉或片状粉末的粒度分布；表面处理；再生含量方法；路线；场址；期间；净质量与包装边界 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 已声明产品输出和参考流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换均按 1 kg 可销售产品净质量归一化；不含包装，并单独记录不合格品或边角料。 |
| `energy_conversion` | 电力记录 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量电量；账单 kWh 乘以 3.6 换算为 MJ。 |
| `gas_volume_conditions` | 气态天然气记录 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告温度、压力及干湿基准；不得与其他燃料合并。 |
| `mass_balance` | 各过程 | Mass | kg | 在同一期间核算含铅输入、产品、废料或浮渣及实测铅排放，并披露差额。 |

## 5. 系统边界

前景包括精炼铅接收和内部搬运、适用的熔化铸造、适用的扁平材或颗粒成形、直接能源和燃料使用、受控烟气或颗粒物收集、剩余直接排放，以及离开过程的含铅废物或废料。若报告场址实施熔化和铸造，则该过程为必需；若数据集从外购铸造铅坯开始，应披露该起始条件并省略未发生的熔化交换。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入场址的精炼铅；未实施场内熔化时为外购铸造铅坯 |
| starting_condition_role | 首个前景转换过程的上游产品输入 |
| product_classification_scope | 仅一种已声明的 CPC 41542 市场形态；类别名称不得作为混合输出参考产品 |
| recursive_input_rule | 同类别内部回料保留为内部流；外购同类别铅料仅作为产品输入记录一次并链接供应商数据集，不在本 PCR 内递归展开 |
| upstream_dataset_requirement | 将精炼铅、外购铅坯、电力和天然气链接至具有代表性的上游数据集 |
| disclosure | 起始材料、成分、再生含量、路线、熔炉和成形技术、控制设施、场址、期间、产品形态及截断 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | 纳入从接收精炼铅或已披露铅坯至已声明工厂大门产品的受控操作；上游供应作为产品输入链接。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background` |
| `boundary_route_selection` | process_route | 仅纳入已声明产品形态实际发生的路线过程，并将其他条件路线标记为不适用。 | `eu-jrc-nfm-bref-2017`; `cn103128297a-lead-powder-atomization` |
| `boundary_controlled_releases` | direct_emissions_and_residues | 纳入离开系统的浮渣或废料及实际控制后的剩余直接铅排放；前景排放不含上游电力排放。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `melt_cast` | 精炼铅熔化与铸造 | required | 场内实施熔化或铸造时必需；否则披露外购铸造铅坯并将本过程标记为不适用 | 前景调理 | 转入成形过程的铸造铅 kg |
| `flat_forming` | 轧制与扁平材精整 | conditional | 已声明产品为铅板、片、带或箔时纳入 | 前景生产 | 可销售扁平材 kg |
| `powder_atomization` | 铅粉雾化与分级 | conditional | 已声明产品为元素态金属铅粉时纳入 | 前景生产 | 可销售铅粉 kg |
| `flake_making` | 片状铅粉制造与分级 | conditional | 已声明产品为元素态片状铅粉时纳入 | 前景生产 | 可销售片状铅粉 kg |

### 过程：精炼铅熔化与铸造（`melt_cast`）

#### 输入

##### 产品流

###### 精炼铅原料（`in_refined_lead`）

记录熔化前进入场址的精炼铅。

- 选定流：精炼铅 `fb2dea4d-384a-48ec-8736-55a664bc959b`
- 流属性/单位：Mass / kg
- 数量规则：进入熔炉或熔铅锅的精炼铅净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售的已声明产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-nfm-bref-2017`

###### 熔化用电（`in_melt_electricity`）

记录熔化、保温、铸造、抽风及分配至本过程控制设施的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：熔化与铸造过程的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从 `melt_cast` 转出的铸造铅
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-nfm-bref-2017`

###### 直接燃烧熔化天然气（`in_melt_natural_gas`）

仅在熔化或保温设备燃烧天然气时记录本流。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至直接燃烧熔化与保温的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从 `melt_cast` 转出的铸造铅
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含铅熔炼浮渣（`out_lead_dross`）

记录从熔融铅表面撇除并转移至场外或独立回收过程的浮渣。

- 选定流：含铅熔炼浮渣
- 流属性/单位：Mass / kg
- 数量规则：离开本过程的干基浮渣质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从 `melt_cast` 转出的铸造铅
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 熔化直接排放的化石二氧化碳（`out_melt_fossil_co2`）

记录分配至熔化过程的场内天然气燃烧直接化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：设施报告并分配至熔化过程的直接化石二氧化碳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从 `melt_cast` 转出的铸造铅
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 熔化过程向空气的剩余铅排放（`out_melt_lead_air`）

记录实际收集和治理后的直接剩余铅排放；仅在场址证据支持时使用更具体的空气区室。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至熔化与铸造的烟道测量值或与许可一致的质量平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从 `melt_cast` 转出的铸造铅
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-12-17-background`

### 过程：轧制与扁平材精整（`flat_forming`）

#### 输入

##### 产品流

###### 扁平材成形用电（`in_flat_electricity`）

记录轧制、退火、纵切、修边、精整及分配至本过程抽风设施的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：扁平材成形与精整的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售的已声明扁平材
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-12-17-background`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铅板产品（`out_lead_plate`）

仅当铅板为唯一已声明参考产品形态时使用本输出。

- 选定流：铅板
- 流属性/单位：Mass / kg
- 数量规则：可销售铅板净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

###### 铅片产品（`out_lead_sheet`）

仅当铅片为唯一已声明参考产品形态时使用本输出。

- 选定流：铅片
- 流属性/单位：Mass / kg
- 数量规则：可销售铅片净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

###### 铅带产品（`out_lead_strip`）

仅当铅带为唯一已声明参考产品形态时使用本输出。

- 选定流：铅带
- 流属性/单位：Mass / kg
- 数量规则：可销售铅带净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

###### 铅箔产品（`out_lead_foil`）

仅当铅箔为唯一已声明参考产品形态时使用本输出。

- 选定流：铅箔
- 流属性/单位：Mass / kg
- 数量规则：可销售铅箔净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 铅边角及切边废料（`out_lead_scrap`）

记录离开系统送往外部回收的洁净铅边角和切边料；内部回料保留为内部流。

- 选定流：铅边角及切边废料
- 流属性/单位：Mass / kg
- 数量规则：转移至场外的净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售的已声明扁平材
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass`
- 来源：`us-epa-ap42-12-17-background`

##### 基本流

###### 扁平材成形过程向空气的剩余铅排放（`out_flat_lead_air`）

记录实际控制后轧制、切割或精整向空气排放的剩余铅。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至扁平材成形的烟道测量值或与许可一致的质量平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售的已声明扁平材
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-12-17-background`

### 过程：铅粉雾化与分级（`powder_atomization`）

#### 输入

##### 产品流

###### 铅粉路线用电（`in_powder_electricity`）

记录压缩空气供应、雾化辅助设备、冷却、收集、筛分和抽风用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：铅粉路线的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售铅粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`cn103128297a-lead-powder-atomization`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铅粉产品（`out_lead_powder`）

仅记录符合已声明粒度规格的元素态金属铅粉。

- 选定流：铅粉
- 流属性/单位：Mass / kg
- 数量规则：可销售分级铅粉净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`; `cn103128297a-lead-powder-atomization`

##### 废物流

##### 基本流

###### 铅粉雾化过程向空气的剩余铅排放（`out_powder_lead_air`）

记录粉末收集和治理后向空气排放的剩余铅。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至雾化过程的烟道测量值或与许可一致的质量平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售铅粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`cn103128297a-lead-powder-atomization`; `us-epa-ap42-12-17-background`

### 过程：片状铅粉制造与分级（`flake_making`）

#### 输入

##### 产品流

###### 片状铅粉路线用电（`in_flake_electricity`）

记录片状粉末制造、分级、收集和抽风用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：片状铅粉路线的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售片状铅粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-12-17-background`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 片状铅粉产品（`out_lead_flakes`）

仅记录符合已声明颗粒规格的元素态片状铅粉。

- 选定流：片状铅粉
- 流属性/单位：Mass / kg
- 数量规则：可销售分级片状铅粉净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

###### 片状铅粉制造过程向空气的剩余铅排放（`out_flake_lead_air`）

记录收集和治理后向空气排放的剩余铅。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至片状粉末制造的烟道测量值或与许可一致的质量平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售片状铅粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-12-17-background`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | route_and_product_form | 优先细分计量表和批次，使交换仅归属于选定路线及产品形态。 |  |
| `allocation_internal_returns` | internal_lead_returns | 场内重熔边角料、粉末回料及返回本系统的收集铅作为内部流处理，不给予外部信用或负担。 |  |
| `allocation_external_scrap` | lead_scrap_leaving_system | 离开前景的含铅废料或浮渣单独记录，不在本清单内给予避免负担信用；后续分配或替代在本 PCR 外披露。 |  |
| `allocation_shared_services` | shared_energy_and_controls | 无法细分时采用运行时间、产量或废气量等有记录的因果驱动因素；以质量分配作为后备时必须说明理由。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `melt_cast` | 精炼铅原料 | 秤重、收货及投料记录 | 批号；毛重；皮重；投料质量；成分；再生含量声明 | 核对收货、投料和库存变化 | kg | 每批来料和生产批次 | 产品输出期间 | 报告场址 | 汇总净投料质量 | 校准、供应商证书、核对表 |
| `cp_process_energy` | 所有适用过程 | 电力或天然气 | 计量表、账单和运行记录 | 表头；表尾；单位；运行时间；分配驱动因素；气体条件 | 优先分表计量，否则按因果关系分配已核对的场址总表 | MJ 或 m3 | 每批或每月 | 产品输出期间 | 报告场址 | 扣除经证实的非过程用量后归一化 | 校准、账单、分配表 |
| `cp_product_mass` | 路线过程 | 可销售产品输出 | 成品秤和放行记录 | 批次；形态；规格；毛重；皮重；不合格质量 | 按产品形态分别测量净合格产量 | kg | 每批 | 输入期间 | 报告场址 | 仅汇总合格产品净质量 | 校准、放行证书、核对表 |
| `cp_residue_mass` | `melt_cast` 或 `flat_forming` | 浮渣或铅废料 | 容器秤和转移记录 | 废物类型；毛重；皮重；目的地；内部回料标记 | 称量各项外运残余物并排除内部回料 | kg | 每次转移 | 产品输出期间 | 报告场址 | 按残余物种类汇总净外运量 | 秤重及转移记录 |
| `cp_direct_emissions` | 所有适用过程 | 化石二氧化碳或向空气排放的铅 | 监测、烟道测试、许可报告、燃料平衡及运行记录 | 污染物；浓度；气量；时长；燃料；控制状态；运行时间 | 将污染物测量与排放源和过程运行匹配 | kg | 每次有效测试或报告间隔 | 代表性运行期 | 场址及排放点 | 计算同期污染物质量并归一化 | 实验室、监测 QA、许可、计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 所有清单行 | 批次或期间交换量除以一种已声明形态的可销售产品净质量。 | 交换量；合格产品质量 | 每 kg 参考产品的交换量 |  |
| `calc_electricity_mj` | 计量电力 | kWh 乘以 3.6，并保留原始记录。 | kWh 电力 | MJ 电力 |  |
| `calc_lead_balance` | 含铅流 | 比较原料、产品、外运残余物及排放中的铅；调查差额而非强制闭合。 | 各流质量及铅含量 | 已披露的铅平衡差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 前景记录 | 覆盖同一代表性期间，并识别启停和维护时段。 | 带日期的计量表、批次日志、异常清单 |
| `dq_technology` | 过程说明 | 识别熔化、能源、成形或雾化、收集、治理以及间歇或连续运行。 | 设备清单、流程图、运行记录 |
| `dq_product` | 参考产品 | 报告形态、成分、尺寸或粒度规格、表面处理、净质量基准及合格率。 | 产品规格和放行记录 |
| `dq_geography` | 上游链接和直接排放 | 声明场址地理、代表性上游供应及实际空气排放点。 | 供应商、公用事业及排放点记录 |
| `dq_completeness` | 清单 | 核算每项适用原子交换，并以运行证据记录零值或不适用判定。 | 完整性审查及铅质量平衡 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_form` | reference_flow | 恰好一个产品形态输出行为参考流，且等于 1 kg 可销售产品净质量。 |  |
| `validate_route` | process_inventory | 场内发生时才纳入 `melt_cast`，并恰好纳入一条适用成形路线；记录其他条件路线的省略。 |  |
| `validate_uuid_identity` | uuid_bearing_rows | 保留每个已审计 state-100 流的正式名称、流类型、属性、单位组和单位；未解决输出形态保持 UUID 为空。 |  |
| `validate_atomicity` | process_inventory | 不得合并电力和燃料、多个产品形态，或浮渣、废料和空气排放。 |  |
| `validate_mass_balance` | lead_bearing_flows | 完成同一期间的铅平衡，并调查和披露重大差额。 |  |
| `validate_ranges` | amount_ranges | 在两项独立原文来源具有兼容的边界、基准、状态、地理和技术之前，不得添加外部数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种半成品铅产品形态的门到门前景清单 |
| downstream_use | 带上游链接的天工 flow、process、dataset 和 lifecyclemodel 投影 |
| allowed_use | 产品形态、路线、场址、期间、成分和上游供应具有代表性时用于 LCA 建模 |
| excluded_use | 上游铅生产、铅合金、蓄电池、焊料、制成品、使用或寿命终结 |
| required_metadata | 形态与规格；输出质量；成分；再生含量方法；起始材料；路线；设备；治理；地理；期间；分配；截断；上游数据集 |
| required_quality_disclosure | 测量覆盖；计量质量；分配；质量平衡差额；缺口；替代；未解决 UUID；缺少外部范围 |
| update_trigger | 规格、成分、再生含量方法、设备、能源、路线、控制、供应商组合、场址或期间发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41542 身份及产品形态表述 |
| `china-costa-rica-fta-product-specific-origin-rules` | 官方指南（`official_guidance`） | 中华人民共和国海关总署，《中国—哥斯达黎加自由贸易协定产品特定原产地规则》HS 7804 中英对照条目，https://www.ks.gov.cn/kss/Upload_zwgk/ggxx2015122195763975384.pdf | 核验铅板、片、带、箔、粉及片状粉末的专业中文术语 |
| `eu-jrc-nfm-bref-2017` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属行业最佳可行技术参考文件》，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | 铅熔化、铸造、能源、浮渣、烟气收集和控制 |
| `us-epa-ap42-12-17-background` | 官方指南（`official_guidance`） | 美国环境保护署，《AP-42 第 12.17 节背景报告：其他铅制品》，https://www.epa.gov/sites/default/files/2020-11/documents/b12s17.pdf | 铅片过程分解及直接铅尘或排放数据采集 |
| `cn103128297a-lead-powder-atomization` | 文献（`literature`） | CN103128297A，《一种金属铅粉的生产方法》，https://patents.google.com/patent/CN103128297A/en | 铅粉路线的熔化、气压雾化、冷却、收集和筛分 |
