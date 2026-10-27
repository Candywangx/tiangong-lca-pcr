---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.highway-bridge-and-tunnel-operation-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 公路、桥梁和隧道运营服务

## 1. 范围与适用性

适用于公路、道路、街道、堤道、公路桥梁及隧道运营。每个情景明确一个设施区段及通行方式或车型，包括可用性、交通控制、检查、清洁、排水、冬季养护及实际照明通风支持。收费不等于全部服务；免费通行设施同样纳入。排除停车设施。[来源：`un-cpc-67420`]

排除客户运输、客户车辆制造燃料尾气、独立销售的车辆拖曳及作为独立施工产品销售的建设。底层基础设施寿命期负荷以服务输入分配一次。声明运输系统研究时，可增加明确独立的用户车辆组件，包括经模型支持的路面交通影响；这不是另一套运营方燃烧清单，须与消费方运输数据核对。代表产出是完成一次指定车辆通行；设施许可的自行车或行人方式采用独立限定数据集，不能预设等价性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.highway-bridge-and-tunnel-operation-services |
| classification_refs | CPC 3.0 67420 |
| covered_products | 声明通行和质量条件下明确道路、街道、堤道、桥梁及隧道区段的运营 |
| excluded_products | 停车；用户运输；独立拖车；独立施工产品 |
| representative_product | 跨越声明区段的一次指定车辆完成通行 |
| production_route | 保持并运营可用设施 → 监测通行 → 完成声明终点跨越 |
| market_state | 在已记录交通及运行条件下交付的设施运营服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明道路使用者的一次通行提供养护运行设施 |
| How much | 在明确起讫点及区段长度上的一次完成通行 |
| How well | 声明方式车型、相关质量轴载、路面状况、可用性、交通控制及实际服务验收判据 |
| How long or cycle | 支持该次通行的观测报告期；透明归属待命停运期间及养护负荷 |
| reference_flow_link | `passage_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的设施运营通行服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 设施区段编号；道路桥隧子型；起讫点长度；车道及宽度；方向；通行方式车型；总质量轴载；交通量组成；报告期天气；路面状况；实际通风照明排水；可用性停运；养护范围；建设寿命边界；供电；运营方用户组件划分 |

item为正式Item(s)的单数别名，实际导出使用Item(s)。在选定关口每次完成通行仅计一次，不将入场出场各算一次。长距离道路通行不等于短桥跨越：长度、设施、类别及功能质量强制声明。交通总量用于分配实际运营活动，不意味着小客车与重型卡车的路面磨耗相等。不得隐含使用吨公里作为道路运营产出。零交付交通时没有每次通行结果；单独报告设施负荷，不能除以虚构需求。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `passage_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 用cp_traffic核对关口完成计数及类别区段记录；仅凭收费或进入记录不能证明完成通行。 |
| `extent_quality` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 保留实际区段长度方向类别及报告期；分配取决于损伤时，另述路况及车辆轴载证据。 |
| `deicer_identity` | sodium_chloride; calcium_chloride; magnesium_chloride | 质量 | kg | 记录各配方浓度水合状态；施用产品、各离子及接收环境数量不同。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有现有基础设施的运行区段；披露上游建设及更换份额 |
| starting_condition_role | foreground_start |
| product_classification_scope | 道路街道堤道桥隧运营；停车及用户运输在运营模块之外 |
| recursive_input_rule | 购买运营子服务按明确区段时间边界进入一次；其已含能源材料不得直接重复 |
| upstream_dataset_requirement | 电力燃料、实际材料、废物水处理及声明寿命分配的基础设施建设维护寿命终结 |
| disclosure | 全部纳入设施系统；道路用户组件边界；气候；交通类别组成；寿命养护证据；上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_operation` | 纳入实际供能控制照明通风泵送清洁检查冬季处理修复及事件待命；区分露天道路桥梁及隧道配置。 | fhwa-tunnel-operation |
| `boundary_lifecycle` | 筛查建设材料供应养护修复及寿命终结；声明上游模块边界，防止本期修复已包含于全寿命资产数据。 | fhwa-pavement-lca |
| `boundary_user` | 客户牵引能耗及尾气不进入运营方燃烧。独立声明的用户交通模型须核对同一运输清单只计一次，并核查已含基础设施分配。 |  |
| `boundary_release` | 筛查盐类径流排水处理沉积溢漏及噪声。各实际物种按真实接收方记录，先明确处理再计下游排放；不假设全部除冰剂立即入地表水。 | epa-road-deicing |

## 6. 过程清单结构

卡片为有条件原子交换。每种实际替代燃料除冰剂灯具风机修复材料废水废物及基本排放须增加具体独立行和协议。缺少示例不表示零。资产总体数据与已含组分不能同时计入。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operate | 运营养护声明设施区段 | required | 实际设施配置及各行适用条件 | foreground_production | 每参考流 |

### 过程：运营养护声明设施区段 (`operate`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

归属前分项计量实际照明、隧道通风、泵送、信号、收费及控制负荷；有隧道交通不能证明固定风机能耗强度。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

###### 石油基柴油 (`diesel`)

仅适用于运营方养护车辆或备用发电；排除客户车辆燃料。保留实际燃料类型及怠速返回活动。

- 选定流：石油基柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

###### 自来水 (`water`)

仅记录实际设施清洁用水；计量新鲜取水，不计循环排水流量。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 固体道路除冰氯化钠 (`sodium_chloride`)

实际施用氯化钠时适用；记录纯度、库存及路段。购入盐量不能自动视为淡水排放。

- 选定流：固体道路除冰氯化钠
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 道路除冰氯化钙 (`calcium_chloride`)

仅适用于实际该除冰剂；声明水合状态及浓度。盐水配方须作为明确产品，不能与干基质量互换。

- 选定流：道路除冰氯化钙
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 道路除冰氯化镁 (`magnesium_chloride`)

仅适用于实际该除冰剂；保留水合状态、浓度及净施用量，与其他盐分别记录。

- 选定流：道路除冰氯化镁
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 道路增摩硅砂 (`grit`)

实际冬季撒砂时适用；计量施用及回收质量。盐砂混合物须有独立组分记录或一个具体核验的配方产品身份。

- 选定流：道路增摩硅砂
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 沥青混凝土铺筑混合料 (`asphalt`)

仅记录实际养护混合料；明确等级、再生比例及生产边界。基础设施已含初始路面时，不得再计为本期养护。

- 选定流：沥青混凝土铺筑混合料
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 预拌结构混凝土 (`concrete`)

实际桥梁、隧道或道路修复时适用；声明强度及配合比，上游生产只计一次。

- 选定流：预拌结构混凝土
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 钢筋 (`steel`)

实际修复钢筋时适用；与采购混凝土或资产清单已覆盖的钢材区分。

- 选定流：钢筋
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 铺装道路基础设施 (`road_asset`)

仅适用于明确道路、街道或堤道区段；披露车道宽度数量、结构层及上游施工寿命终结边界。排除已单列桥隧区段。

- 选定流：铺装道路基础设施
- 流属性/单位：长度 / m
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 公路桥梁基础设施 (`bridge_asset`)

实际桥梁区段时适用；明确宽度、荷载及施工清单；防止与引道或维护修复材料重叠。

- 选定流：公路桥梁基础设施
- 流属性/单位：长度 / m
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 公路隧道基础设施 (`tunnel_asset`)

实际隧道时适用；声明洞室、车道、通风电气覆盖及物理寿命；初始已含风机和衬砌不得重复增加。

- 选定流：公路隧道基础设施
- 流属性/单位：长度 / m
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

#### 输出

##### 产品流

###### 已完成设施运营通行 (`passage_service`)

由cp_traffic计数、符合声明设施方式类别起讫点及服务验收条件的一次完成通行。

- 选定流：已完成且限定信息齐全的设施运营通行服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_traffic`
- 来源：

