---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁板桩及焊接的钢铁角材、型材及异型材

## 1. 范围与适用性

本规则适用于出厂前已验收的钢铁板桩及焊接钢铁角材、型材和异型材。板桩可采用热轧或以热轧钢卷冷弯成形；焊接型材由钢板切割并焊接。每个数据集只声明一种成品与一条工艺路线，不将不同产品的清单混合。

施工安装、使用、拆除及报废处理不属于本前景边界；外购钢坯、钢卷和钢板的上游生产应通过单独背景数据集连接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel |
| classification_refs | CPC 3.0: 41252 |
| covered_products | 钢铁板桩；焊接的钢铁角材、型材和异型材 |
| excluded_products | 未焊接的普通热轧角型材；钢轨材料；焊接钢管；已安装的结构体 |
| representative_product | 已验收的热轧钢铁板桩 |
| production_route | 热轧板桩、冷弯板桩或钢板焊接型材；分别建模 |
| market_state | 已验收、按净质量计量、准备出厂 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 钢铁板桩或焊接钢铁角型材 |
| How much | 1 kg 已验收成品 |
| How well | 声明材质牌号、截面、长度与生产路线；符合订单验收条件 |
| How long or cycle | 单次出厂交付；不规定使用寿命 |
| reference_flow_link | hot_sheet_pile_out |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 热轧成品钢铁板桩 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 成品类型；热轧/冷弯/焊接路线；钢种；截面与长度；表面状态；验收净质量；生产地点和期间 |


参考流表以热轧板桩为代表。冷弯板桩或焊接型材的数据包应改用各自已验收成品行作为参考输出，保持每 1 kg 净质量的相同计量基准，并明确披露所用替代行。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | hot_sheet_pile_out, cold_sheet_pile_out, welded_section_out | Mass | kg | 通过校准的秤或可追溯称重记录确定同一批次已验收成品净质量；排除运输包装。 |
| reference_basis | all inventory rows | 质量或能量 | kg 或 MJ | 按相同路线的已验收成品净质量归一化到每 1 kg 参考流；电力和天然气保留各自的 MJ 属性，不将能量当成质量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢坯、热轧钢卷或钢板到达前景厂门 |
| starting_condition_role | 上游产品投入 |
| product_classification_scope | 已验收钢铁板桩或焊接钢铁角型材 |
| recursive_input_rule | 所有外购材料和能源向上游追溯；同一钢材上游负荷只计一次 |
| upstream_dataset_requirement | 钢坯、钢卷、钢板和能源的数据集应匹配钢种、生产路线、地区及时间 |
| disclosure | 披露制造与上游边界；报废回收信用单列，不并入出厂产品 |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | all routes | 从外购钢材进入前景厂门至已验收成品出厂，按路线记录所有直接材料、能源和废钢。 | worldsteel-sections-2023 |
| boundary_recycling | end_of_life | 报废回收信用单列且不与出厂阶段相加。 | worldsteel-sections-2023 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| hot_rolling | 板桩热轧 | conditional | 若所声明的成品是由钢坯热轧形成的板桩 | 前景制造 | 每 1 kg 已验收热轧板桩 |
| cold_forming | 板桩冷弯 | conditional | 若所声明的成品是由热轧钢卷冷弯形成的板桩 | 前景制造 | 每 1 kg 已验收冷弯板桩 |
| welded_fabrication | 钢板焊接型材 | conditional | 若所声明的成品是由钢板切割及焊接形成的角型材 | 前景制造 | 每 1 kg 已验收焊接型材 |


### 过程： 板桩热轧 (`hot_rolling`)

#### 输入

##### 产品流

###### 钢坯 (`hot_billet_in`)

仅在 `hot_rolling` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 钢坯 `7de70586-42d8-40bb-a687-e0e0c05722e4`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_hot_material 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_material`
- 来源: `worldsteel-sections-2023`

###### 电力 (`hot_electricity_in`)

仅在 `hot_rolling` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据 cp_hot_energy 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_energy`
- 来源: `worldsteel-sections-2023`

###### 天然气 (`hot_gas_in`)

仅在 `hot_rolling` 路线采集该原子交换；按同一批次已验收成品净质量归一化。 仅在燃气加热炉实际消耗天然气时纳入。

- 选定流: 天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位: 高位热值 / MJ
- 数量规则: 根据 cp_hot_energy 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_energy`
- 来源: `worldsteel-sections-2023`

#### 输出

##### 产品流

###### 热轧成品钢铁板桩 (`hot_sheet_pile_out`)

仅在 `hot_rolling` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 热轧成品钢铁板桩
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_output`
- 来源: `worldsteel-sections-2023`

##### 废物流

###### 废钢 (`hot_scrap_out`)

仅在 `hot_rolling` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 废钢 `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_hot_scrap 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_hot_scrap`
- 来源: `worldsteel-sections-2023`

### 过程： 板桩冷弯 (`cold_forming`)

#### 输入

##### 产品流

###### 热轧钢卷 (`cold_coil_in`)

仅在 `cold_forming` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_cold_material 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cold_material`
- 来源: `arcelormittal-sheet-piling-routes`

###### 电力 (`cold_electricity_in`)

仅在 `cold_forming` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据 cp_cold_energy 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cold_energy`
- 来源: `arcelormittal-sheet-piling-routes`

#### 输出

##### 产品流

###### 冷弯成品钢铁板桩 (`cold_sheet_pile_out`)

仅在 `cold_forming` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 冷弯成品钢铁板桩
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cold_output`
- 来源: `arcelormittal-sheet-piling-routes`

##### 废物流

###### 废钢 (`cold_scrap_out`)

仅在 `cold_forming` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 废钢 `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_cold_scrap 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cold_scrap`
- 来源: `arcelormittal-sheet-piling-routes`

### 过程： 钢板焊接型材 (`welded_fabrication`)

#### 输入

##### 产品流

###### 焊接型材用钢板 (`weld_plate_in`)

仅在 `welded_fabrication` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 焊接型材用钢板
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_weld_material 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_material`
- 来源: `sci-welded-sections-ss052a`

