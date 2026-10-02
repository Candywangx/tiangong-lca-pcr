---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.slate
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 板岩

## 1. 范围与适用性

本 PCR 适用于一种声明采石或粗加工出口的天然板岩块、矿山板坯及简单劈裂或切割半成品。区分一体化采出与接收带负荷石料的独立加工。按实际纳入截至出口的场址开发、采出、切割或劈裂、分选、堆存装载、水废物及粉尘控制和可归属复垦。分别记录采出、初次切割、沿劈理劈裂及分选。天然劈理或手工劈裂不意味着采石燃料或上游负荷为零。 后续精加工、安装及建筑服务性能为独立数据集。 `ifc-construction-2007`, `nsc-slate-2009`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.slate |
| classification_refs | CPC 3.0:15110 |
| covered_products | 天然板岩块、矿山板坯及简单劈裂或切割半成品 |
| excluded_products | 抛光或涂层成品砖；安装屋面系统；工程或再造石；作为参考产品的骨料输出 |
| representative_product | 板岩在声明粗加工出口 |
| production_route | 采石场开发及复垦; 岩石采出及荒料搬运; 粗切、劈裂及分选; 水、废物及粉尘管理; 验收产品装载 |
| market_state | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应 1 kg 合格板岩，不宣称每安装面积或服务寿命等效 |
| How much | 1 kg |
| How well | 场址及年份；地质及采出方式；一体化或独立起点；板状劈理方向；层间缺陷及夹杂；劈裂厚度及毛料尺寸；原料或半成品状态；水分；拒收原因；装载出口；净质量及库存变化；切割或劈裂损失；水源及退水；废物去向；分配；开发关闭寿命产量基准；代表 UUID 仅用于劈裂切割半成品板岩，不用于原始矿山板坯或成品屋面产品 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 半成品板岩块 `6aedc8f0-0b92-4f1c-ba77-00d37bdd4c6b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及年份；地质及采出方式；一体化或独立起点；板状劈理方向；层间缺陷及夹杂；劈裂厚度及毛料尺寸；原料或半成品状态；水分；拒收原因；装载出口；净质量及库存变化；切割或劈裂损失；水源及退水；废物去向；分配；开发关闭寿命产量基准；代表 UUID 仅用于劈裂切割半成品板岩，不用于原始矿山板坯或成品屋面产品 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为声明出口正的验收净收到基石材质量（kg），排除包装、拒收及退货。独立称量净装载，或用实测质量、密度及实际形状验证件数体积记录，不假定通用密度或单件质量。核对采出或供给石料、适销石材、废料、锯缝或浆渣固体、库存变化及粉尘。分别测量水分及固体比例，循环切割水不重复作为新取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采石从实际岩体矿床开始，独立粗加工从购入原石开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 天然板岩块、矿山板坯及简单劈裂或切割半成品 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址及年份；地质及采出方式；一体化或独立起点；板状劈理方向；层间缺陷及夹杂；劈裂厚度及毛料尺寸；原料或半成品状态；水分；拒收原因；装载出口；净质量及库存变化；切割或劈裂损失；水源及退水；废物去向；分配；开发关闭寿命产量基准；代表 UUID 仅用于劈裂切割半成品板岩，不用于原始矿山板坯或成品屋面产品 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于一种声明采石或粗加工出口的天然板岩块、矿山板坯及简单劈裂或切割半成品。区分一体化采出与接收带负荷石料的独立加工。按实际纳入截至出口的场址开发、采出、切割或劈裂、分选、堆存装载、水废物及粉尘控制和可归属复垦。分别记录采出、初次切割、沿劈理劈裂及分选。天然劈理或手工劈裂不意味着采石燃料或上游负荷为零。 后续精加工、安装及建筑服务性能为独立数据集。 | `ifc-construction-2007`, `nsc-slate-2009` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 采石场开发及复垦 | conditional | 一体化采石场及可归属关闭 | 前景生产 | per 1 kg reference flow |
| extraction | 岩石采出及荒料搬运 | conditional | 一体化原生采石 | 前景生产 | per 1 kg reference flow |
| roughing | 粗切、劈裂及分选 | conditional | 实际粗加工作业 | 前景生产 | per 1 kg reference flow |
| controls | 水、废物及粉尘管理 | conditional | 实际场址控制 | 前景生产 | per 1 kg reference flow |
| dispatch | 验收产品装载 | required | 所有声明场址 | 前景生产 | per 1 kg reference flow |

### 过程：采石场开发及复垦 (`development`)

#### 输入

##### 产品流

###### 开发及复垦柴油 (`development_diesel`)

实际剥离及复垦设备，保留寿命产量归属，不逐年重复全额计入。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

#### 输出

##### 废物流

###### 采石场覆盖层 (`overburden`)

实际剥离覆盖层，表土库存回用及生境特定土地变化另作记录。

- 选定流: 采石场覆盖层
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_overburden 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_overburden`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

