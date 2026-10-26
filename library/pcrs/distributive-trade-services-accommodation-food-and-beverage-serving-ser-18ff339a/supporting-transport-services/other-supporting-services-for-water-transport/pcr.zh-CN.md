---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-water-transport
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他水路运输支持服务

## 1. 范围与适用性

不直接连接船舶运行的水路运输支持，包括航运破冰、船舶登记及船舶搁置/储存。物理不同服务采用独立条件过程及数据集；选择一个准确服务族和实际块，仅剩余类别标题不能建立可计量服务。已审范围仅覆盖上述三个服务族，相对于开放的剩余类别属于 narrower（较窄）。其他尚未审查的剩余支持功能不自动适用，使用前须独立明确功能范围、边界并审查证据。[来源：`un-cpc-other-water`]

排除船舶清洗/去污（含燃料/油污染去除，853）、消毒/灭害（85310）、客货中介（85610/85630）、公共救生艇/消防艇/搜救或公共秩序安全服务（91260/91290）及溢油处置（94412/94420）。多功能政府破冰船不把搜救、补给、科研、主权或防洪工作自动归入航运破冰输出；区分所选支持边界外的普通港口/引航、运输拖带及维修/复役。[来源：`un-cpc-other-water`]

| 服务族 | 计数服务块 | 必需物理定义 |
| --- | --- | --- |
| icebreaking | 一个已完成明确航运破冰任务 | 固定冰区路线/港区、实际长度/宽度/清障目标、冰型/厚度/密集度/冰脊观测、天气、受助船/船队总体、船艇/功率、实际助航/航行/怠速/返航及完成，不产生客货运输输出。 |
| registration | 一个已完成明确船舶登记办理案例 | 固定管辖/登记机构、船舶身份、交易类型（首次/续期/变更/注销）、证据处理范围、正式决定/记录及初始交付；区分结果及复杂性，仅提交/付款不算完成，本PCR不作法律批准。 |
| layup | 一艘明确船舶实际储存24小时块 | 固定船舶尺寸/占位、实际冷/热/保养状态和活动系统、浮存/干存、场址/系泊/托架、实际保管小时、值守/监测及合同运营方/客户范围；保留不足整日，不按收费取整。 |

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-water-transport |
| classification_refs | CPC 3.0 67590; narrower |
| covered_products | 分别限定的航运破冰任务、完成登记案例及实际船舶搁置保管块 |
| excluded_products | 船舶清洗/消毒、中介、公共搜救/消防/安全、溢油处置及无关船舶/港口运输作业 |
| representative_product | 一个已完成路线/港区航运破冰任务，记录实际冰况及受助船总体 |
| production_route | 定义单一服务族/范围 → 执行其实际条件性物理或行政过程 → 核验完成任务/案例或实际保管时间块 |
| market_state | 有证据及范围的已完成支持服务，不建立通用计数等效或推定船舶运行 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个准确规定的水运支持功能 |
| How much | 第1节一个服务族特定块，破冰、登记及搁置之间不得混合 |
| How well | 满足实际任务清障、行政办理完成或保管/保养要求并记录结果，不设默认能力或法律认证 |
| How long or cycle | 实际任务/案例开始至完成和首次交付，或一船实际24小时保管块并保留不足整日 |
| reference_flow_link | `support_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的明确水运支持服务块 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 准确服务族及物理定义服务块；实际作业/组件及完成接口；场址/水体/管辖；供应商/客户责任；适用破冰任务路线/清理范围/冰况/船队/船艇/负荷；适用登记交易/船舶/结果/文件交付范围及档案截止点；适用搁置船尺寸/状态/活动系统/浮存干存/占位/保管时间/系泊/保养/值守；实际待机、返工及接送；能源/燃料供应；共用功能；资产/寿命分母及更新；废物/接收方；实际验收；期间及代表性 |

Item(s)计数明确案例/任务/时间块，不把物品数量属性套给燃料、电力、面积、时间或废物行。登记案例不能代表破冰任务或一船日储存；搁置块数等于实测保管小时除以24且不按费用取整，破冰清理及登记范围保留独立物理范围/复杂性，不推定旅客公里、货运吨公里、船费或名义容量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| support_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 用cp_completion计一个明确完成的服务族特定块，保持实际范围，不建立跨族等效。 |
| ice_fuel | ice_diesel | 质量 | kg | 按发动机/负荷/阶段采用实际任务燃料，体积换算须有实际等级密度及温度，不设单位冰区公里或护航计数固定耗油。 |
| layup_time | support_output | 物品数量 | Item(s) | 仅搁置情景，一个计数为一艘明确船储存实际24小时；保留分数块、船舶占位及实际保养状态，不按发票换时长。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个明确航运任务、行政交易或已接受船舶储存保管，保留实际保障资产/上游能源 |
| starting_condition_role | foreground_start |
| product_classification_scope | 声明非船舶运行支持族，具有排除项及独立过程 |
| recursive_input_rule | 相同功能分包以准确范围/供应商覆盖计入一次，剔除重叠自有工作/资产 |
| upstream_dataset_requirement | 实际任务能源/破冰资产、登记信息/办公/服务供应、搁置能源/材料/储存资产及实际处理清单 |
| disclosure | 独立功能/范围、起止/交付/保管端点、多用途工作、保管所有权、活动保养系统、全部资产/供应商及数据缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_ice | 实际冰区路线/港区清理、护航/船队协助、调度、定位、等候、重试、返航及保障仅按航运破冰归属范围纳入。加拿大海岸警卫队示例支持实际路线/港区/船队区别，更广公共项目任务另定范围。 | ccg-icebreaking |
| boundary_registry | 纳入所声明交易实际接收、证据处理、检查、决定/记录更新及首次交付；区分首次/续期/变更/注销及结果复杂性；处理决定完成不使本PCR成为登记机关。办理后持续档案/登记系统运行另定范围，不设无限期默认保留。 | uk-registry |
| boundary_layup | 纳入实际储存保管、监测/系泊及约定状态保养系统，明确运营方/客户责任；按实际要求记录热/冷/其他状态，不设默认能源；所选服务内保养能源即使由客户发电机供应也计一次，排除无关推进、船舶制造及独立清洗/消毒/复役。DNV公开指导支持场址/系泊/保养计划，不采用未读推荐实践限值。 | dnv-layup |
| boundary_releases | 按实际接收水体筛查实际燃料、制冷剂、保养化学品、舱底水/污水、泄漏、水冰扰动、尾波及噪声；收集废物不自动排海，化学卡不能证明完整冰区/栖息地或当地生态覆盖。 |  |

## 6. 过程清单结构

一个实际数据集仅选择一个服务族过程，随后接共同完成输出；共享资源仅针对该功能和实际配置实例化。其他真实燃料/化学品/制冷剂/涂料/废物/物种逐项增加，不以能源、船用品、废水残渣集合或未来选择指令作流；通用办公过程不能替代物理破冰或搁置清单。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| icebreaking | 执行明确航运破冰任务 | conditional | 所选服务族为icebreaking | foreground_production | 每参考流 |
| registration | 办理明确船舶登记案例 | conditional | 所选服务族为registration | foreground_production | 每参考流 |
| layup | 提供实际船舶搁置保管/保养 | conditional | 所选服务族为layup | foreground_production | 每参考流 |
| completion | 核验所选服务族完成/输出 | required | 一个所选服务族及其实际范围 | foreground_production | 每参考流 |

### 过程：执行明确航运破冰任务（`icebreaking`）

#### 输入

##### 产品流

###### 未掺混柴油（`ice_diesel`）

实际破冰/服务船消耗该燃料时纳入；实测主/辅机/怠速/航行/调位消耗，其他推进/燃料等级须另设实际供应行；受助船及补给货物燃料不属于本行。

- 选定流：未掺混柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_ice_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ice_energy`
- 来源：