##### 废物流

###### 废沥青路面材料 (`waste_asphalt`)

记录实际移除的材料及接收方；区分回收分配与预设原生生产抵扣。

- 选定流：废沥青路面材料
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 道路排水沉积污泥 (`drain_sludge`)

计量集水井清淤及污染情况；声明干湿基及处理去向。

- 选定流：道路排水沉积污泥
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 隧道清洗废水 (`wash_wastewater`)

收集隧道清洗废水时适用；明确接收和处理，不得把其中物种同时作为直接环境排放重复计入。

- 选定流：隧道清洗废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

仅运营方控制燃烧；按实测燃料碳氧化或尾气计算。客户交通二氧化碳属于独立明确运输组件。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

仅记录物种分辨的运营方尾气；未经有依据的组分划分，以二氧化氮计的氮氧化物总量不能证明本物种质量。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

仅实际运营方尾气物种；不得将客户隧道尾气当作新增运营方燃烧源。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 氯离子，排入地表水 (`chloride_water`)

仅量化后归属运营方、排向明确地表水接收方的释放；考虑滞留、回收、处理及其他环境去向。

- 选定流：氯离子，排入地表水
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 钠离子，排入地表水 (`sodium_water`)

测量或独立衡算钠释放；不得把整份氯化钠产品质量重复填入每个离子物种。

