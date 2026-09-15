---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.railway-or-tramway-track-construction-material-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁道及电车道铺轨用钢铁材料

## 1. 范围与适用性

本 PCR 适用于制造专门用于建造、连接或固定铁路或有轨电车轨道的铁或钢制产品的前景数据包。覆盖钢轨、护轨、齿轨、道岔尖轨、辙叉及其他岔道部件、铁或钢制轨枕、鱼尾板、轨座、底板、钢轨夹、拉杆以及所声明产品族中的同类轨道专用材料。

前景边界从轧制或锻造成形所接收的钢半成品开始；若采用铸造路线，则从单独声明的外购含铁炉料和造型材料开始；边界止于制造厂门口的合格铺轨用钢铁材料。上游炼铁、炼钢、外购物料生产和入厂运输须链接单独的上游数据集。轨道设计、土建、施工现场安装与焊接、维护、铁路运营和寿命终止阶段均排除。机车车辆零部件、信号设备、通用钢型材、非金属轨枕和已组装铁路基础设施不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.railway-or-tramway-track-construction-material-of-iron-or-steel |
| classification_refs | CPC 3.0：41253（精确分类语境） |
| covered_products | 专门用于建造、连接或固定铁路或有轨电车轨道的铁或钢制材料，包括第 1 节列出的产品族 |
| excluded_products | 铁路施工服务和已组装铁路；机车车辆零部件及信号设备；通用铁或钢型材；非金属轨道部件；现场安装、使用、维护和寿命终止 |
| representative_product | 制造厂门口交付的热轧钢轨 |
| production_route | 以钢坯热轧为代表路线；对所声明产品族，锻造成形和黑色金属铸造为条件路线，之后按路线进行调质、机加工、精整和检验 |
| market_state | 制造厂门口符合所声明规范的成品；须声明产品族、牌号、尺寸、处理状态和交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应符合规范的铁道及电车道铺轨用钢铁材料 |
| How much | 1,000 kg 净成品 |
| How well | 满足所声明的钢轨、轨枕、岔道、紧固件或轨道部件规范及验收准则 |
| How long or cycle | 制造厂门口交付的一个生产批次；安装和服役寿命不在边界内 |
| reference_flow_link | `finished_track_material` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净成品 |
| 参考产品流 | 铁道及电车道铺轨用钢铁材料 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族和部件名称；铁或钢牌号及适用规范；截面轮廓或部件几何形状与尺寸；制造路线；热处理和表面状态；净质量核算规则；工厂地理位置；报告期；电力供应商、电网地域、电压、技术和交付边界；天然气供应地域和参考体积条件；确认排除运输包装 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的物料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 净验收成品，不含运输包装。 |
| `mass_reconciliation` | 每条生产路线 | Mass | kg | 在同一报告期内核对实测投入、验收产品、内部回用、外送残余物、转移废物和库存变化；如水分或涂层修正具有实质影响，应予说明。 |
| `electricity_energy` | 交流电行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始值，并按 1 kWh = 3.6 MJ 转换；声明供应商、电网地域、电压、技术和交付边界。 |
| `natural_gas_volume` | 气态天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告带参考温度和压力的计量体积；如换算能量，应保留实测体积、热值和换算过程。 |
| `direct_emission_mass` | 直接基本流排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用烟气实测值或由计量燃料和成分得到的文件化计算；不得用生命周期影响指标代替基本流质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 轧制或锻造所接收的钢坯，或铸造所接收并分别声明的外购含铁炉料和造型砂 |
| starting_condition_role | 进入铺轨用钢铁材料下游制造的上游产品 |
| product_classification_scope | 铁道及电车道铺轨用钢铁材料；数据集必须指明一个产品族和部件名称 |
| recursive_input_rule | 如外购投入本身属于本产品类别，应将其作为带独立供应商数据集的上游产品流记录，不得在本前景边界内递归重复制造 |
| upstream_dataset_requirement | 实际使用的钢半成品、生铁、外购废钢、造型砂、电力、天然气、工艺用水及其他外购投入均须使用供应商特定或有代表性的上游数据集 |
| disclosure | 声明产品族、牌号/规范、路线、起始物料状态、所含操作、场址、报告期、截断、内部回用、外送残余物、废物去向、直接排放方法和包装边界 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 前景过程纳入 | 仅纳入实际采用并已声明的热轧、锻造或铸造路线及其实际精整操作；不得平均未声明路线。 | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `boundary_upstream_separation` | 接收物料与能源 | 上游生产和入厂运输不纳入前景制造过程，但每项外购投入必须链接上游数据集。 | `ec-jrc-fmp-bref-2022` |
| `boundary_downstream_exclusion` | 厂门之后的产品 | 排除轨道安装、铁路施工、使用、维护、更换和寿命终止，除非另行建立下游模型。 | `onesteel-hot-rolled-structural-rail-epd-2026` |
| `boundary_residue_transfer` | 废钢、氧化铁皮、炉渣和废砂 | 各残余物流记录至实测转移点，并分别声明内部回用、外部回收、处理或处置，不得合并不同残余物流。 | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling` | 加热、除鳞和热轧 | `conditional` | 钢轨、轧制钢轨枕及其他通过热轧成形的轨道专用产品适用 | 钢坯下游成形 | kg 热轧轨道材料中间产品 |
| `smithery_forming` | 加热和锻造成形 | `conditional` | 通过锻造或锤锻成形的轨道部件适用 | 钢坯下游成形 | kg 锻造轨道材料中间产品 |
| `foundry_casting` | 黑色金属熔炼、造型和铸造 | `conditional` | 铸铁或铸钢辙叉、轨座、底板或其他已声明铸造轨道部件适用 | 铸造近净成形部件 | kg 验收铸造轨道材料中间产品 |
| `final_conditioning` | 热处理、机加工、精整和检验 | `required` | 始终纳入；仅记录所声明产品及规范实际执行的具体操作 | 最终制造和质量验收 | 1,000 kg 净验收铺轨用钢铁材料 |

### 过程：加热、除鳞和热轧（`hot_rolling`）

#### 输入

##### 产品流

###### 钢坯装料（`rolling_steel_bloom`）

按牌号和炉次记录进入加热与轧制边界的钢坯称量干质量。

- 选定流：轧制用钢坯
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明产品批次的钢坯装料称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

###### 加热炉天然气（`rolling_natural_gas`）

仅当所声明轧制路线实际消耗时记录，并保留供应地域和参考体积条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至加热炉和轧线辅助燃烧器的天然气计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧线电力（`rolling_electricity`）

记录轧机、水泵、传动和辅助设施的交付交流电，并填写必需供应限定信息。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至加热、除鳞、轧制、冷却和辅助设施的电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 除鳞供水（`descaling_water`）

记录进入除鳞和冷却回路的工艺用水，并扣除有文件记录的循环水。保留水源、水质、供应地域、交付边界、计量基准和任何密度换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入所声明轧线水回路的补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_water`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热轧轨道材料中间产品（`hot_rolled_track_intermediate`）