###### 破冰船岸供电力（`ice_shore_power`）

实际服务船岸电/充电保障时纳入；记录来源、电压、充电损耗及实际待机范围；电网供能不是无负荷辅机燃烧替代。

- 选定流：破冰船岸供电力
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_ice_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ice_energy`
- 来源：

###### 矿物液压油（`ice_hydraulic`）

实际破冰设备维护时纳入；测量等级、实际更换及有证据任务份额，不向每任务分整次换油。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_icebreaking`
- 来源：

###### 已确定配置的破冰服务船（`ice_ship_share`）

实际使用破冰船时纳入；识别船体/推进/破冰能力、实际建造/更新清单及有证据全寿命服务分母；多任务船仅分航运破冰任务份额。

- 选定流：已确定配置的破冰服务船
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_icebreaking`
- 来源：

#### 输出

##### 废物流

###### 废矿物液压油（`ice_used_oil`）

实际分离液压废油时纳入；追踪收集处理，不推定排水体；其他废油须另设具体流。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_icebreaking`
- 来源：

###### 含油破冰船舱底水（`ice_bilge`）

实际收集舱底水时纳入；保留油组成及真实接收/船上处理范围，不假定排海或排淡水。

- 选定流：含油破冰船舱底水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_icebreaking`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气（`ice_co2`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_icebreaking`
- 来源：

