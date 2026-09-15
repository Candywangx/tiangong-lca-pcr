---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-not-further-worked-than-hot-rolled-hot-drawn-or-extruded-of-648d999d
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或非合金钢制角材、型材和异型材，除热轧、热拉拔或热挤压外未经进一步加工

## 1. 范围与适用性

本 PCR 适用于以热轧、热拉拔或热挤压作为最后一道成形工序，并在生产厂门口交付的铁或非合金钢角材、型材和异型材。所涵盖产品为角钢、槽钢、工字钢、H 型钢、T 型钢等实心长材。前景边界始于适合所选工艺的非合金钢方坯、矩形坯或异形坯进入型钢生产场址，止于型钢冷却、矫直、定尺切割并具备出厂条件。

前景边界不包括半成品钢投入的炼铁、炼钢和铸造；冷成形或冷加工；焊接；作为商品表面处理的酸洗涂油；金属或有机涂层；制作、钻孔、机加工或装配；除非研究明确纳入的包装；出厂运输；安装；使用和寿命终止。合金钢型材、焊接型材、作为独立产品分类的板桩、空心型材、条杆、钢轨和平板轧材不属于本类别。半成品钢投入的上游负荷仍须通过供应商特定或具代表性的上游数据集连接。

每个产品批次必须声明且仅声明一条热成形路线。未发生的路线特定过程标记为 `not_applicable`，不得与所选路线静默合并。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-not-further-worked-than-hot-rolled-hot-drawn-or-extruded-of-648d999d |
| classification_refs | CPC 3.0: 41251（精确分类语境；映射接受由独立治理流程决定） |
| covered_products | 铁或非合金钢制实心角材、槽钢、工字钢、H 型钢、T 型钢及其他开口或实心型材，除热轧、热拉拔或热挤压外未经进一步加工 |
| excluded_products | 冷成形、冷加工或其他进一步加工型材；合金钢型材；焊接型材；作为独立产品的板桩；空心型材；钢轨；条杆；涂层、制作或组装产品 |
| representative_product | 具有已声明牌号和截面几何形状、按定尺交付的非合金结构钢型材 |
| production_route | 热轧、热拉拔或热挤压三者之一；包括共同的再加热和最终冷却/切割 |
| market_state | 生产厂门口交付的无涂层、未焊接、未制作实心型材，商业长度、表面状态和热处理状态均已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产厂门口提供铁或非合金钢制角材、型材或异型材 |
| How much | 净合格型材产品 1,000 kg |
| How well | 符合已声明的钢牌号、截面几何形状、尺寸公差、表面状态和力学性能规范 |
| How long or cycle | 一个生产批次经一条已声明热成形路线加工至出厂放行 |
| reference_flow_link | `angles_shapes_sections_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 净合格产品 1,000 kg |
| 参考产品流 | 铁或非合金钢制角材、型材和异型材，除热轧、热拉拔或热挤压外未经进一步加工 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢牌号和标准；截面几何形状和尺寸；热成形路线；坯料形式和入炉温度；热处理状态；表面状态；商业长度；生产场址和地理范围；生产期间；分配和内部循环处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

精确参考产品的 Tiangong UUID 尚未解决。不得以通用钢材、条杆、合金钢、焊接型材或消费组合代理流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有含钢投入和产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的衡器确定质量；若采用长度乘以型钢单位质量计算，应以批次称重验证，并将净合格产出归一化为 1,000 kg。 |
| `electricity_energy` | 纳入前景过程所用电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始单位，按 1 kWh = 3.6 MJ 换算；外购、自产和外送电力不得混合。 |
| `fuel_gas_volume` | 再加热所用气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度、压力及干湿基准；供应商结算体积仅可按有记录的供应商换算关系转换。 |
| `route_and_hot_charge` | 路线特定清单和再加热 | 已声明路线和坯料温度 | 路线代码和 °C | 仅记录一条热成形路线及坯料入炉温度，不得把冷装炉再加热数值用于热装批次。 |
| `water_boundary` | 除鳞和冷却用水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 净补充水与内部循环水分开报告；同一循环水量不得作为投入重复计数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 位于型钢生产场址的铁或非合金钢方坯、矩形坯或异形坯，并声明质量、牌号、几何形状、供应商、炼钢/铸造数据集、入炉温度和表面状态 |
| starting_condition_role | 门到门型钢成形前景的上游产品投入 |
| product_classification_scope | 最后成形工序为热轧、热拉拔或热挤压的铁或非合金钢制实心角材、型材和异型材 |
| recursive_input_rule | 若投入已经属于本产品类别，则作为单独识别的上游产品数据集记录，并从本前景中排除其既往型钢成形负荷，以避免递归 |
| upstream_dataset_requirement | 可得时将每项半成品钢投入连接到供应商特定原始数据；否则使用并披露在地域和技术上具代表性的炼钢及铸造数据集 |
| disclosure | 声明路线、坯料形式和入炉温度、加热技术和燃料、除鳞方法、冷却方法、截面几何形状、成材率、残余物去向、内部循环、分配及全部排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_included_operations` | 门到门前景系统 | 纳入坯料接收、再加热、适用的除鳞、且仅一条已声明的热成形路线、冷却、矫直、切割，以及所产生废钢、氧化铁皮、污泥和捕集粉尘的管理。 | `ec-jrc-fmp-bref-2022`; `cn-nbs-industry-classification-2017` |
| `boundary_upstream_steel` | 半成品钢投入 | 炼铁、炼钢和铸造处于前景之外，但所接收半成品必须连接到牌号、路线、地域和交付状态相容的上游数据集。 | `worldsteel-lci-methodology-2017` |
| `boundary_excluded_further_work` | 下游作业 | 排除冷成形/冷加工、焊接、作为商品表面处理的酸洗涂油、涂层、制作、配送、使用和寿命终止；若更广研究纳入这些过程，须在本 PCR 前景之外明确标记。 | `unsd-cpc-3-0-2025`; `ec-jrc-fmp-bref-2022` |
| `boundary_internal_recirculation` | 水和回收物料 | 内部循环水和物料作为内部转移用于工程核算，产品清单仅记录净边界交换，并披露计算和回收去向。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt` | 半成品钢接收 | required | 始终纳入 | 确立合格投入身份和质量 | 每 1,000 kg 净合格产出的半成品钢接收量 |
| `feedstock_reheating` | 坯料再加热 | required | 始终纳入；必须声明热装状态和补充加热 | 使坯料达到成形温度 | 每 1,000 kg 净合格产出的燃料和电力 |
| `descaling` | 除鳞和含鳞水处理 | conditional | 前景内采用水力、机械或其他除鳞时纳入 | 成形前或成形中去除附着氧化铁皮 | 每 1,000 kg 净合格产出的净用水、电力和残余物 |
| `hot_rolling` | 型钢热轧 | conditional | 仅在已声明路线 = hot rolling 时纳入 | 在型钢轧机粗轧、中轧和精轧变形 | 每 1,000 kg 净合格产出的电力、润滑剂和轧制残余物 |
| `hot_drawing` | 型钢热拉拔 | conditional | 仅在已声明路线 = hot drawing 时纳入 | 通过已声明模具组进行热拉拔 | 每 1,000 kg 净合格产出的电力、润滑剂和路线残余物 |
| `hot_extrusion` | 型钢热挤压 | conditional | 仅在已声明路线 = hot extrusion 时纳入 | 通过已声明模具和压力机进行热挤压 | 每 1,000 kg 净合格产出的电力、润滑剂和路线残余物 |
| `final_cooling_cutting` | 冷却、矫直和最终切割 | required | 始终纳入；水冷仅在实际发生时纳入 | 生产商业定尺的合格型钢 | 净合格产出 1,000 kg |

### 过程：半成品钢接收（`feedstock_receipt`）

#### 输入

##### 产品流

###### 合格的半成品非合金钢（`semi_finished_non_alloy_steel_input`）

记录进入本前景场址边界的实物半成品钢。当牌号、坯料几何形状或供应商上游负荷存在实质差异时应分别记录。

- 选定流：非合金钢方坯、矩形坯或异形坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给已声明产品批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：坯料再加热（`feedstock_reheating`）

#### 输入

##### 产品流

###### 再加热炉供应的气态天然气（`reheating_natural_gas_input`）

在已声明再加热设备消耗天然气时，记录跨越炉窑供应边界的天然气，声明体积参考条件，并排除上游炼钢所用天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给合格再加热生产活动的实测天然气体积；未使用天然气时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热供应的交流电（`reheating_electricity_input`）

记录电加热、感应加热和炉窑辅机在已声明电表边界的用电。场址限定信息明确前，不选择特定电压市场 UUID。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：合格再加热生产活动的分表计量或有记录分配电量；仅在确实不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

#### 输出

##### 基本流

###### 再加热产生的化石源二氧化碳（`reheating_fossil_co2_air`）

使用烟气测量或可追溯至炉窑燃料清单的设施排放记录，记录纳入再加热燃料燃烧的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格再加热生产活动的实测或设施核算直接化石源 CO2；不使用化石燃料时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热氮氧化物排放到空气（`reheating_nitrogen_oxides_air`）

记录监测到的氮氧化物基本流，并声明物种约定、基准氧含量、干湿基准和治理边界。

- 选定流：氮氧化物排放到空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格再加热生产活动的烟气监测结果；仅在确实不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热一氧化碳排放到空气（`reheating_carbon_monoxide_air`）

记录监测到的一氧化碳基本流，并声明基准氧含量、干湿基准和治理边界。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格再加热生产活动的烟气监测结果；仅在确实不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions_records`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：除鳞和含鳞水处理（`descaling`）