记录最终调质前验收的热轧钢轨、轨枕型材或已声明轨道专用轧制型材。

- 选定流：热轧铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：转入最终调质的验收热轧中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

##### 废物流

###### 分离的氧化铁皮（`mill_scale_waste`）

将表面修整和除鳞产生并分离的氧化铁皮作为一项外送废物流记录。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：送往回收、处理或处置的分离氧化铁皮称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制切头和修边废钢（`rolling_steel_scrap`）

记录离开过程边界的钢制切头和修边废料；内部回用仅保留在质量平衡中。

- 选定流：钢废料 `df700a38-f0e7-486c-abd0-18acaa356280`
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部回用后外送的废钢称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 加热产生的化石二氧化碳（`rolling_fossil_co2_air`）

记录轧制路线炉窑天然气燃烧直接排放的化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测质量，或由计量燃料和文件化碳平衡计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_rolling_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 加热产生的氮氧化物（`rolling_nox_air`）

记录轧制路线燃烧经非城市或高烟囱排放的氮氧化物总量。监测排放点不符合该区室定义时，应改用相应的基本流区室。

- 选定流：氮氧化物 `191b44d4-90c9-465a-8802-93a651b4fd52`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测质量或由受监控燃烧数据得到的文件化计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_rolling_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：加热和锻造成形（`smithery_forming`）

#### 输入

##### 产品流

###### 钢坯装料（`forging_steel_billet`）

按牌号和炉次记录用于轨道部件锻造的钢坯。

- 选定流：钢坯 `7de70586-42d8-40bb-a687-e0e0c05722e4`
- 流属性/单位：Mass / kg
- 数量规则：所声明锻造批次的钢坯装料称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_material_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 锻造炉天然气（`forging_natural_gas`）