###### 一氧化碳，排入空气（`ice_co`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_icebreaking`
- 来源：

###### 一氧化氮，排入空气（`ice_no`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_icebreaking`
- 来源：

###### 二氧化氮，排入空气（`ice_no2`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_icebreaking`
- 来源：

###### 二氧化硫，排入空气（`ice_so2`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_icebreaking。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_icebreaking`
- 来源：

### 过程：办理明确船舶登记案例（`registration`）

#### 输入

##### 产品流

###### 船舶登记设施用户端电力（`registry_power`）

计量实际案例处理、扫描、通信及可归属办公/信息保障，识别办理/初始交付截止点，不分配无关船舶运行能源。

- 选定流：船舶登记设施用户端电力
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_registry。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_registry`
- 来源：

###### 非涂布办公打印纸（`registry_paper`）

实际案例使用纸质文件/打印时纳入，测量已用/未用纸；电子案例不虚设纸质证书。

- 选定流：非涂布办公打印纸
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_registry。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_registry`
- 来源：

###### 已确定配置的登记办理工作站（`registry_workstation`）

实际自有工作站使用时纳入；按实际案例利用及有证据全寿命利用量分配制造，供应商已含设备不重复。

- 选定流：已确定配置的登记办理工作站
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets_registration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_registration`
- 来源：

###### 船舶登记案例托管服务（`registry_hosting`）

实际外部案例托管/处理时纳入；固定实际应用/存储/地区/容量/保留覆盖、实测活动及供应商清单；服务小时不直接等于电量，办理后持续档案运行另定范围。

- 选定流：船舶登记案例托管服务
- 流属性/单位：时间 / h
- 数量规则：每参考流的可归属实测交换量；cp_registry。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_registry`
- 来源：

###### 已确定配置的船舶登记办公建筑（`registry_building`）

实际办公使用时纳入；识别建筑/共用面积、案例服务总体及有证据建设寿命份额，排除机构无关功能。

- 选定流：已确定配置的船舶登记办公建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流的可归属实测交换量；cp_assets_registration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_registration`
- 来源：

#### 输出

##### 废物流

###### 废办公打印纸（`registry_waste_paper`）

实际运营方废纸时纳入；单独称量并识别实际保密处置/处理范围，不默认回收收益。

- 选定流：废办公打印纸
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste_registration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_registration`
- 来源：

### 过程：提供实际船舶搁置保管/保养（`layup`）

#### 输入

##### 产品流

###### 船舶搁置保养供电（`layup_power`）

仅在外部供给电力跨越所声明前景边界、用于实际所存船通风、除湿、加热、监测、电池维护或存储设施保障时适用。明确交付表计、交直流形式、电压及供应商覆盖；不兼容供应须另设具体流行。实测终端用电用于对账并保留实际热/冷/状态要求。现场或船上发电及电池放电属于内部转移，不是额外外部电力输入；不设通用保养负荷。

- 选定流：船舶搁置保养供电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流可归属的实测外部交付电量；cp_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_layup`
- 来源：

###### 搁置保养用未掺混柴油（`layup_diesel`）

仅在实际发电机/设备于声明前景边界内用该燃料维持规定存储状态时适用。记录责任所有者/运营方，约定保养份额仅计一次，不因所有权省略；排除客户推进及无关活动。相关发电量保留在内部电量账中。外部供电数据集或独立发电子过程已含该燃料时，不得在layup重复加入同一燃料。

- 选定流：搁置保养用未掺混柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流在声明前景边界内可归属的实测燃料消耗量，排除供电或独立发电子过程已代表的燃料；cp_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_layup`
- 来源：

###### 矿物防锈保护油（`preservation_oil`）

实际使用该保养材料且符合设备要求时纳入；记录领用/回收及数量，配方添加剂或其他化学品须另设具体行；船舶清洗/去污/消毒不属于本服务。

- 选定流：矿物防锈保护油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_layup`
- 来源：

###### 硅胶干燥剂（`silica_gel`）

实际使用干燥剂时纳入；识别等级及实际替换/再生边界，不要求每种搁置状态均使用。

- 选定流：硅胶干燥剂
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_layup`
- 来源：