###### 药芯焊丝 (`weld_wire_in`)

仅在 `welded_fabrication` 路线采集该原子交换；按同一批次已验收成品净质量归一化。 仅在实际采用药芯焊丝时纳入；若采用其他填充材料，应在数据包中增设其具体原子流。

- 选定流: 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_weld_material 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_material`
- 来源: `sci-welded-sections-ss052a`

###### 电力 (`weld_electricity_in`)

仅在 `welded_fabrication` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据 cp_weld_energy 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_energy`
- 来源: `sci-welded-sections-ss052a`

#### 输出

##### 产品流

###### 成品焊接钢铁角材、型材或异型材 (`welded_section_out`)

仅在 `welded_fabrication` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 成品焊接钢铁角材、型材或异型材
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_output`
- 来源: `sci-welded-sections-ss052a`

##### 废物流

###### 废钢 (`weld_scrap_out`)

仅在 `welded_fabrication` 路线采集该原子交换；按同一批次已验收成品净质量归一化。

- 选定流: 废钢 `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- 流属性/单位: 质量 / kg
- 数量规则: 根据 cp_weld_scrap 采集并报告每 1 kg 参考流的实际交换量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_weld_scrap`
- 来源: `sci-welded-sections-ss052a`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | 优先按热轧、冷弯及焊接路线的实测计量拆分共同工序。 | ghg-product-standard-2011 |
| allocation_residual | shared_operations | 不可拆分的共同负荷应采用可验证的物理关系分配；记录所选关系、数据及敏感性。 | ghg-product-standard-2011 |
| scrap_accounting | steel_scrap | 记录外售或回用废钢质量及去向；内部回用不得与外部废钢投入或报废回收信用重复计数。 | worldsteel-sections-2023 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hot_material | hot_rolling | hot_billet_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_hot_energy | hot_rolling | hot_electricity_in, hot_gas_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg or MJ | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_hot_output | hot_rolling | hot_sheet_pile_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_hot_scrap | hot_rolling | hot_scrap_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_cold_material | cold_forming | cold_coil_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_cold_energy | cold_forming | cold_electricity_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg or MJ | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_cold_output | cold_forming | cold_sheet_pile_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_cold_scrap | cold_forming | cold_scrap_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_weld_material | welded_fabrication | weld_plate_in, weld_wire_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_weld_energy | welded_fabrication | weld_electricity_in | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg or MJ | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_weld_output | welded_fabrication | welded_section_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |
| cp_weld_scrap | welded_fabrication | weld_scrap_out | 批次生产记录 | 批次标识；交换量；已验收成品净质量；仪表或发票编号 | 读取批次计量表或经校准仪表，并与生产及验收记录核对。 | kg | 每批次 | 代表性生产期间 | 单一制造场址 | 每 1 kg 参考流 | 称重/仪表校准记录和质量平衡 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | 同一批次的可归属交换量除以已验收成品净质量；分别处理每条路线。 | 批次交换量；已验收成品净质量 | 每 1 kg 参考流的数量 |  |
| energy_conversion | hot_electricity_in, cold_electricity_in, weld_electricity_in | 如原始电表单位为 kWh，按 1 kWh = 3.6 MJ 转换后记录；不混用净热值和高位热值。 | 电表读数；单位 | MJ |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all routes | 声明最终产品的截面、材质和路线；路线与过程图及参考输出行一致。 | 订单与验收记录 |
| dq_mass | all routes | 以已验收净质量为分母；投入、成品及废钢质量应可核对。 | 校准记录与质量平衡 |
| dq_energy | all routes | 分别记录电力与天然气；声明电力单位及天然气高位热值基准。 | 仪表、发票及热值记录 |


## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_route | all routes | 每个数据集只能包含与所声明成品匹配的制造路线及参考输出行。 | un-cpc-3-2025 |
| validate_balance | all routes | 核对同批次钢材投入、成品及废钢；差异应解释，不得用未经证实的行业系数补齐。 |  |
| validate_uuid | all inventory rows | 未解析的板桩、焊接型材及钢板 UUID 必须在数据包发布前核实；不得使用宽泛钢材流代替。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集 |
| downstream_use | 为过程和生命周期模型提供声明路线的钢铁产品出厂前清单 |
| allowed_use | 相同产品形态、钢种、路线、地区和期间的适用数据 |
| excluded_use | 不得用于施工、使用或报废阶段；不得将热轧、冷弯、焊接路线混为一个平均值 |
| required_metadata | 产品形态；钢种；截面与长度；路线；地点；期间；参考输出行；净质量 |
| required_quality_disclosure | 未解析 UUID、缺失数据、分配及背景数据选择 |
| update_trigger | 工艺、钢种、计量方式或背景数据重大变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类识别 |
| worldsteel-sections-2023 | dataset | https://worldsteel.org/wp-content/uploads/Sections-Global-Construction.pdf | 热轧型材路线、声明单位、边界及回收分列 |
| sci-welded-sections-ss052a | extension_guidance | https://steelconstruction.info/images/9/9b/SS052a.pdf | 钢板切割与焊接型材过程划分 |
| arcelormittal-sheet-piling-routes | extension_guidance | https://sheetpiling.arcelormittal.com/sites/default/files/2024-05/AMCRPS_Flyer-EPD-LCA-Public-procurement-infrastructure-en-2022-web%5B1%5D.pdf | 热轧与冷弯板桩路线区分 |
| ghg-product-standard-2011 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配层级 |