记录钢坯加热和路线特定热处理所消耗的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至所声明锻造批次的天然气计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_energy`
- 来源：`ec-jrc-sf-bref-2024`

###### 锻造电力（`forging_electricity`）

记录锻造设备、传动及辅助设施的交付交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至加热、锻造、冷却和辅助设施的电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_energy`
- 来源：`ec-jrc-sf-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 锻造轨道材料中间产品（`forged_track_intermediate`）

记录最终调质前验收的锻造轨道部件。

- 选定流：锻造铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：转入最终调质的验收锻造中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_material_balance`
- 来源：`ec-jrc-sf-bref-2024`

##### 废物流

###### 锻造飞边和切头废钢（`forging_steel_scrap`）

记录离开锻造过程的含铁飞边、切头和不合格件。

- 选定流：钢废料 `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部回用后外送的锻造废钢称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_material_balance`
- 来源：`ec-jrc-sf-bref-2024`

##### 基本流

###### 锻造加热产生的化石二氧化碳（`forging_fossil_co2_air`）

记录锻造路线天然气燃烧直接排放的化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测质量，或由计量燃料和文件化碳平衡计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forging_emissions`
- 来源：`ec-jrc-sf-bref-2024`

### 过程：黑色金属熔炼、造型和铸造（`foundry_casting`）

#### 输入

##### 产品流

###### 外购废钢炉料（`foundry_steel_scrap_charge`）

将外购预处理废钢作为产品投入记录，并与内部回用金属分开。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：Mass / kg
- 数量规则：按牌号和熔次称量的外购废钢炉料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_charge_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 铸造生铁（`foundry_pig_iron`）

仅在实际作为所声明炉料组分时记录生铁。

- 选定流：生铁 `a636ed9e-f90a-48cb-a180-c75b1fc92cf1`
- 流属性/单位：Mass / kg
- 数量规则：按熔次称量的生铁装料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_charge_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 铸造电力（`foundry_electricity`）

记录熔炼、造型准备、搬运和辅助设施的交付交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所声明熔次及相关操作的电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_energy`
- 来源：`ec-jrc-sf-bref-2024`

###### 预制造型砂（`foundry_moulding_sand`）

记录跨越铸造边界的新加预制造型砂，并声明粘结剂体系。

- 选定流：预制铸造用造型砂
- 流属性/单位：Mass / kg
- 数量规则：所声明铸造批次新加造型砂称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_sand_balance`
- 来源：`ec-jrc-sf-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铸造轨道材料中间产品（`cast_track_intermediate`）

记录落砂后、最终调质前验收的铸造轨道部件。

- 选定流：铸造铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：转入最终调质的验收铸造中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_charge_balance`
- 来源：`ec-jrc-sf-bref-2024`

##### 废物流

###### 黑色金属铸造炉渣（`foundry_slag_waste`）

将熔炼和金属处理分离出的炉渣作为一项废物流记录。

- 选定流：黑色金属铸造熔炼炉渣
- 流属性/单位：Mass / kg
- 数量规则：送往回收、处理或处置的炉渣称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_charge_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 废造型砂（`spent_foundry_sand`）

将落砂或砂再生后外送的废造型砂作为单独废物流记录。

- 选定流：铸造废造型砂
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部再生后外送的废砂称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_sand_balance`
- 来源：`ec-jrc-sf-bref-2024`

##### 基本流

### 过程：热处理、机加工、精整和检验（`final_conditioning`）

#### 输入

##### 产品流

###### 热轧中间产品投入（`finishing_hot_rolled_intermediate`）

仅对所声明热轧路线使用此内部链接。

- 选定流：热轧铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入最终调质的热轧中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

###### 锻造中间产品投入（`finishing_forged_intermediate`）

仅对所声明锻造路线使用此内部链接。

- 选定流：锻造铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入最终调质的锻造中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 铸造中间产品投入（`finishing_cast_intermediate`）

仅对所声明铸造路线使用此内部链接。

- 选定流：铸造铁路轨道材料中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入最终调质的铸造中间产品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`ec-jrc-sf-bref-2024`

###### 最终调质电力（`finishing_electricity`）

记录实际执行的热处理、矫直、锯切、钻孔、机加工、磨削、检验和搬运所用交付交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至最终调质和质量验收的电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铺轨用钢铁材料成品（`finished_track_material`）