###### 聚丙烯系泊缆（`mooring_rope`）

实际浮存系泊用该材料时纳入；分配有证据实际利用/替换份额，其他缆材料及系泊设备须另设行。

- 选定流：聚丙烯系泊缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_layup`
- 来源：

###### 已确定配置的船舶搁置泊位（`layup_berth`）

实际浮存泊位储存时纳入；固定泊位几何、船舶占位/长度及建设范围、有证据全寿命占用及实际存储时长。

- 选定流：已确定配置的船舶搁置泊位
- 流属性/单位：长度 / m
- 数量规则：每参考流的可归属实测交换量；cp_assets_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_layup`
- 来源：

###### 已确定配置的船舶储存硬化场地（`hardstanding`）

实际陆上干存时纳入；识别面积、结构建设及实际储存总体，同一范围不再分浮存泊位。

- 选定流：已确定配置的船舶储存硬化场地
- 流属性/单位：面积 / m2
- 数量规则：每参考流的可归属实测交换量；cp_assets_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_layup`
- 来源：

###### 已确定配置的船舶储存托架（`cradle`）

实际干存支撑时纳入；识别配置、制造及有证据载荷/循环/寿命利用量，排除客户所存船制造。

- 选定流：已确定配置的船舶储存托架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_layup`
- 来源：

#### 输出

##### 废物流

###### 废矿物防锈保护油（`used_preservation_oil`）

实际收集移除保护油时纳入；记录组成、质量、复用及实际处理；泄漏入水须另设化学物/介质交换，不是本收集流。

- 选定流：废矿物防锈保护油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_layup`
- 来源：

###### 废硅胶干燥剂（`spent_desiccant`）

实际废硅胶时纳入；称量并追踪再生/处置及污染，不假定危险性或自动回收。

- 选定流：废硅胶干燥剂
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_layup`
- 来源：

###### 搁置服务生活污水（`layup_sewage`）

实际存储/保养边界内服务人员污水时纳入，测量真实接收/处理范围，不假定直接环境排放。

- 选定流：搁置服务生活污水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_layup`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气（`layup_co2`）

仅实际范围内燃烧产生该物种时纳入，采用实测或经核验燃料/发动机/负荷及碳/硫证据；区分NO和NO2，不复制总氮氧化物或客户航行排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release_layup。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_layup`
- 来源：

### 过程：核验所选服务族完成/输出（`completion`）

#### 输出

##### 产品流

###### 已完成的明确水运支持服务块（`support_output`）

只选一个功能：明确航运破冰任务、完成的明确登记办理案例，或一船实际24小时搁置保管块；各为独立情景，不是等效服务计数。