#### 输入

##### 产品流

###### 除鳞工艺水（`descaling_process_water_input`）

仅记录高压水或其他湿法除鳞中跨越前景边界的净补充工艺水，内部循环水不作为投入重复计数。

- 选定流：除鳞工艺水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给合格除鳞活动的实测净补充水；干法路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 除鳞供应的交流电（`descaling_electricity_input`）

记录除鳞泵及纳入含鳞水处理在已声明分表边界的用电。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配给合格除鳞活动的分表电量或有记录分配电量；过程不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

#### 输出

##### 废物流

###### 单独收集的氧化铁皮（`descaling_mill_scale_output`）

记录从钢材表面去除并在除鳞或水处理中收集的氧化铁皮，声明含油量、含水率、内部返回、外部回收或处置去向。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明含水基准的实测湿质量和干质量，并分配给合格生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 含鳞水处理产生的含油铁质污泥（`descaling_oily_sludge_output`）

当除鳞水处理产生含油铁质污泥时，将其作为不同于干氧化铁皮的独立物流记录，并声明油、水和固体含量。

- 选定流：除鳞水处理含油铁质污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格生产的实测湿质量和有记录组成；不产生时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：型钢热轧（`hot_rolling`）

#### 输入

##### 产品流

###### 型钢轧制供应的交流电（`hot_rolling_electricity_input`）