本行是按路线调质并通过验收检验后的参考产品。

- 选定流：铁道及电车道铺轨用钢铁材料
- 流属性/单位：Mass / kg
- 数量规则：净验收产品固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unstats-cpc-v3-41253`; `unstats-hs-7302-scope`; `onesteel-hot-rolled-structural-rail-epd-2026`

##### 废物流

###### 最终机加工和不合格品废钢（`finishing_steel_scrap`）

仅在具有同一转移身份和去向时，将离开最终调质的钢制边角料、切屑和不合格件记为同一含铁废钢流。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件记录的内部回用后离开最终调质的废钢称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净验收成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 路线和产品族生产 | 在分配前，优先使用直接计量、批次记录和质量追踪拆分热轧、锻造、铸造及最终调质记录。 |  |
| `allocation_internal_return` | 内部废钢、回炉料和再生砂 | 将内部回用作为内部循环且只核算一次；不得同时作为外送废物和外购投入报告。 | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `allocation_exported_residue` | 外送废钢、氧化铁皮、炉渣和废砂 | 制造负荷计至实测转移点。本厂到厂门数据集内不计入替代初级生产的抵扣；任何下游替代情景须单独建立并披露。 | `onesteel-hot-rolled-structural-rail-epd-2026` |
| `allocation_shared_process` | 无法拆分的共用设备 | 如无法直接拆分，应按文件化物理驱动因素分配共用能源和辅料；仅在没有更具因果性的驱动因素时采用加工质量，并披露敏感性检查。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rolling_material_balance` | `hot_rolling` | 钢坯、中间产品、氧化铁皮和轧制废钢 | 地磅、秤和生产记录 | heat_id; grade; input_mass_kg; accepted_mass_kg; internal_return_kg; scale_kg; exported_scrap_kg; stock_change_kg | 核对炉次和生产周期记录 | kg | 每炉或每批 | 有代表性的连续 12 个月 | 所有纳入轧线 | 汇总路线记录并用 `calc_reference_normalization` 归一化 | 校准记录；炉次追溯；签字核对 |
| `cp_rolling_energy` | `hot_rolling` | 天然气和电力 | 公用工程仪表和分配日志 | meter_id; timestamp; gas_m3; gas_reference_conditions; electricity_kWh; line_status; product_mass_kg | 专用计量或文件化因果分表分配 | m3; kWh | 每小时或每班 | 与生产相同期间 | 纳入炉窑和轧线 | 汇总生产消耗并说明启停和停机处理 | 仪表校准；账单核对；分配日志 |
| `cp_rolling_water` | `hot_rolling` | 除鳞供水 | 水表和回路日志 | make_up_water_kg; recirculated_water_kg; blowdown_kg; reporting_period | 补充水与循环水分开计量 | kg | 每班或每日 | 与生产相同期间 | 所声明除鳞与冷却回路 | 报告进入边界的净外部用水 | 仪表检查；回路平衡 |
| `cp_rolling_emissions` | `hot_rolling` | 化石二氧化碳和氮氧化物 | 烟气监测与燃料记录 | stack_id; pollutant; concentration; flow; operating_time; gas_m3; carbon_factor; oxidation_factor | 积分有效监测数据或由采集燃料字段计算 | kg | 每个监测区间或批次 | 与生产相同期间 | 所有纳入燃烧源 | 用 `calc_direct_emissions` 计算并归一化 | 监测 QA/QC；燃料证书；计算审计 |
| `cp_forging_material_balance` | `smithery_forming` | 钢坯、锻造中间产品和锻造废钢 | 批次称量和生产记录 | batch_id; grade; billet_kg; accepted_intermediate_kg; internal_return_kg; exported_scrap_kg; stock_change_kg | 核对每个锻造批次 | kg | 每批 | 有代表性的连续 12 个月 | 所有纳入锻造设备 | 汇总所声明产品批次并归一化 | 校准秤；批次追溯 |
| `cp_forging_energy` | `smithery_forming` | 天然气和电力 | 公用工程仪表和批次日志 | meter_id; timestamp; gas_m3; reference_conditions; electricity_kWh; batch_id | 计量或按因果关系分配至锻造批次 | m3; kWh | 每班或每批 | 与生产相同期间 | 纳入炉窑、压力机和辅助设施 | 汇总生产消耗并归一化 | 校准；账单核对 |
| `cp_forging_emissions` | `smithery_forming` | 化石二氧化碳 | 烟气和燃料记录 | stack_id; concentration; flow; operating_time; gas_m3; carbon_factor; oxidation_factor | 实测或由采集燃料字段计算 | kg | 每个监测区间或批次 | 与生产相同期间 | 纳入燃烧源 | 用 `calc_direct_emissions` 计算并归一化 | 监测 QA/QC；燃料证书 |
| `cp_foundry_charge_balance` | `foundry_casting` | 外购炉料、铸造中间产品和炉渣 | 熔次单和秤记录 | heat_id; scrap_charge_kg; pig_iron_kg; internal_return_kg; accepted_casting_kg; slag_kg; stock_change_kg | 核对每个铸造熔次 | kg | 每熔次 | 有代表性的连续 12 个月 | 所有纳入熔炼单元 | 汇总所声明产品熔次并归一化 | 认证秤；熔次化学成分；核对 |
| `cp_foundry_energy` | `foundry_casting` | 电力 | 电表和熔次日志 | meter_id; timestamp; electricity_kWh; heat_id; accepted_casting_kg | 计量或按熔次因果分配 | kWh | 每熔次或每班 | 与生产相同期间 | 纳入熔炼、造型和搬运设备 | 汇总生产消耗并用 `calc_electricity_conversion` 转换 | 校准；账单核对 |
| `cp_foundry_sand_balance` | `foundry_casting` | 新砂和废造型砂 | 批次及再生记录 | batch_id; fresh_sand_kg; reclaimed_sand_kg; spent_sand_exported_kg; binder_system | 核对新加、内部再生和外送 | kg | 每批或每班 | 与生产相同期间 | 纳入造型与砂再生系统 | 分别报告外部新砂投入和外部废砂输出 | 秤检查；转移凭证 |
| `cp_finishing_material_balance` | `final_conditioning` | 路线中间产品、成品和精整废钢 | 生产与检验记录 | batch_id; route; input_kg; accepted_product_kg; internal_return_kg; exported_scrap_kg; stock_change_kg; rejection_reason | 核对从投入到验收检验的质量 | kg | 每批 | 有代表性的连续 12 个月 | 所有纳入最终操作 | 汇总验收的所声明产品批次并归一化 | 追溯；校准秤；检验放行 |
| `cp_finishing_energy` | `final_conditioning` | 电力 | 仪表和操作日志 | meter_id; timestamp; electricity_kWh; operation; batch_id; accepted_product_kg | 计量或按因果关系分配至实际最终操作 | kWh | 每班或每批 | 与生产相同期间 | 纳入热处理、机加工和检验 | 汇总生产消耗并转换 | 校准；账单核对；操作日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 报告期交换量 ÷ 报告期净验收产品质量 × 1,000 | 交换量；净验收产品质量 | 每 1,000 kg 参考产品的交换量 |  |
| `calc_electricity_conversion` | 以 kWh 记录的电力 | MJ = 电表 kWh × 3.6 | electricity_kWh | electricity_MJ |  |
| `calc_direct_emissions` | 直接化石二氧化碳和受监测氮氧化物 | 对浓度 × 修正烟气流量 × 运行时间积分；化石二氧化碳也可按计量燃料 × 文件化碳含量 × 氧化率计算；保留所选方法和输入 | 监测字段或燃料字段 | 按排放源和期间的污染物质量 | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `calc_route_mass_balance` | 每条所声明路线 | 投入质量 + 期初库存 = 验收输出 + 内部回用 + 外送残余物 + 期末库存 + 文件化损失；调查未解释差额 | 批次和库存字段 | 已核对路线质量平衡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保存与每批关联的产品族、名称、牌号、规范、几何形状、路线、处理状态和验收放行。 | 产品规范；炉批证明；检验放行 |
| `dq_temporal` | 前景数据 | 使用有代表性的 12 个月期间；如采用较短生产周期，须论证并披露启机、停机和异常工况处理。 | 仪表覆盖报告；生产日历；说明 |
| `dq_completeness` | 所有声明过程 | 将生产、公用工程、残余物和排放记录核对至同一产品、产线、场址和期间，并量化缺失记录覆盖率。 | 完整性矩阵；质量与能源核对 |
| `dq_metering` | 实测交换 | 使用校准仪表或秤，并记录每项共用仪表分配驱动因素。 | 校准证书；分配工作簿；账单 |
| `dq_upstream` | 外购投入 | 上游数据集须匹配物料牌号/状态、供应商或代表技术、地域、电力交付限定信息和天然气参考条件。 | 供应商声明；数据集选择日志 |
| `dq_uncertainty` | 缺少来源范围的重要流 | 保存前景波动和测量不确定性；不得将本 PCR 缺失的外部范围视为零不确定性。 | 批次统计；仪表不确定性；未解决范围审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考流 | 如缺少产品族、牌号/规范、几何形状、制造路线、处理状态、工厂地域、报告期或净质量规则，校验失败。 | `unstats-cpc-v3-41253`; `unstats-hs-7302-scope` |
| `validation_route` | 过程图 | 必须包含最终调质和至少一条适用成形路线；如无生产份额声明和证据，不得平均热轧、锻造和铸造路线。 | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `validation_atomic_flows` | 清单行 | 每行仅允许一项原子交换；电力、天然气、水、每项残余物和每种基本流排放必须分列。 |  |
| `validation_mass_balance` | 路线清单 | 必须提供路线质量平衡、文件化内部回用以及外送废钢、氧化铁皮、炉渣和废砂的明确去向。 |  |
| `validation_energy_qualifiers` | 电力和天然气 | 出现相应流时，必须提供电力供应商、地域、电压、技术和交付边界，以及天然气供应地域和参考体积条件。 |  |
| `validation_uuid_status` | Tiangong 引用 | 仅在公开直读确认状态 100、语义身份、流类型、分类、属性和单位组后接受 UUID；其他行保持明确未解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个所声明铺轨用钢铁材料产品族、路线、工厂和报告期的前景制造数据集 |
| downstream_use | 当地域、技术、牌号、产品状态和质量披露与下游模型匹配时，可作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 到厂门制造；与单独建模的上游钢材和下游铁路生命周期阶段组合；仅在等同性审查后进行产品特定比较 |
| excluded_use | 未添加下游模块时不得用于铁路施工服务、已组装轨道、使用性能、寿命预测、维护或寿命终止；必需限定信息不同时不得比较路线或牌号 |
| required_metadata | canonical PCR id；分类语境；产品族/名称；牌号/规范；尺寸；路线及过程份额；处理和交付状态；场址/地域；报告期；参考质量；上游数据集身份；电力和天然气限定信息；残余物去向；包装边界 |
| required_quality_disclosure | 初级数据覆盖；仪表和秤 QA；分配驱动因素；路线质量平衡闭合；缺失记录；直接排放方法；内部回用处理；不确定性；未解决 UUID 和范围证据需求 |
| update_trigger | 产品族或牌号、成形路线、炉窑或铸造技术、热处理、电力供应、燃料、供应商物料、场址边界、分配方法、残余物去向发生变化，或数据超过所声明代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-v3-41253` | `official_guidance` | 联合国统计司，CPC Version 3.0 结构和解释性说明，代码 41253，2025 年 6 月 30 日更新。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-09-03） | 正式产品类别身份与分类层级 |
| `unstats-hs-7302-scope` | `official_guidance` | 联合国统计司，HS 2012 分类明细，品目 7302 及其与 CPC 41253 的对应。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/32/730210（检索于 2026-09-03） | 轨道专用建筑材料产品族边界示例 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，Ferrous Metals Processing Industry BREF，2022 年 12 月通过。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索于 2026-09-03） | 热轧边界及过程分解：钢半成品、表面修整、加热、除鳞、轧制、冷却和精整；残余物与排放记录 |
| `ec-jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry，2024，DOI 10.2760/4805267，JRC140209。https://publications.jrc.ec.europa.eu/repository/handle/JRC140209（检索于 2026-09-11） | 锻造和铸造路线分解，包括加热、锻造、机加工、精整、热处理、熔炼、型芯准备、浇注和落砂 |
| `onesteel-hot-rolled-structural-rail-epd-2026` | `dataset` | OneSteel Manufacturing Pty Ltd，Hot Rolled Structural and Rail Environmental Product Declaration，EPD-IES-0032245:001，版本日期 2026-06-01。https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/fee23f66-9b67-45a6-7780-08debc338923/Documents（检索于 2026-09-11） | 经独立核查的钢轨/轨枕产品示例、CPC 41253 适用性、1 吨待发运成品基准、A1-A3 从摇篮到厂门边界，以及前景材料、能源、水、运输、排放和废物采集字段 |