- 选定流：钠离子，排入地表水
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 钙离子，排入地表水 (`calcium_water`)

实际运营方材料产生可测量或可衡算钙排放时适用；区分自然上游背景。

- 选定流：钙离子，排入地表水
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 镁离子，排入地表水 (`magnesium_water`)

存在实测或衡算镁排放时适用；其他接收环境须另列流。

- 选定流：镁离子，排入地表水
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

仅实测或有依据的运营方燃烧细颗粒质量；排除重复总颗粒物、用户车辆排放及未测道路扬尘。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_activity` | 优先区段回路计量；用有凭据物理驱动因素区分与交通无关可用性负荷及需求敏感负荷，再分配至类别完成通行；类别份额与设施总量核对。 |  |
| `allocate_wear` | 路面结构磨耗须有观测养护及有依据车辆荷载损伤证据；不预设通用轴载幂次或小客车当量。气候日历老化分别分配。 |  |
| `allocate_life` | 按有依据物理寿命寿命期交通及路况情景分配建设寿命终结；区分资产数据已含本期养护；明确检验寿命交通不确定性，不臆造默认年限。 | fhwa-pavement-lca |
| `allocate_recovery` | 声明实际移除的路面材料及处理回收边界；不自动抵扣避免材料或处置。保留运营方和供应商服务边界。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_traffic | operate | passage_service | 交通记录 | 区段关口；方式类别；进出记录；完成数；长度方向；轴载质量观测；运行停运期 | 将计数收费交通传感记录匹配完成区段通行；核查重复豁免及类别。 | item | 每次通行及期间 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 计数校准；关口核对 |
| cp_utility | operate | electricity; diesel | 公用工程记录 | 回路；输入输出；燃料库存；领用；实际通风照明泵送；运营车辆怠速；分配 | 采用校准仪表及燃料衡算；仅核对运营方控制消耗。 | kWh; kg | 计量区间 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 仪表校准；能源发票；燃料库存 |
| cp_material | operate | water; sodium_chloride; calcium_chloride; magnesium_chloride; grit; asphalt; concrete; steel | 材料作业事件记录 | 具体配方；浓度水合；领用退回；施用修复量；区段；日期；养护边界 | 逐产品作业计量实际净用量；保留盐纯度配合比及修复区段。 | kg; m3 | 每次施用修复 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 库存记录；供应商规格；工单 |
| cp_asset | operate | road_asset; bridge_asset; tunnel_asset | 资产生命周期记录 | 区段；长宽车道；上游模块边界；建设更换；寿命证据；寿命交通；类别驱动 | 将实物设施关联上游清单及有凭据寿命期交通路况情景；隔离重叠养护。 | m | 资产变更及年度核对 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 资产台账；建设清单；检查寿命证据 |
| cp_waste | operate | waste_asphalt; drain_sludge; wash_wastewater | 废物转移记录 | 具体废物；数量；含水；组成；接收方；处理；期间；分配 | 逐实际废物计量，保留干湿基，核实去向处理只计一次。 | kg; m3 | 每次转移 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 废物联单；接收记录；组成检测 |
| cp_release | operate | co2_air; no_air; no2_air; pm25_air; chloride_water; sodium_water; calcium_water; magnesium_water | 排放测量记录 | 运营源；物种；接收环境；浓度；排水体积；上游背景；滞留回收；燃料尾气证据 | 通过实测排放量及物种数据或有依据的衡算量化运营方排放；核对盐输入及全部接收去向，不假设全部盐立即随径流排出。 | kg | 排放事件及期间 | 同一声明报告期 | 明确区段及类别分配 | 每参考流 | 采样流量报告；质量衡算；来源归属 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| passage_denominator | passage_service | N为确切区段方式类别期间的正值完成通行数；不得将进入退出合并为两个产出。 | cp_traffic | N |  |
| exchange_allocation | 所有清单行 | 按有凭据区段类别物理份额分配实际分子，再除以正值N；在同服务期保留待命停运养护负荷。 | cp_traffic; cp_utility; cp_material; cp_waste | 每参考流交换量 |  |
| release_balance | co2_air; no_air; no2_air; pm25_air; chloride_water; sodium_water; calcium_water; magnesium_water | 逐源物种接收方采用实际测量或独立有依据完整衡算；区分背景及滞留回收质量，分配运营方份额后除以N。不得把盐产品质量复制为离子，或把用户排放复制为运营尾气。 | cp_release; cp_material; cp_traffic | 每参考流物种量 |  |
| asset_share | road_asset; bridge_asset; tunnel_asset | 按区段及相关寿命期服务利用类别驱动分配有证据寿命期清单，再按实际报告期份额和N计算；记录寿命交通不确定性并避免养护重叠。 | cp_asset; cp_traffic | 每参考流基础设施份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_function | passage_service | 明确区段方式类别长度及实际路况可用性；不同设施车型不因计数相同而等价。 | cp_traffic |
| dq_balance | 所有清单行 | 设施活动交通期间总量份额和上游边界须匹配；不得臆造强度默认交通或物理寿命。 | cp_utility; cp_asset; cp_traffic |
| dq_discharge | chloride_water; sodium_water; calcium_water; magnesium_water | 保留物种来源背景及接收环境证据；未解决径流属于缺口，不是零释放。 | cp_release |
| dq_identity | 所有清单行 | 数据库关联使用前核定各实际流身份；归档支持核验不是新的流查询。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求唯一passage_service产出1 item及正值N，具备起讫点长度方式类别期间验收条件；停车及用户货运不得改名为本服务。 | un-cpc-67420 |
| `validate_components` | 道路桥隧资产区段、本期养护、运行负荷及供应商模块各核对一次；用户燃料尾气清单保持独立。 |  |
| `validate_atomic` | 拒绝除冰剂能源废物物种合并标签、将盐总质量当各离子、未经核验接收环境及总量组件释放重复。 |  |
| `validate_coverage` | 要求实际设施配置资产寿命交通证据计量覆盖及明确上游缺口；部分运营方数据不能声称完整运输系统影响。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程设施运营服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 等效声明设施区段功能质量方式类别期间及基础设施用户组件边界 |
| excluded_use | 通用道路桥隧系数；停车；用户运输；未限定吨公里；不兼容设施车型 |
| required_metadata | 全部通行限定信息；N；交通组成；能源材料计量；冬季养护及排水记录；物理寿命交通情景；供应商覆盖 |
| required_quality_disclosure | UUID缺口；径流物种不确定性；资产养护重叠核查；路况交通覆盖；用户组件排除；上游缺失 |
| update_trigger | 设施类别交通路况变化；气候除冰剂变化；能源通风控制；养护寿命假设；合同数据边界变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67420 | official_guidance | UNSD CPC3.0 67420. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67420 | 道路桥隧范围及停车排除；不提供生命周期评价系数。 |
| fhwa-pavement-lca | official_guidance | FHWA-HIF-16-014, Pavement Life Cycle Assessment Framework (2016), official publication description. https://www.fhwa.dot.gov/PAVEMENT/pub_details.cfm?id=998 | 仅用于寿命阶段筛查；未采用完整框架计算及数值默认值。 |
| fhwa-tunnel-operation | official_guidance | FHWA-HRT-12-012, Innovations and Best Practices for Roadway Tunnels (2012). https://www.fhwa.dot.gov/publications/focus/12apr/12apr01.cfm | 设施特定照明检查通风应急系统及养护筛查；不推定通用能耗系数或现行法规要求。 |
| epa-road-deicing | official_guidance | US EPA, Winter is Coming! And with it, tons of salt on our roads (2020). https://www.epa.gov/snep/winter-coming-and-it-tons-salt-our-roads | 实际除冰剂配方区分及接收环境筛查；未采用报告数量比较性能释放比例或毒性阈值。 |