记录粗轧、中轧、精轧及直接生产线驱动设备在已声明电表边界的用电。供应商、地域、电压、技术和交付边界均为必需限定信息。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配给合格热轧生产活动的分表电量；其他两条路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制润滑油（`hot_rolling_lubricant_oil_input`）

记录跨越前景边界并由型钢轧制线消耗的供应商声明轧制润滑油质量。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热轧活动的采购与领退料平衡；不消耗时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：`ec-jrc-fmp-bref-2022`

#### 输出

##### 废物流

###### 热轧清洁钢切头（`hot_rolling_crop_end_scrap_output`）

将切头和轧制废品作为独立的非合金废钢物流记录，声明内部回炉、外部回收或处置，不得采用未披露的避免负荷抵扣。

- 选定流：非合金钢热轧切头废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热轧活动的实测废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### 基本流

###### 型钢轧制颗粒物排放（`hot_rolling_particulate_air`）

记录纳入轧制和搬运源的颗粒物基本流，声明粒径约定、捕集边界及治理前后状态。

- 选定流：未规定粒径的颗粒物排放到空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热轧活动的监测排放量；仅在确实不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions_records`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：型钢热拉拔（`hot_drawing`）

#### 输入

##### 产品流

###### 热拉拔供应的交流电（`hot_drawing_electricity_input`）

记录热拉拔生产线在其电表边界的用电。场址限定信息明确前，不复用特定电压消费组合 UUID。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配给合格热拉拔活动的分表电量；其他两条路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`cn-nbs-industry-classification-2017`

###### 热拉拔润滑剂（`hot_drawing_lubricant_input`）

记录热拉拔路线消耗的供应商声明润滑剂产品质量，并随前景记录保存其配方和安全数据。

- 选定流：热拉拔润滑剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热拉拔活动的采购与领退料平衡；路线或润滑剂不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

#### 输出

##### 废物流

###### 热拉拔钢制切边和废品（`hot_drawing_steel_scrap_output`）

将热拉拔产生的非合金钢切边和不合格料作为独立废钢物流记录，并声明去向。

- 选定流：非合金钢热拉拔切边和废品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热拉拔活动的实测废钢质量；其他路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：型钢热挤压（`hot_extrusion`）

#### 输入

##### 产品流

###### 热挤压供应的交流电（`hot_extrusion_electricity_input`）

记录热挤压压力机、驱动装置及纳入辅机在电表边界的用电。场址限定信息明确前，不复用特定电压消费组合 UUID。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配给合格热挤压活动的分表电量；其他两条路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`cn-nbs-industry-classification-2017`

###### 热挤压润滑剂（`hot_extrusion_lubricant_input`）

记录热挤压路线消耗的供应商声明润滑剂产品质量，并随前景记录保存其配方和安全数据。

- 选定流：热挤压润滑剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热挤压活动的采购与领退料平衡；路线或润滑剂不存在时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

#### 输出

##### 废物流

###### 热挤压压余、切边和废品（`hot_extrusion_steel_scrap_output`）

将热挤压产生的非合金钢压余、切边和不合格料作为独立废钢物流记录，并声明去向。

- 选定流：非合金钢热挤压压余、切边和废品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格热挤压活动的实测废钢质量；其他路线为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：冷却、矫直和最终切割（`final_cooling_cutting`）

#### 输入

##### 产品流

###### 精整供应的交流电（`finishing_electricity_input`）

记录冷床辅机、矫直机、锯切和纳入物料搬运在已声明电表边界的用电。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配给合格精整活动的分表电量或有记录分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷却补充水（`finishing_cooling_water_input`）

记录产品直接或间接冷却中跨越前景边界的净补充水；内部循环水不作为投入重复计数。

- 选定流：冷却补充水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给合格精整活动的实测净补充水；干式冷却时为 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter_records`
- 来源：`ec-jrc-fmp-bref-2022`