- 选定流：已完成的明确水运支持服务块
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_family | 任何相除前先拆分三服务族及不同范围；破冰按实测船艇/发动机负荷及实际清理/协助范围，登记按实际处理/信息工作与案例类型，搁置按实际船舶占位/时间及保养状态；跨族计数不可互换。 |  |
| allocate_ice | 按有证据因果方法将船队/共用路线、定位/返航及季节待机追踪到实际航运服务总体；拆分公共搜救、补给、科研、防洪及无关多用途工作；护航或破冰航行不预设客货运输共产品。 |  |
| allocate_layup | 按兼容船舶占位/时间/状态分配实际持有资源，转换/检查事件按实际有证据服务使用量分配；透明保留不足整日及空置设施保障；不得每日计整艘所存船制造或假定保养收益/延寿。 |  |
| allocate_assets | 为破冰船、信息设备、办公、泊位、硬化场地及托架维持持续账及有证据全寿命活动/服务分母；观测期仅分已归属期间份额，跨全部任务/用户/期间累计制造建设比例不得超过一或每年重置；区分上游已含实际更新，未知寿命/分母须审查和敏感性分析。 |  |
| allocate_provider | 供应商托管/保养/破冰清单对已含资源资产负荷仅替代一次；费用、登记法律权利、客户船舶和存储状态本身不是额外共产品；实际收集废物不自动获回收/避免生产收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | completion | support_output | 服务族特定完成账 | 所选服务族；准确块；任务/案例/船舶编号；物理范围；实际起止；验收输出/结果；运营方/供应商组件；实际保管小时 | 核验恰一个完成任务或完成明确登记案例，或用实际保管小时除24形成船舶保管块；服务族、类型、结果及范围分开，不用费用或名义容量作数量。 | Item(s) | 每完成/保管时段 | 完整所选服务边界 | 实际所选服务族供应商 | 每参考流 | 任务日志；正式案例决定/交付；保管时间；总体核对 |
| cp_ice_energy | icebreaking | ice_diesel; ice_shore_power | 任务冰况/负荷/能源账 | 任务路线/清理区；实际冰型/厚度/密集度/冰脊；天气；船队/船舶；船艇/发动机/功率；燃料kg/等级/密度；充电kWh；助航/航行/怠速/等候/返航/待机时段；实际完成 | 实测发动机燃料及电力供应，核对任务/船队/共用及非航运任务；采用实际冰况和作业日志，不按默认单位路线公里或受助船数推油耗。 | kg; kWh | 每任务阶段/计量时段 | 完整实际任务及归属保障 | 实际破冰运营方/船艇 | 每参考流 | 燃料/充电计量；冰况/路线日志；发动机负荷；共用任务核对 |
| cp_registry | registration | registry_power; registry_paper; registry_hosting | 案例办理及初始交付账 | 管辖；案例/交易类型；船舶；提交证据；实际检查/返工；决定/结果/日期；实际人员/信息活动；kWh；纸kg；供应商服务小时/容量/地区；首次交付；档案截止 | 匹配实际流程及完成决定/交付，分表/核对实际信息办公活动和纸；托管须实际范围及清单，不由案例数推电量；未完工作明确保留，持续登记/档案另定界。 | kWh; kg; h | 每案例步骤及完成 | 实际案例至首次交付 | 实际登记机构及供应商 | 每参考流 | 案例日志；决定/文件记录；计量；信息/供应商范围；交付证据 |
| cp_layup | layup | layup_power; layup_diesel | 保管/状态及保养能源账 | 船舶尺寸/占位；浮存/干存场址；保管起止/小时；实际热冷/状态计划；活动系统；值守；实测通风/除湿/加热/监测/电池负荷；实际发电机燃料；责任所有者/供应商；外部交付表计/交直流/电压/来源；现场/船上发电kWh；期初期末储能；变换/充放电损耗；排除/外送kWh；发电/供应商边界及资产覆盖；储存电量的能源来源与充电期间编号；已归属上游供给清单 | 核验真实保管及在实际适用背景下已获认可的保养计划，实测维持系统能源并区分无关推进/清洗；保留不足整日、实际设备循环及供应商/客户责任，不设通用冷/热能耗假设。 分别计量外部交付、发电输出及终端用电，核对layup_electricity_balance。内部发电及储能放电不进入layup_power。实际发电机燃料、直接排放、维护及额外专用保养发电/储能资产仅计一次；识别供应商清单已含或属于所排除客户船制造的部分，不重复计入。 | kWh; kg | 每保管/工况/计量时段 | 实际存储期及归属转换 | 实际船舶/场址及供应商 | 每参考流 | 保管/状态日志；计量/燃料记录；保养执行；范围核对；交付示意图；电量/储能平衡；发电及供应商覆盖证据 |
| cp_material_icebreaking | icebreaking | ice_hydraulic | 具体保障材料平衡 | 单一化学品/材料等级；实测kg；领退；替换/再生；实际利用/寿命份额；库存；回收；实际泄漏；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 逐项称量具体材料，并按有证据服务利用量归属实际维护/保养；区分船舶清洗消毒及范围内状态保养，不每块分整条缆或整次换油。 本协议仅适用于所列icebreaking过程交换；共享记录按validate_protocol_partition核对。 | kg | 每实际材料/维护事件 | 归属实际保障/保养 | 实际所选族资产 | 每参考流 | 称重；兼容/等级；库存材料平衡；利用记录 |
| cp_material_layup | layup | preservation_oil; silica_gel; mooring_rope | 具体保障材料平衡 | 单一化学品/材料等级；实测kg；领退；替换/再生；实际利用/寿命份额；库存；回收；实际泄漏；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 逐项称量具体材料，并按有证据服务利用量归属实际维护/保养；区分船舶清洗消毒及范围内状态保养，不每块分整条缆或整次换油。 本协议仅适用于所列layup过程交换；共享记录按validate_protocol_partition核对。 | kg | 每实际材料/维护事件 | 归属实际保障/保养 | 实际所选族资产 | 每参考流 | 称重；兼容/等级；库存材料平衡；利用记录 |
| cp_assets_icebreaking | icebreaking | ice_ship_share | 持续服务族特定资产账 | 资产编号/配置；建设制造；实际件数/m2/m；实际服务族利用；有证据寿命服务分母；多用途份额；先前累计比例；期间比例；更新/敏感性；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 匹配实际服务族资产及有证据全寿命利用，守恒跨任务/用户/期间份额并避免重复上游更新；所存客户船制造不属于保管服务资产分子；未知寿命/分母明确待审。 本协议仅适用于所列icebreaking过程交换；共享记录按validate_protocol_partition核对。 | Item(s) | 每分配及资产/更新变化 | 有证据全寿命及实际观测期 | 已识别船艇/信息/办公/储存资产 | 每参考流 | 资产/建设记录；实际利用；寿命证据；累计份额 |
| cp_assets_registration | registration | registry_workstation; registry_building | 持续服务族特定资产账 | 资产编号/配置；建设制造；实际件数/m2/m；实际服务族利用；有证据寿命服务分母；多用途份额；先前累计比例；期间比例；更新/敏感性；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 匹配实际服务族资产及有证据全寿命利用，守恒跨任务/用户/期间份额并避免重复上游更新；所存客户船制造不属于保管服务资产分子；未知寿命/分母明确待审。 本协议仅适用于所列registration过程交换；共享记录按validate_protocol_partition核对。 | Item(s); m2 | 每分配及资产/更新变化 | 有证据全寿命及实际观测期 | 已识别船艇/信息/办公/储存资产 | 每参考流 | 资产/建设记录；实际利用；寿命证据；累计份额 |
| cp_assets_layup | layup | layup_berth; hardstanding; cradle | 持续服务族特定资产账 | 资产编号/配置；建设制造；实际件数/m2/m；实际服务族利用；有证据寿命服务分母；多用途份额；先前累计比例；期间比例；更新/敏感性；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 匹配实际服务族资产及有证据全寿命利用，守恒跨任务/用户/期间份额并避免重复上游更新；所存客户船制造不属于保管服务资产分子；未知寿命/分母明确待审。 本协议仅适用于所列layup过程交换；共享记录按validate_protocol_partition核对。 | m; m2; Item(s) | 每分配及资产/更新变化 | 有证据全寿命及实际观测期 | 已识别船艇/信息/办公/储存资产 | 每参考流 | 资产/建设记录；实际利用；寿命证据；累计份额 |
| cp_waste_icebreaking | icebreaking | ice_used_oil; ice_bilge | 具体废物/接收账 | 单一流；实际kg/m3；组成污染；服务族/事件来源；复用再生；船上/岸上接收；实际处理处置；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 分别称量/计量并追踪真实接收/处理，不预设危险性、直接排水体、接收、回收或避免负荷；其他实际废物须另设具体行。 本协议仅适用于所列icebreaking过程交换；共享记录按validate_protocol_partition核对。 | kg; m3 | 每实际转移/排水期 | 全部可归属实际废物 | 实际服务族供应商及处理端点 | 每参考流 | 接收/转移单；组成；质量/水平衡；实际处理 |
| cp_waste_registration | registration | registry_waste_paper | 具体废物/接收账 | 单一流；实际kg/m3；组成污染；服务族/事件来源；复用再生；船上/岸上接收；实际处理处置；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 分别称量/计量并追踪真实接收/处理，不预设危险性、直接排水体、接收、回收或避免负荷；其他实际废物须另设具体行。 本协议仅适用于所列registration过程交换；共享记录按validate_protocol_partition核对。 | kg | 每实际转移/排水期 | 全部可归属实际废物 | 实际服务族供应商及处理端点 | 每参考流 | 接收/转移单；组成；质量/水平衡；实际处理 |
| cp_waste_layup | layup | used_preservation_oil; spent_desiccant; layup_sewage | 具体废物/接收账 | 单一流；实际kg/m3；组成污染；服务族/事件来源；复用再生；船上/岸上接收；实际处理处置；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 分别称量/计量并追踪真实接收/处理，不预设危险性、直接排水体、接收、回收或避免负荷；其他实际废物须另设具体行。 本协议仅适用于所列layup过程交换；共享记录按validate_protocol_partition核对。 | kg; m3 | 每实际转移/排水期 | 全部可归属实际废物 | 实际服务族供应商及处理端点 | 每参考流 | 接收/转移单；组成；质量/水平衡；实际处理 |
| cp_release_icebreaking | icebreaking | ice_co2; ice_co; ice_no; ice_no2; ice_so2 | 来源/物种特定排放账 | 服务族/源；实际燃料/发动机/负荷；碳/硫/氧化；实测物种kg；NO/NO2分物种/当量基准；空气介质；方法适用性；不确定性；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 实测物种或用独立核验来源/负荷/燃料特定方法；区分客户航行、排除公共任务及上游供电；其他实际排放/泄漏及介质逐项记录，不把总氮氧化物复制进两个物种。 本协议仅适用于所列icebreaking过程交换；共享记录按validate_protocol_partition核对。 | kg | 每排放作业及代表监测 | 全部代表范围内排放 | 实际来源及空气介质 | 每参考流 | 测量；燃料发动机记录；核验方法；碳硫及任务核对 |
| cp_release_layup | layup | layup_co2 | 来源/物种特定排放账 | 服务族/源；实际燃料/发动机/负荷；碳/硫/氧化；实测物种kg；NO/NO2分物种/当量基准；空气介质；方法适用性；不确定性；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 实测物种或用独立核验来源/负荷/燃料特定方法；区分客户航行、排除公共任务及上游供电；其他实际排放/泄漏及介质逐项记录，不把总氮氧化物复制进两个物种。 本协议仅适用于所列layup过程交换；共享记录按validate_protocol_partition核对。 | kg | 每排放作业及代表监测 | 全部代表范围内排放 | 实际来源及空气介质 | 每参考流 | 测量；燃料发动机记录；核验方法；碳硫及任务核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| family_attribution | 所有清单行 | 将实际资源/维护/保障归属一个明确服务族/范围，除以实际完成块数，不跨族计数平均；参考输出准确为1 Item(s)。 | cp_completion; 实际服务族记录 | 每参考流交换量 |  |
| layup_blocks | support_output | 仅搁置情景，将实测船舶保管小时除24形成实际块，保留不足整日及船舶状态/占位，不按费用或假定年占用推时间。 | cp_layup; cp_completion | 实际搁置块量 |  |
| layup_electricity_balance | layup_power; layup_diesel; layup_co2 | 在一致接口及同一保管期间核对：外部交付电量 + 现场/船上发电输出 = 纳入的保养终端用电 + 排除/外送电量 + 变换/配电/储能损耗 + 期末储能 - 期初储能。仅计尚未包含于其他表计项的损耗；保留储能变化正负号、不确定性及未解释差值。内部发电/储能转移不形成外购电输入。实际发电燃料、直接排放、维护及范围内专用资产，在layup内或明确关联的发电子过程中仅计一次，同一电量不得再叠加完整外部供电数据集。归属实际保养范围，再通过family_attribution仅归一化一次。 将期初/期末储存电量有记录的能源来源身份及上游负荷一并纳入同一服务/期间分配；不得遗漏期初库存负荷，也不得把期末库存负荷全部归给当前服务。 | cp_layup; cp_completion | 已核对外部供应及内部保养电量账 |  |
| asset_attribution | ice_ship_share; registry_workstation; registry_building; layup_berth; hardstanding; cradle | 按有证据全寿命利用的服务族/块份额分实际制造建设，守恒累计比例，区分已含更新及其他用途工作。 | cp_assets_icebreaking; cp_assets_registration; cp_assets_layup; cp_completion | 每参考流资产量 |  |
| species_accounting | ice_co2; ice_co; ice_no; ice_no2; ice_so2; layup_co2 | 采用实际物种质量或核验发动机/燃料/负荷证据，在数据集中明确因子/单位及总氮氧化物当量换算；不提供数值负荷、燃料或排放默认值。 | cp_release_icebreaking; cp_release_layup; cp_ice_energy; cp_layup | 每参考流单一物种量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_family | support_output | 声明单一功能/范围及完成类型，不用通用其他服务发票、不跨族计数等效、不声称法律安全批准。 | cp_completion |
| quality_physical | icebreaking; layup | 要求实际冰况/船艇负荷或船舶存储状态/时间/活动系统记录，不用纯办公替代或每船默认能耗。 | cp_ice_energy; cp_layup |
| quality_registry | registration | 保持案例交易/结果、实际处理证据、首次交付端点及档案边界，提交/费用不证明完成登记。 | cp_registry |
| quality_lifecycle | 所有资产行 | 支持全寿命服务分母、多用途归属、初始更新边界及累计守恒；未知寿命/上游范围时不得声称完整生命周期。 | cp_assets_icebreaking; cp_assets_registration; cp_assets_layup |
| quality_gaps | 所有清单行 | 披露身份/物种/介质/处理、冰区/栖息地/噪声及材料保养证据缺口和不确定性，缺失不等于零。 | cp_waste_icebreaking; cp_waste_registration; cp_waste_layup; cp_release_icebreaking; cp_release_layup; 场址记录 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_output | 要求唯一support_output产品输出等于1 Item(s)，为一个物理定义的完成服务族块；禁止任务、登记案例与搁置日混为平均。 |  |
| validate_scope | 排除船舶清洗消毒/中介/公共搜救消防安全/溢油处置，按实际日志拆分公共或多用途破冰船任务。 | un-cpc-other-water |
| validate_process | 选择实际服务族特定过程并补全物理/行政证据；破冰不产生假定客货运输输出，登记不意味机关批准，搁置须实际保管小时及状态/保养范围。 |  |
| validate_atomic_lifecycle | 要求具体交换具有各自正确属性/单位和实际适用性、资产份额守恒、供应商重叠控制及真实废物接收；未知身份/方法证据须明确，不推定发布条件或生态完整。 |  |
| validate_layup_energy | 搁置须核验外部供应与船上/现场发电、实际交直流交付身份、储能/损耗平衡及责任运营方。内部发电/储能放电不得作为外购电额外计入；燃料、直接排放、范围内发电资产及供应商已含负荷仅计一次。保留无关推进及客户船制造的原有排除；未解决电力/资产证据须披露。 |  |
| `validate_protocol_partition` | 每项采集协议须指向一个已存在的process_id且仅覆盖其所列流行；每张清单卡须关联其实际过程的对应协议。每次物理读数、交付、转移、排放或资产分配保留唯一source_record_id和exchange_id。源记录服务多个过程或数据集时，在同一期间共用总账中记录分配驱动因素、原始总量、各归属份额及边界外剩余量；各归属数量与剩余量之和须与原始总量一致。拆分协议不得复制完整读数、新增服务产出或重新开始资产寿命分配。每个声明情景保留同一匹配的产出分母，过程数量仅为归属证据，不形成额外归一化。内部转移仅核对一次，并保留跨全部使用方和期间的资产累计份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | other_water_transport_support |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 范围、结果/状态及实际接口兼容的单一明确航运破冰、船舶登记或搁置保管组件 |
| excluded_use | 跨族基准、整船航行/寿命、客货运输、公共搜救/油污处置或暗示登记/船级/安全批准 |
| required_metadata | 准确服务族及物理定义服务块；实际作业/组件及完成接口；场址/水体/管辖；供应商/客户责任；适用破冰任务路线/清理范围/冰况/船队/船艇/负荷；适用登记交易/船舶/结果/文件交付范围及档案截止点；适用搁置船尺寸/状态/活动系统/浮存干存/占位/保管时间/系泊/保养/值守；实际待机、返工及接送；能源/燃料供应；共用功能；资产/寿命分母及更新；废物/接收方；实际验收；期间及代表性 |
| required_quality_disclosure | 服务族证据及身份缺口；冰况/状态/案例代表性；客户供应商责任；生态/处理范围；实际寿命分母及上游遗漏 |
| update_trigger | 任务/冰况/船队、登记类型/流程/结果、搁置状态/场址/保管/保养计划、动力供应、供应商范围或资产寿命证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-other-water | official_guidance | 联合国统计司CPC3.0，67590解释说明，与草案PDF376–377页一致。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67590 | 破冰/登记/搁置保管范围及清洗消毒/中介/公共安全/油污处置排除，不提供单位等效 |
| ccg-icebreaking | official_guidance | 加拿大海岸警卫队《加拿大破冰》，2026-10-23阅读当前网页。https://www.canada.ca/en/canadian-coast-guard/programs/icebreaking-canada.html | 航运路线/船队/港区清冰及依实际冰况/交通/资源任务，较广加拿大公共项目不自动属于本分类或燃料因子 |
| uk-registry | official_guidance | 英国政府《船舶登记：英国船舶登记机构》，2026-10-23阅读当前网页。https://www.gov.uk/register-a-boat/the-uk-ship-register | 实际船舶身份/证据及登记/续期/变更/注销流程区分，英国资格/费用/年限不是全球PCR要求 |
| dnv-layup | official_guidance | DNV《安全且成本有效的船舶搁置》，2026-10-23阅读公开概述。https://www.dnv.com/services/safe-and-cost-efficient-lay-up-of-vessels/ | 仅支持场址/系泊、维护/值守/检查及保养计划维度；未取得或采用完整推荐实践/指南，不用数值保养限值 |
