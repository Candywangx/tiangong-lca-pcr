---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-road-transport
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他道路运输支持服务：非承运商业引导任务

## 1. 范围与适用性

本PCR覆盖明确的有限子集：对超限公路车辆或车队的非承运商业引导辅助，包括任务特定计划、实际前导后随测高警示通信、任务调动及有记录完成。明确职责团队及路线区段。不声称为CPC67490全部未识别残余道路支持活动提供方法。其他服务族不得仅改发票名称而采用其参考量或清单。

CPC67490给出非中介残余范围及明确排除项，并未正式列举引导车辆。本具体功能是该残余类别中边界明确的有限子集；FHWA证据证明引导作业如何开展，不能证明CPC等价或当前合法许可。各实际数据包须有正面功能合同证据，并评估竞争分类。[来源：`un-cpc-67490`；`fhwa-escort-planning`；`fhwa-escort-movement`]

排除67410客运站运营、67420道路桥隧运营、67430停车、67440拖曳、85340车辆清洁及85610和85630运输中介。另排除实际客货承运、付费乘坐、武装防盗护财保安、公共警务许可管理、独立工程测绘咨询及独立路线报告销售。与实际引导任务一体的路线核查及授权警示不代表公共执法或基础设施运营。[来源：`un-cpc-counterclasses`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-road-transport |
| classification_refs | CPC3.0 67490；较窄语义子集 |
| covered_products | 明确职责团队及完成路线区段的非承运商业超限公路运输引导任务 |
| excluded_products | 全部未明确残余服务族；客站道路运营停车拖曳清洁中介；承运；保安；公共警务；独立工程服务 |
| representative_product | 一次完成且限定信息齐全的非承运引导任务 |
| production_route | 核查任务路线 → 准备设备调动 → 实际引导警示通信 → 验收记录返回 |
| market_state | 具有签认任务职责完成证据的实体道路运输辅助；不产出货物承运服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为指定道路移动完成已识别非承运前导后随测高引导范围 |
| How much | 一次验收任务，声明职责团队路线起讫长度被引导车辆载荷外廓及实际活动 |
| How well | 实际任务验收及通信警示范围、完成位置时间及事件交接记录；不假设通用安全结果 |
| How long or cycle | 完整任务周期，包括归属计划踏勘行驶调动引导延误返回结案 |
| reference_flow_link | `escort_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的非承运道路引导任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务订单编号；正面功能归类依据；商业非承运身份；确切职责团队范围；前导后随测高职责；路线起讫距离；被引导车辆车队数量；尺寸质量约束；日期天气；实际任务引导怠速返回时间距离；动力车辆；警示通信设备；完成交接；供应商自有覆盖 |

item为正式Item(s)的单数别名，实际导出使用Item(s)。单供应商职责与完整多车引导团队是不同限定范围，不能自动视为等价任务。不得把一个合同任务及其前导后随组成部分额外计为完整产出。货物吨数及吨公里描述承运方，不是引导产出。其他残余服务须另行审查适用性任务定义实物活动及清单；不得通用换算服务小时价格或任务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `task_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task计数完成的已识别范围；照片无线电或公里数不是额外完整任务。失败取消工作仍保留归属负荷。 |
| `physical_extent` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 记录各引导车辆实际距离时长怠速及前后职责；不推定平均人员车辆数或载荷尺寸。 |
| `energy_route` | gasoline; diesel; electricity | 质量；能量 | kg; kWh | 采用实测引导消耗及实际充电损耗；排除承运牵引及供应商已含能源。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接受的非承运引导任务，明确职责团队及可用车辆设备；已有制造不代表无负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅经残余适用性审查且明确边界的引导子集；不自动覆盖未知67490任务 |
| recursive_input_rule | 购买引导贡献按确切职责路线时间进入一次；排除供应商已含同一车辆燃料资产 |
| upstream_dataset_requirement | 实际燃料电力车辆设备轮胎制造、道路设施使用、维护及废物处理 |
| disclosure | 职责团队完整性；调动返回；承运边界；道路资产覆盖；归类限制；上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_cycle` | 纳入归属任务计划实际路线核查行驶准备调动引导警示通信等待重试结案返回；独立采购阶段须保留且不得重复完整任务。 | fhwa-escort-planning; fhwa-escort-movement; fhwa-escort-posttrip |
| `boundary_carrier` | 排除货物卡车货物生产承运燃料及载荷运输清单；仅纳入引导车辆实际服务行驶；同一商业发票不合并承运与引导功能。 |  |
| `boundary_assets` | 筛查车辆改装无线电警示灯测高杆轮胎更换基础设施使用及维护；记录实际资产物理寿命份额，避免改装设备重复。 | fhwa-escort-planning |
| `boundary_extension` | 卡片为本单一服务族内有条件示例。实际燃料设备耗材排放废物逐项增加；其他残余服务族须独立审查方法，不能默认采用这些卡。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| escort | 准备执行结清指定非承运引导任务 | required | 实际合同职责团队路线；各行条件有效 | foreground_production | 每参考流 |

### 过程：准备执行结清指定非承运引导任务 (`escort`)

#### 输入

##### 产品流

###### 石油基汽油 (`gasoline`)

实际汽油引导车辆作业时适用；包括归属接近路线核查引导绕行怠速返回，排除货物承运车辆燃料。

- 选定流：石油基汽油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 石油基柴油 (`diesel`)

实际柴油引导支持车辆时适用；声明牌号及生物成分；其他燃料配方须按实际另列。

- 选定流：石油基柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 交流电 (`electricity`)

测量实际电动车及无线电充电和任务归属计划支持用电，保留充电损耗；不把车载发电机内部电力再计为外购电。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 矿物润滑油 (`oil`)

实际归属车辆维护时适用；记录净耗油并防止与购买维护服务重复。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 乘用车子午线轮胎 (`tyre`)

仅实际采用此更换轮胎时适用；记录设计及实测寿命里程；皮卡或其他型式轮胎另列。

- 选定流：乘用车子午线轮胎
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 聚酯警示旗 (`flag`)

实际领用更换时适用；区分耐用旗寿命分配与一次消耗。

- 选定流：聚酯警示旗
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 配置为引导用途的汽油乘用车 (`petrol_car`)

仅实际自有配置；按有记录任务寿命利用分配制造改装退役；不承运货物。

- 选定流：配置为引导用途的汽油乘用车
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 配置为引导用途的柴油皮卡 (`diesel_pickup`)

实际柴油皮卡时适用；保留制造边界及服务使用；排除货物承运卡车。

- 选定流：配置为引导用途的柴油皮卡
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 配置为引导用途的纯电乘用车 (`electric_car`)

实际纯电车辆时适用；披露初装更换电池边界；不预设电池寿命或重复初装电池。

- 选定流：配置为引导用途的纯电乘用车
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 甚高频双向无线电收发机 (`radio`)

实际此通信设备时适用；分配制造使用寿命和实际充电各一次。

- 选定流：甚高频双向无线电收发机
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 琥珀色LED车辆警示灯 (`beacon`)

实际独立购置警示灯时适用；改装车辆已含时不再增加资产。

- 选定流：琥珀色LED车辆警示灯
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 车载玻璃纤维净空测高杆 (`height_pole`)

承担测高杆引导职责时适用；记录实际校准配置及有依据有效服务寿命。

- 选定流：车载玻璃纤维净空测高杆
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 指定道路设施运营通行服务 (`road_service`)

仅实际引导车辆道路使用，按道路桥隧范围及相容上游设施边界分段；车辆使用数据已含基础设施时不得重复。

- 选定流：指定道路设施运营通行服务
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_road。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_road`
- 来源：

#### 输出

##### 产品流

###### 已完成非承运道路引导任务 (`escort_service`)

在声明交接点完成并验收的一项确切职责团队范围；保留实际任务日志及完成证据。

- 选定流：已完成且限定信息齐全的非承运道路引导任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 废矿物润滑油 (`waste_oil`)

实际收集废油时适用；核对维护服务覆盖及接收处理。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废乘用车子午线轮胎 (`waste_tyre`)

实际更换轮胎时适用；明确接收方及回收处理边界；不自动抵扣。

- 选定流：废乘用车子午线轮胎
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废聚酯警示旗 (`waste_flag`)

按材料及接收方记录实际废旗，与耐用旗份额区分。

- 选定流：废聚酯警示旗
- 流属性/单位：质量 / kg
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

仅引导运营方直接燃烧；采用实测碳氧化证据或尾气。不把承运卡车二氧化碳搬入本行。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

引导发动机实际排放，实测或有明确发动机燃料工况系数支持；不默认用法规限值替代。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

物种分辨释放；以二氧化氮计的氮氧化物总量须有组分依据，不能自动作为本物种质量。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

将二氧化氮与一氧化氮区分，保留实际接收环境及工况基准。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

实际按粒径分辨的引导车辆燃烧释放；总颗粒物和相互重叠的粒径组分不得重复计入。磨耗及再悬浮尘须独立来源证据。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_task` | 优先按任务记录燃料充电设备。共享准备派工待命须采用实测职责时间活动驱动，并与同公司期间核对。 |  |
| `allocate_team` | 区分独立交付前导后随团队范围；不得按货值分配，也不得将每辆引导车计为另一个完整团队任务。多载荷须明确共享任务边界。 |  |
| `allocate_assets` | 按有依据寿命利用和任务使用分配实际车辆轮胎设备；明确已含改装电池维护。不预设寿命或回收抵扣。 |  |
| `allocate_return` | 保留空驶接近返回待命及失败任务负荷；论证连续任务间分担，取消工作不得虚构成功任务。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | escort | escort_service | 前景记录 | 订单；正面归类依据；确切职责团队；路线；载荷外廓；车辆编号；起讫；职责；验收；异常 | 用实际行驶通信日志核验签认具体功能工单及完成交接；评估竞争承运保安公共职能。 | item | 每任务 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 签认任务完成；路线职责日志 |
| cp_energy | escort | gasoline; diesel; electricity | 前景记录 | 车辆燃料；油箱期初期末；加油；充电损耗；路线核查引导怠速返回；归属 | 按引导车辆行驶日志及支持仪表核对实际燃料充电测量；排除承运卡车消耗。 | kg; kWh | 行驶及计量区间 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 仪表校准；燃料充电记录；里程日志 |
| cp_material | escort | oil; flag | 前景记录 | 具体材料；领用退回；实际使用；维护覆盖；任务份额 | 核对材料库存服务领用及实际任务维护分配，保留各材料身份。 | kg | 领用及期间衡算 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 库存卡；配方；供应商服务边界 |
| cp_asset | escort | tyre; petrol_car; diesel_pickup; electric_car; radio; beacon; height_pole | 前景记录 | 具体资产；改装边界；安装更换；实际距离时间任务使用；寿命证据 | 将资产关联上游制造退役；观察实际利用并记录有依据物理寿命；避免已含组件重复。 | item | 资产事件及期间 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 资产台账；维护记录；寿命证据 |
| cp_road | escort | road_service | 前景记录 | 引导车辆；实际路段；长度类别通行数；上游运输设施边界 | 按相容道路运营数据核对实际引导接近任务返回路线；保留区段范围并避免道路份额重复。 | item | 每路线区段 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 行驶记录；上游边界核验 |
| cp_waste | escort | waste_oil; waste_tyre; waste_flag | 前景记录 | 具体废物；数量；接收处理；事件；任务份额 | 分种计量实际废物，核对维护覆盖接收文件；不自动替代抵扣。 | kg; item | 每次转移 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 废物联单；接收证据 |
| cp_emission | escort | co2_air; co_air; no_air; no2_air; pm25_air | 前景记录 | 引导发动机；燃料工况；实测尾气或有依据系数版本单位；物种/粒径组分；任务份额 | 采用实际引导工况尾气或明确有依据发动机燃料系数；解析物种避免颗粒重叠；披露未量化轮胎制动磨耗。 | kg | 工况区间及任务 | 同一声明作业期 | 实际指定引导职责团队 | 每参考流 | 尾气燃料检测；系数适用性；载荷单位证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | escort_service | N = 确切声明职责团队范围的完成验收任务数，须为正值。组成警示通信事件不是额外产出。 | cp_task | N |  |
| exchange_allocation | 所有清单行 | 按明确物理驱动将各实测分子归属完整任务周期，再除以N；保留实际引导里程小时及共享返回规则。 | cp_task; cp_energy; cp_material; cp_road; cp_waste | 每参考流交换量 |  |
| asset_allocation | tyre; petrol_car; diesel_pickup; electric_car; radio; beacon; height_pole | 按有依据寿命利用及实际任务使用分配制造维护退役，排除供应商清单已含组件；归属份额除以N。 | cp_asset; cp_task | 每参考流资产份额 |  |
| emission_allocation | co2_air; co_air; no_air; no2_air; pm25_air | 解析实际引导工况的实测或明确有依据物种/粒径组分质量，汇总不重叠区间并将分配质量除以N；缺失系数组分仍是缺口。 | cp_emission; cp_energy; cp_task | 每参考流物种量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_function | escort_service | 须有正面实体职责任务证据并记录残余归类排除；发票或无关NAICS代码不足。 | cp_task; un-cpc-67490 |
| dq_scope | 所有清单行 | 确切职责团队路线范围及期间相同；核对全部实际车辆行驶待命设备供应商覆盖。 | cp_task; cp_energy; cp_asset |
| dq_species | co2_air; co_air; no_air; no2_air; pm25_air | 真实引导来源系数工况单位及原子物种；不得以通用氮氧化物质量替代各氮物种或重复计入颗粒物粒径组分。 | cp_emission |
| dq_identity | 所有清单行 | 数据库关联使用前核定实际流身份；历史计数支持不能证明产品流身份。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_applicability` | 要求有记录非承运道路移动辅助及经审残余归类，包含竞争分类核查；拒绝未经检查其他服务族及CPC明确排除项。 | un-cpc-67490 |
| `validate_task` | 要求唯一escort_service产出1 item及正值N，具备职责团队路线车辆载荷条件完成交接；不得将单前导职责等同整引导团队。 |  |
| `validate_inventory` | 要求能源材料设备废物排放独立，覆盖完整任务周期且无承运设施供应商重复。仅办公电力不能代表实体引导任务。 |  |
| `validate_limits` | 报告未解决身份磨耗尾气缺口归类限制及寿命不确定性。候选检查通过不批准全部残余活动，也不证明许可或法律合规。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程非承运引导支持任务；较窄残余方法 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同一经审实体服务族确切职责团队及可比路线车辆载荷条件，覆盖明确 |
| excluded_use | 通用其他道路服务系数；承运保安公共警务CPC排除功能或无关残余服务族 |
| required_metadata | 全部任务限定信息；正面归类依据；职责团队N；实际车辆活动；设备道路寿命边界；供应商覆盖 |
| required_quality_disclosure | 小于分类叶子的范围；归类推理而非UN点名例子；流UUID缺口；磨耗排放数据；返回分配；寿命不确定性 |
| update_trigger | 服务族功能职责任务团队路线范围动力设备竞争分类解释或重要数据质量变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67490 | official_guidance | UNSD CPC3.0 67490. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67490 | 残余排除及竞争分类筛查；并未点名引导；较窄适用性属于独立推理。 |
| fhwa-escort-planning | official_guidance | FHWA-HOP-16-051, Pilot/Escort Best Practices, chapter I. https://ops.fhwa.dot.gov/publications/fhwahop16051/ch1.htm | 任务路线实际设备准备逻辑；定性技术证据，不是CPC映射或当前法规规格。 |
| fhwa-escort-movement | official_guidance | FHWA-HOP-16-051, Pilot/Escort Best Practices, chapter III. https://ops.fhwa.dot.gov/publications/fhwahop16051/ch3.htm | 不同前导后随警示通信职责及实际载荷移动条件；未采用数值安全系数。 |
| fhwa-escort-posttrip | official_guidance | FHWA-HOP-16-050, Pilot/Escort Training Manual, module6. https://ops.fhwa.dot.gov/publications/fhwahop16050/m6.htm | 任务结案实际里程时间及状况日志；不提供默认消耗寿命。 |
| un-cpc-counterclasses | official_guidance | 联合国统计司CPC3说明：6511公路货运、85240装甲运输、85250保安、91260警务。https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | 竞争功能排除；引导与残余类别之间不自动建立对应。 |