### 过程：岩石采出及荒料搬运 (`extraction`)

#### 输入

##### 产品流

###### 采出及场内运输柴油 (`quarry_diesel`)

实际设备及载空移动，排除出口外下游公路运输。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_quarry_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_quarry_diesel`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 采出机械用电 (`extraction_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际钻机、金刚石绳切或电力起吊，排除重复粗切表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_extraction_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_power`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际 ANFO 爆破路线，保留装药及产品质量影响。其他炸药须独立身份，无爆破路线排除此行。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

##### 基本流

###### 地质矿床中的板岩 (`rock_resource`)

仅一体化原生采出，记录实际岩性、质量及矿床，与覆盖层分离。

- 选定流: 地质矿床中的板岩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_rock_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rock_resource`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

#### 输出

##### 废物流

###### 拒收板岩矿山石料 (`quarry_reject`)

实际损坏或不适合的采出岩石转交管理，回填或骨料回收单独声明。

- 选定流: 拒收板岩矿山石料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_quarry_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_quarry_reject`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

### 过程：粗切、劈裂及分选 (`roughing`)

#### 输入

##### 产品流

###### 供给原料板岩 (`supplied_stone`)

仅独立加工，供应方承担采出及约定运输，一体化内部荒料转移抵消。

- 选定流: 供给原料板岩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_stone 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_stone`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 粗切及劈裂用电 (`roughing_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅实际锯、劈裂机或压缩机；手工劈裂保留实际其他公用投入，不虚构电力。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_roughing_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_roughing_power`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 更换金刚石切割绳 (`diamond_wire`)

仅实际金刚石绳设备，更换绳质量按实测寿命切割产量分配，每种锯片或不同工具另列。

- 选定流: 更换金刚石切割绳
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_diamond_wire 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diamond_wire`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 供给切割水补充量 (`cutting_water`)

仅购入新水，循环矿浆及水属于内部，直接取水须独立资源及流域记录。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_cutting_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cutting_water`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

#### 输出

##### 废物流

###### 切割或劈裂板岩边角料 (`cut_reject`)

仅实际拒收固体块，区分锯缝浆渣及验收产品品级。

- 选定流: 切割或劈裂板岩边角料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_cut_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cut_reject`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

### 过程：水、废物及粉尘管理 (`controls`)

#### 输入

##### 产品流

###### 场址控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际泵送、沉淀脱水及抑尘，共用表计分配一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

#### 输出

##### 废物流

###### 锯切板岩污泥 (`saw_sludge`)

实际转交的湿锯缝污泥，测量干固体、水分及管理去向，不重复计入回用固体。

- 选定流: 锯切板岩污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_saw_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_saw_sludge`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 转交处理的石材工艺废水 (`water_purge`)

仅实际排污及转交处理；受纳水排放需物种、介质行及退水体积。

- 选定流: 转交处理的石材工艺废水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_water_purge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_purge`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

##### 基本流

###### 矿物 PM10 排入室外空气 (`pm10_air`)

控制后实际采石、运输及切割粉尘，保留实测粒径组成基准及实际矿物粉尘身份。

- 选定流: 矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅实际前景燃料燃烧，保留实测燃料碳平衡及可追溯因子；碳酸盐岩石不自动成为燃烧或煅烧排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

### 过程：验收产品装载 (`dispatch`)

#### 输入

##### 产品流

###### 装载柴油 (`loading_diesel`)

实际验收产品装载设备，区分采石搬运及下游运输。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

#### 输出

##### 产品流

###### 板岩在声明粗加工出口 (`final_product`)

已核验代表身份为精加工及包装之前的劈裂切割半成品板岩。原始荒料及不相容成品状态须独立实际流身份。

- 选定流: 半成品板岩块 `6aedc8f0-0b92-4f1c-ba77-00d37bdd4c6b`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `ifc-construction-2007`, `nsc-slate-2009`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分采出、粗切或劈裂及下游精加工。开发及关闭按披露寿命验收产量归属一次。真实共同产出的品级或副产品保留未分配清单。作为骨料出售或作回填回用的废料不自动获得避免产品抵扣，披露实际负荷及去向。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_overburden | development | `overburden` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_rock_resource | extraction | `rock_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_quarry_diesel | extraction | `quarry_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_quarry_reject | extraction | `quarry_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用匹配期间称量、带实测堆积密度的测量体积，或校准浆体流量及固体化验；记录湿干基准、实际石种、库存变化、回用比例及处理回填或骨料去向，分别核对固体及水。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_stone | roughing | `supplied_stone` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_roughing_power | roughing | `roughing_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_diamond_wire | roughing | `diamond_wire` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留购入及退役工具质量、实际更换比例、工具寿命及该寿命内实测可归属产量；可重复使用锯绳计入一次，不采用通用 kg/工具或单位石材锯绳因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_cutting_water | roughing | `cutting_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_cut_reject | roughing | `cut_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用匹配期间称量、带实测堆积密度的测量体积，或校准浆体流量及固体化验；记录湿干基准、实际石种、库存变化、回用比例及处理回填或骨料去向，分别核对固体及水。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_saw_sludge | controls | `saw_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用匹配期间称量、带实测堆积密度的测量体积，或校准浆体流量及固体化验；记录湿干基准、实际石种、库存变化、回用比例及处理回填或骨料去向，分别核对固体及水。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_water_purge | controls | `water_purge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用匹配期间称量、带实测堆积密度的测量体积，或校准浆体流量及固体化验；记录湿干基准、实际石种、库存变化、回用比例及处理回填或骨料去向，分别核对固体及水。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按校准地磅或称量独立记录正的验收净装载 kg D，扣除包装、退货及拒收并核对库存。按件、面积或体积采集时，对实测尺寸、实际形状及密度净质量采样，记录该产品状态转换为 kg 的方法及不确定性，不假设荒料或单件重量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点的一种声明荒料、矿山板坯或简单毛坯，带实测水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为声明出口正的验收净收到基石材质量（kg），排除包装、拒收及退货。独立称量净装载，或用实测质量、密度及实际形状验证件数体积记录，不假定通用密度或单件质量。核对采出或供给石料、适销石材、废料、锯缝或浆渣固体、库存变化及粉尘。分别测量水分及固体比例，循环切割水不重复作为新取水。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为声明出口正的验收净收到基石材质量（kg），排除包装、拒收及退货。独立称量净装载，或用实测质量、密度及实际形状验证件数体积记录，不假定通用密度或单件质量。核对采出或供给石料、适销石材、废料、锯缝或浆渣固体、库存变化及粉尘。分别测量水分及固体比例，循环切割水不重复作为新取水。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应 1 kg 合格板岩，不宣称每安装面积或服务寿命等效 |
| excluded_use | 抛光或涂层成品砖；安装屋面系统；工程或再造石；作为参考产品的骨料输出 |
| required_metadata | 场址及年份；地质及采出方式；一体化或独立起点；板状劈理方向；层间缺陷及夹杂；劈裂厚度及毛料尺寸；原料或半成品状态；水分；拒收原因；装载出口；净质量及库存变化；切割或劈裂损失；水源及退水；废物去向；分配；开发关闭寿命产量基准；代表 UUID 仅用于劈裂切割半成品板岩，不用于原始矿山板坯或成品屋面产品 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | 采石路线、粉尘、水、废物及土地范围；不采用通用消耗区间。 |
| nsc-slate-2009 | literature | Natural Stone Council / University of Tennessee Center for Clean Products, Slate Quarrying and Processing: A Life-Cycle Inventory, August 2009, printed pp.2–3 (PDF pp.5–6), retained original mirrored by Vermont Slate. https://vermontslateco.com/wp-content/uploads/2016/03/Slate-Quarrying-and-Processing-A-life-Cycle-Inventoty.pdf | 板岩劈理、采出、劈裂、废料及加工交接，不采用历史调查强度。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