#### 输出

##### 产品流

###### 净合格角材、型材和异型材（`angles_shapes_sections_output`）

记录冷却、矫直和切割后在生产厂门口放行的合格产品。该数量是所有归一化清单交换的分母。

- 选定流：铁或非合金钢制角材、型材和异型材，除热轧、热拉拔或热挤压外未经进一步加工
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净合格产出 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：生产厂门口的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_material_mass_records`
- 来源：`unsd-cpc-3-0-2025`; `worldsteel-sections-eco-profile-2023`

##### 废物流

###### 最终切割钢制余料（`finishing_steel_offcuts_output`）

将商业定尺锯切余料和最终尺寸不合格料与路线特定切头分开记录，并声明内部回炉或外部去向。

- 选定流：非合金钢最终切割余料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格精整活动的实测余料和最终废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格型钢产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用计量和多产品生产活动 | 优先采用过程细分和直接计量。无法细分的共用流按体现因果关系的物理驱动因素分配，例如按实测运行时间与功率分配电力，或按加工热钢质量分配炉窑燃料；披露驱动因素和敏感性。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | 内部循环的废钢、氧化铁皮、水和润滑剂 | 为内部工程平衡，将物料记录为产生过程的产出和接收过程的投入；产品清单仅报告跨越前景边界的净交换。 | `worldsteel-lci-methodology-2017` |
| `allocation_external_recovery` | 离开场址的废钢、氧化铁皮、污泥和粉尘 | 仅在去向和市场用途有记录时，将外运残余物归为回收物料或共产品；否则按实际废物处理建模。本门到门数据集不得嵌入未披露的避免负荷或寿命终止抵扣。 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `allocation_route_separation` | 热轧、热拉拔和热挤压 | 不得平均互斥路线，除非数据集明确表示具有路线份额和独立底层清单的产量加权组合。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `feedstock_receipt`; `final_cooling_cutting` | 钢投入和合格产品质量 | 汽车衡、批次秤和产品质量证明 | batch_id; grade; feedstock_geometry; product_geometry; gross_mass; tare_mass; net_mass; timestamp; scale_id | 经校准称重；采用长度乘单位质量时进行交叉核对 | kg | 每批次 | 具有代表性的连续 12 个月 | 所有纳入生产线和合格产品 | 按批次汇总合格质量并归一化至有证明的净合格产出 | 校准证书；称重单；产品质量证明；核对记录 |
| `cp_fuel_meter_records` | `feedstock_reheating` | 天然气投入 | 炉窑燃气表和供应商账单 | meter_id; opening_reading; closing_reading; reference_temperature; reference_pressure; dry_wet_basis; campaign_id | 炉窑表计与账单、运行记录核对 | m3 | 每个生产活动并每月核对 | 具有代表性的连续 12 个月 | 所有纳入再加热炉 | 扣除非生产用量，仅按披露的物理驱动因素分配 | 表计校准；账单；核对和停机记录 |
| `cp_electricity_meter_records` | all included processes | 电力投入 | 结算电表和分表 | meter_id; opening_reading; closing_reading; unit; process_id; campaign_id; operating_time | 优先使用过程分表并与场址总表核对 | kWh or MJ | 每个生产活动并每月核对 | 具有代表性的连续 12 个月 | 所有纳入前景设备 | kWh 换算 MJ，并按净合格产出归一化合格用电 | 表计校准；单线图；核对记录 |
| `cp_water_meter_records` | `descaling`; `final_cooling_cutting` | 净补充水 | 补充水表和水量平衡记录 | meter_id; opening_reading; closing_reading; water_quality; circuit_id; discharge_or_loss; campaign_id | 测量边界补充量并排除内部循环 | m3 | 每日或每个生产活动并每月平衡 | 具有代表性的连续 12 个月 | 所有纳入水回路 | 净边界投入除以合格净产出 | 表计校准；水量平衡图；核对记录 |
| `cp_lubricant_records` | route-specific forming process | 消耗的润滑剂产品 | 采购、库房领用和退料记录 | product_id; supplier; formulation_reference; opening_stock; receipts; issues; returns; closing_stock; campaign_id | 库存和生产线领用质量平衡 | kg | 每次领用并每月核对 | 具有代表性的连续 12 个月 | 所选路线和纳入生产线 | 消耗量 = 期初 + 收入 - 退料 - 期末，并分配给合格生产活动 | 发票；库房台账；安全数据表；库存核对 |
| `cp_residue_mass_records` | all included processes | 废钢、氧化铁皮、污泥和余料产出 | 容器秤、外运单和残余物分析 | residue_id; row_id; wet_mass; moisture; oil_content; dry_solids; destination; internal_or_external; batch_id | 每个容器或外运批次称重并保留组成基准 | kg | 每个容器或外运批次 | 具有代表性的连续 12 个月 | 所有纳入残余物收集点 | 按不同物流和去向分别汇总，不得抵销不同残余物 | 衡器校准；外运单；化验结果；回收方收据 |
| `cp_air_emissions_records` | `feedstock_reheating`; `hot_rolling` | 直接基本流排放 | 连续或周期烟气监测和设施排放记录 | source_id; pollutant; concentration; gas_flow; oxygen_reference; dry_wet_basis; abatement_state; operating_time; campaign_id | 经批准监测方法并与生产时间对齐 | kg | 连续或按许可规定的生产活动采样 | 具有代表性的连续 12 个月 | 所有纳入有组织源和有记录无组织源 | 对合格运行期质量排放积分并按净合格产出归一化 | 监测报告；仪器校准；许可记录；计算工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每一清单行 | 归一化量 = 合格行数量 × 1,000 kg / 合格净产品质量 | 合格行数量；合格净产出质量 | 每 1,000 kg 参考产品的行数量 | |
| `calc_electricity_conversion` | 电表记录 | 电力（MJ）= 电力（kWh）× 3.6 | kWh 电表差值 | MJ 电力 | |
| `calc_net_water_input` | 除鳞和冷却水 | 净补充水等于从前景外进入回路的实测水量；内部循环不得作为投入重复计数 | 补充水表；回路平衡；排放和蒸发记录 | m3 净补充水 | `ec-jrc-fmp-bref-2022` |
| `calc_steel_mass_balance` | 完整前景 | 半成品钢接收量 = 合格产品 + 分别实测的废钢 + 余料 + 氧化铁皮 + 污泥中的干基含铁固体 + 捕集粉尘 + 其他披露的含钢损失，并考虑库存变化 | 钢投入；产品产出；全部含钢残余物；库存变化 | 已核对钢质量平衡及未解释差异 | `worldsteel-lci-methodology-2017` |
| `calc_route_gate` | 路线特定行 | 每批次在热轧、热拉拔、热挤压中仅一条路线有效，另外两条路线为 `not_applicable`，不得以零值实测数据填充 | 已声明路线；batch_id；过程记录 | 路线一致的清单 | `unsd-cpc-3-0-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和坯料 | 为每个产品系列保留牌号、标准、几何形状、路线、热处理状态、表面状态、商业长度及上游坯料数据集。 | 产品质量证明；订单规范；供应商数据集链接 |
| `dq_temporal_representativeness` | 全部前景数据 | 采用覆盖正常运行、维护和产品组合的具有代表性连续 12 个月；较短或异常期间须说明理由。 | 带日期表计导出；生产日历；偏差说明；`worldsteel-lci-methodology-2017` |
| `dq_completeness` | 全部纳入过程 | 将场址总量与过程记录核对，并记录每项排除表计、残余物流、排放源和停机调整。 | 核对工作簿；源清单；排除登记 |
| `dq_route_separation` | 路线特定生产 | 热轧、热拉拔和热挤压批次应分开；仅当数据集对象明确为产量加权路线组合时方可汇总。 | 路线代码；批次谱系；加权汇总工作簿 |
| `dq_mass_balance` | 含钢物流 | 执行并保留钢质量平衡，在发布前调查未解释差异。 | 已签署质量平衡工作簿；`worldsteel-lci-methodology-2017` |
| `dq_uuid_status` | Tiangong 引用 | 仅使用直接读取且公开状态码为 100、流类型、状态、属性、单位组和限定信息一致的 UUID；未解决身份留空，不得使用代理。 | UUID 审计记录和清单中的未解决项 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别 | 产品为合金钢、焊接、空心、冷成形/冷加工、涂层或在已声明热成形路线后进一步加工，或缺少牌号和截面几何形状时，校验失败。 | `unsd-cpc-3-0-2025` |
| `validate_reference_amount` | 参考流 | 必须恰为 1,000 kg 净合格产品产出，且 Mass 属性和单位一致。 | `worldsteel-sections-eco-profile-2023` |
| `validate_route_exclusivity` | 过程清单 | 每批次热轧、热拉拔和热挤压三者必须且仅有一条有效路线；其他路线行必须为 `not_applicable`。 | `unsd-cpc-3-0-2025` |
| `validate_boundary` | 系统边界 | 半成品钢投入必须连接上游数据集，炼钢不得计入前景；任何扩大边界过程必须披露。 | `worldsteel-lci-methodology-2017` |
| `validate_mass_balance` | 含钢物流 | 必须核对产品、切头、余料、氧化铁皮、污泥、粉尘及其他披露损失的钢质量平衡；未解决差异必须解释。 | `worldsteel-lci-methodology-2017` |
| `validate_energy_water` | 电力、燃料和水 | 必须记录表计边界、单位换算、燃气参考条件及净补充水处理；循环水重复计数应被拒绝。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_residue_destination` | 废钢、氧化铁皮、污泥和粉尘 | 每种残余物必须分别记录质量和去向；未披露的回收抵扣或合并残余物总量应被拒绝。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_uuid_and_ranges` | 流身份和数值指引 | 拒绝代理或非公开 UUID。缺少精确 UUID 或缺少双来源范围证据，应作为明确未解决审查项，不得据此虚构身份或范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 铁或非合金钢热成形型钢的门到门前景生产数据集 |
| downstream_use | 经审查并与相容半成品钢上游数据集结合后，可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 需要路线和场址限定的型钢出厂成形清单的产品及建筑 LCA、EPD 建模和供应链研究 |
| excluded_use | 未连接上游坯料数据集的独立从摇篮到大门钢生产；合金钢、焊接、空心、冷加工、涂层或制作型钢；未限定路线的比较 |
| required_metadata | PCR id 和版本；场址和地域；生产期间；钢牌号和标准；截面几何形状和商业长度；坯料形式、供应商数据集和入炉温度；热成形路线；炉窑燃料和技术；除鳞和冷却方法；表计边界；分配；残余物去向；未解决 UUID |
| required_quality_disclosure | 原始数据覆盖率；表计和衡器校准；质量平衡结果；汇总时的路线份额；时间和技术代表性；上游数据集选择；排除项；分配敏感性；排放监测基准 |
| update_trigger | 钢牌号系列、坯料来源或状态、成形路线、炉窑燃料/技术、除鳞或冷却回路、型钢轧机配置、分配、残余物去向改变，或年度归一化清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025-06-30，CPC 41251。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-03） | 产品身份、允许的热成形状态和排除项 |
| `ec-jrc-fmp-bref-2022` | official_guidance | 欧盟委员会联合研究中心，《铁金属加工行业最佳可行技术参考文件》，EUR 31321 EN，2022。https://doi.org/10.2760/196475（检索于 2026-09-03） | 下游边界、结构/型钢轧机过程图、除鳞、冷却、水回路、排放和残余物 |
| `worldsteel-lci-methodology-2017` | method_factor | 世界钢铁协会，《钢铁产品生命周期清单方法报告》，2017，ISBN 978-2-930069-89-0。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索于 2026-09-03） | 工厂门口数据生产、外购半成品、物料回收、分配披露、质量和质量平衡校验 |
| `worldsteel-sections-eco-profile-2023` | dataset | 世界钢铁协会，Global Sections - Construction LCA eco-profile，发布于 2023-06。https://worldsteel.org/wider-sustainability/life-cycle-thinking/lca-eco-profiles-2024-release/global-sections-construction/（检索于 2026-09-03） | 代表性结构型钢身份和 1 公吨声明单位先例 |
| `cn-nbs-industry-classification-2017` | official_guidance | 中国国家统计局，《2017 国民经济行业分类注释》，3130 钢压延加工。https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf（检索于 2026-09-03） | 专业中文术语及轧制/挤压生产语境 |
