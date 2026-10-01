---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.chalk-and-dolomite
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 白垩和白云石

## 1. 范围与适用性

本 PCR 适用于声明采石制备装载或明确纳入工厂收料出口供应的天然白垩及未煅烧未烧结白云石。覆盖保留天然碳酸盐身份的原矿及实际洗选破碎筛分研磨粉化物理提纯矿物品级，以及粗修整或仅切成矩形块板的原白云石。纳入实际选择性露天或独立确认地下采出、供给矿物制备、干湿研磨分级、条件性洗选浮选或其他物理提纯脱水游离水干燥搬运包装。过程按实际路线决定，不是通用白垩白云石配方。地质原矿批次仅保留同一已确认矿物产品身份时均化，分别指定每批供应及交换。配方混合涂层化学沉淀碳酸钙化学转化碳酸盐氧化物产品及书写绘画裁缝台球粉笔属于不同产品。煅烧烧结团聚白云石及白云石灰为独立产品类别，CPC3 独立列示煅烧或团聚白云石。不能因完整 HS 白云石税目也含煅烧品而扩大原矿边界。磷质白垩普通化工用钙质石建筑石骨料参考产品采用已确认的具体类别，实际骨料共输出称量分配，不重复计为白垩白云石输出。纳入至声明出口可归属开发复垦废物粉尘水控制。化工玻璃农业石灰水泥耐火应用属于矿物供应下游，不是强制前景操作。 `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.chalk-and-dolomite |
| classification_refs | CPC 3.0:16330 |
| covered_products | 天然白垩及未煅烧未烧结白云石：实际原矿物理制备或粉化品级；粗修整或仅切成矩形块板的原白云石 |
| excluded_products | 煅烧烧结团聚白云石白云石灰、白云石捣打料耐火制品；生熟水硬石灰水泥；沉淀或化学转化碳酸钙涂层配方矿物产品书写绘画裁缝台球粉笔；磷质白垩；独立分类骨料尺寸石普通钙质进料；下游使用纯运输服务 |
| representative_product | 相容声明工厂出口的原白云石 |
| production_route | 采石开发及复垦; 原白垩白云石采出; 原矿机械制备; 条件性湿法矿物提纯; 未煅烧矿物干燥; 采石水粉尘废物控制; 矿物包装及声明交付 |
| market_state | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明矿物出口供应1 kg验收净收到基白垩或未煅烧白云石，浆料须声明固含，不是1 kg纯干碳酸盐或氧化物 |
| How much | 1 kg |
| How well | 场址年份；白垩白云石地质矿物身份；实际露天井下供给库存路线；未煅烧物相制备；预期品级产品分类；粒径块体几何；游离水浆料固含；干基钙镁碳酸盐杂质化验及氧化物当量与实际氧化物区别；灼烧失重方法；验收输出库存退货；供应分配；袋装散装；出口明确纳入运输；水流域排放；废物去向寿命复垦基准；代表 UUID 仅用于相容工厂出口玻璃配合料原白云石，不用于白垩煅烧白云石 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 白云石 `c15705ab-58b1-420f-ac59-3938bf8cda76` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；白垩白云石地质矿物身份；实际露天井下供给库存路线；未煅烧物相制备；预期品级产品分类；粒径块体几何；游离水浆料固含；干基钙镁碳酸盐杂质化验及氧化物当量与实际氧化物区别；灼烧失重方法；验收输出库存退货；供应分配；袋装散装；出口明确纳入运输；水流域排放；废物去向寿命复垦基准；代表 UUID 仅用于相容工厂出口玻璃配合料原白云石，不用于白垩煅烧白云石 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收。游离水质量分数 w 满足0 <= w <1，干矿物固体 = D*(1-w)。浆料实测干固体分数 s 满足0 < s <=1，干固体 = D*s；使用一致游离水固含基准，不能重复校正。保持 D 为清单分母，将干基输出作为限定信息披露。分别核对干进料全部验收品级联产品拒收细粉污泥捕集灰库存及新水循环蒸发排水。同基准匹配实际碳酸盐物相钙镁杂质化验；报告 CaO/MgO 当量不能证明游离氧化物或煅烧。灼烧失重可能含碳酸盐分解，不自动是水分。改变碳酸盐身份的干燥须审查产品边界并实测实际气体，不假定干燥损失。普通机械碳酸盐制备不产生煅烧 CO2 或下游碳化抵扣；实际燃烧确认化学损失排放逐项测量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采石从实际具名白垩白云石地质矿床开始，独立制备从带独立上游供应方原矿开始；抵消内部矿山工厂转移 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 天然白垩及未煅烧未烧结白云石：实际原矿物理制备或粉化品级；粗修整或仅切成矩形块板的原白云石 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；白垩白云石地质矿物身份；实际露天井下供给库存路线；未煅烧物相制备；预期品级产品分类；粒径块体几何；游离水浆料固含；干基钙镁碳酸盐杂质化验及氧化物当量与实际氧化物区别；灼烧失重方法；验收输出库存退货；供应分配；袋装散装；出口明确纳入运输；水流域排放；废物去向寿命复垦基准；代表 UUID 仅用于相容工厂出口玻璃配合料原白云石，不用于白垩煅烧白云石 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明采石制备装载或明确纳入工厂收料出口供应的天然白垩及未煅烧未烧结白云石。覆盖保留天然碳酸盐身份的原矿及实际洗选破碎筛分研磨粉化物理提纯矿物品级，以及粗修整或仅切成矩形块板的原白云石。纳入实际选择性露天或独立确认地下采出、供给矿物制备、干湿研磨分级、条件性洗选浮选或其他物理提纯脱水游离水干燥搬运包装。过程按实际路线决定，不是通用白垩白云石配方。地质原矿批次仅保留同一已确认矿物产品身份时均化，分别指定每批供应及交换。配方混合涂层化学沉淀碳酸钙化学转化碳酸盐氧化物产品及书写绘画裁缝台球粉笔属于不同产品。煅烧烧结团聚白云石及白云石灰为独立产品类别，CPC3 独立列示煅烧或团聚白云石。不能因完整 HS 白云石税目也含煅烧品而扩大原矿边界。磷质白垩普通化工用钙质石建筑石骨料参考产品采用已确认的具体类别，实际骨料共输出称量分配，不重复计为白垩白云石输出。纳入至声明出口可归属开发复垦废物粉尘水控制。化工玻璃农业石灰水泥耐火应用属于矿物供应下游，不是强制前景操作。 | `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 采石开发及复垦 | conditional | 可归属实际土地表土基础设施关闭 | 前景生产 | per 1 kg reference flow |
| extraction | 原白垩白云石采出 | conditional | 实际具名地质采出，仅发生时爆破 | 前景生产 | per 1 kg reference flow |
| preparation | 原矿机械制备 | conditional | 实际破碎研磨分级及条件性原块修整锯切 | 前景生产 | per 1 kg reference flow |
| wet | 条件性湿法矿物提纯 | conditional | 实际洗选淘洗或物理分离杂质，保留矿物结构；浆料出口截止干燥前 | 前景生产 | per 1 kg reference flow |
| drying | 未煅烧矿物干燥 | conditional | 仅实际除游离水并保留原碳酸盐身份 | 前景生产 | per 1 kg reference flow |
| controls | 采石水粉尘废物控制 | conditional | 实际处理释放残余物管理 | 前景生产 | per 1 kg reference flow |
| dispatch | 矿物包装及声明交付 | required | 每个声明输出出口；包装收料运输有条件 | 前景生产 | per 1 kg reference flow |

### 过程：采石开发及复垦 (`development`)

#### 输入

##### 产品流

###### 采石开发柴油 (`development_diesel`)

实际土方复垦按实测寿命产量计一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：原白垩白云石采出 (`extraction`)

#### 输入

##### 产品流

###### 采石采出场内运输柴油 (`extraction_diesel`)

实际钻孔挖掘装载场内运输，不重复出口交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_extraction_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_diesel`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 矿物采出用电 (`extraction_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际电动采出排水，仅实际井下路线纳入通风。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_extraction_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际 ANFO 爆破，无爆破白垩白云石排除，雷管其他炸药另列。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### 基本流

###### 地质矿床中的天然白垩 (`chalk_resource`)

实际白垩资源，实测碳酸盐杂质，非沉淀碳酸钙。

- 选定流: 地质矿床中的天然白垩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_chalk_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chalk_resource`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 地质矿床中的未煅烧白云石岩 (`dolomite_resource`)

实际白云石地质物相，不包括所有含镁石灰岩。

- 选定流: 地质矿床中的未煅烧白云石岩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_dolomite_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dolomite_resource`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 拒收采石矿物岩 (`rejected_rock`)

实际非产品拒收岩带矿物含量去向，区别保留表土适销品级。

- 选定流: 拒收采石矿物岩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_rejected_rock 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_rock`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：原矿机械制备 (`preparation`)

#### 输入

##### 产品流

###### 供给天然白垩 (`supplied_chalk`)

独立制备匹配未煅烧供应品级水化验上游，内部转移抵消。

- 选定流: 供给天然白垩
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_chalk 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_chalk`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 供给玻璃配合料原白云石 (`supplied_dolomite`)

仅相容原白云石产品质量流工厂状态，数据库身份不设纯度玻璃配方，其他品级须独立身份。

- 选定流: 白云石 `c15705ab-58b1-420f-ac59-3938bf8cda76`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_dolomite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_dolomite`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 原矿制备用电 (`preparation_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎干湿研磨分级输送，表计归属一次，不假定所有回路。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_preparation_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_preparation_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 原白云石块锯切用电 (`saw_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅粗修整或简单矩形块板切割，精加工石制品另有出口。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_saw_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_saw_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 金刚石刀头锯片 (`diamond_saw_tool`)

仅实际耗用块切工具，其他刀具刀头逐项实际交换。

- 选定流: 金刚石刀头锯片
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_diamond_saw_tool 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diamond_saw_tool`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 钢磨球 (`grinding_balls`)

仅实际耗用矿物研磨钢球，其他介质衬板分别另列。

- 选定流: 钢磨球
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_grinding_balls 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grinding_balls`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### 输出

##### 产品流

###### 适销白云石建筑骨料 (`aggregate_coproduct`)

仅独立回收称量确认规格骨料共输出，带独立类别供应分配。

- 选定流: 适销白云石建筑骨料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_aggregate_coproduct 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aggregate_coproduct`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：条件性湿法矿物提纯 (`wet`)

#### 输入

##### 产品流

###### 购入湿法制备补充水 (`wet_water`)

实际新购入洗选研磨锯冷水按用途归属，排除内部回水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wet_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wet_water`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 湿法矿物提纯脱水用电 (`wet_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际洗选淘洗浮选浓密过滤回路，纯干法或干燥前浆料出口排除未发生单元。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_wet_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wet_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 油酸捕收剂 (`oleic_acid`)

仅实际确认油酸物理矿物浮选，非通用碳酸盐药剂；每种其他使用药剂独立行。

- 选定流: 油酸捕收剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_oleic_acid 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_oleic_acid`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 硅酸钠分散剂 (`sodium_silicate`)

仅实际具名供应配方保留矿物身份，其他分散剂逐项另列。

- 选定流: 硅酸钠分散剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_silicate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_silicate`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 阴离子聚丙烯酰胺絮凝剂 (`polyacrylamide`)

仅实际指定浓密沉降聚合物带有效含量，不假定必需。

- 选定流: 阴离子聚丙烯酰胺絮凝剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_polyacrylamide 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_polyacrylamide`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 碳酸盐矿物湿法制备拒收污泥 (`wet_sludge`)

实际最终转交洗选浮选锯切污泥，带固含物相去向，内部回收不是废物转移。

- 选定流: 碳酸盐矿物湿法制备拒收污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wet_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wet_sludge`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：未煅烧矿物干燥 (`drying`)

#### 输入

##### 产品流

###### 原矿干燥器天然气 (`dryer_natural_gas`)

仅实际燃气游离水干燥并保留碳酸盐物相，其他燃料热源逐项另列。

- 选定流: 原矿干燥器天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_dryer_natural_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dryer_natural_gas`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 原矿干燥器用电 (`dryer_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅原矿出口内实际干燥风机，无白云石窑石灰煅烧用电。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_dryer_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dryer_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：采石水粉尘废物控制 (`controls`)

#### 输入

##### 产品流

###### 矿物水粉尘控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际排水回用处理除尘，避免重复制备表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### 基本流

###### 从河流取用的淡水 (`river_water`)

实际直接河流取水流域季节匹配用途，使用地下水另列。

- 选定流: 从河流取用的淡水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_river_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_river_water`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 处置的碳酸盐矿物除尘灰 (`collector_dust`)

实际捕集灰处置，区别返送适销矿物。

- 选定流: 处置的碳酸盐矿物除尘灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_collector_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_collector_dust`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 转交处理的矿物制备废水 (`wastewater`)

实际外部处理转移，受纳水体积污染物分别测量。

- 选定流: 转交处理的矿物制备废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### 基本流

###### 碳酸盐矿物 PM10 排入室外空气 (`pm10_air`)

实际控制后矿山工厂装载释放，带粒径介质，捕集灰不是排放。

- 选定流: 碳酸盐矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

实际前景化石燃料燃烧，非碳酸盐煅烧；上游燃烧计一次。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 悬浮矿物固体排入受纳水体 (`tss_water`)

仅实际受纳介质悬浮固体排放，匹配背景净水体积，管理污泥不自动是释放。

- 选定流: 悬浮矿物固体排入受纳水体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_tss_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tss_water`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### 过程：矿物包装及声明交付 (`dispatch`)

#### 输入

##### 产品流

###### 矿物出口搬运柴油 (`loading_diesel`)

实际出口装载搬运，区别场内运输交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 纳入矿物交付柴油 (`delivery_diesel`)

仅明确纳入收料出口的实际前景交付，供应运输另列不重复燃料。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_delivery_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_diesel`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### 牛皮纸矿物袋 (`paper_bag`)

仅实际耗用牛皮纸包装，排除产品净质量；塑料袋内衬托盘使用时逐项另列。

- 选定流: 牛皮纸矿物袋
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_paper_bag 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_paper_bag`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### 输出

##### 产品流

###### 相容声明工厂出口的原白云石 (`final_product`)

代表为已核验 Dolomite / 白云石产品质量流，工厂生产混合，玻璃配合料原料投入。仅相容原矿工厂装载收料出口适用，纳入交付时计其负荷。白垩其他原矿品级浆料原块须独立确认身份。不能将本 UUID 用于煅烧白云石灰或强加玻璃配方。

- 选定流: 白云石 `c15705ab-58b1-420f-ac59-3938bf8cda76`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 细分实际台阶原块锯切粉体制备及独立搬运品级。保留矿物骨料其他回收产品共同未分配清单，按实测物理因果或必要时匹配经济分配价格敏感性。工业用途不合格品仅在确认规格去向后可作合格骨料农用石灰原料，不自动是废物或免费联产品。计供给旧库存上游负荷或有据截断及实际复垦；寿命开发关闭按实测验收输出分配一次。不自动抵扣避免原生矿物处置或未来碳吸收。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_chalk_resource | extraction | `chalk_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_dolomite_resource | extraction | `dolomite_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_extraction_diesel | extraction | `extraction_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_rejected_rock | extraction | `rejected_rock` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_chalk | preparation | `supplied_chalk` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_dolomite | preparation | `supplied_dolomite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_preparation_power | preparation | `preparation_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_saw_power | preparation | `saw_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_diamond_saw_tool | preparation | `diamond_saw_tool` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_grinding_balls | preparation | `grinding_balls` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_aggregate_coproduct | preparation | `aggregate_coproduct` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wet_water | wet | `wet_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wet_power | wet | `wet_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_oleic_acid | wet | `oleic_acid` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录实际单项供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存回用。产品有效化学品质量按实测换算，不合并药剂强加配方。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_silicate | wet | `sodium_silicate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录实际单项供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存回用。产品有效化学品质量按实测换算，不合并药剂强加配方。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_polyacrylamide | wet | `polyacrylamide` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录实际单项供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存回用。产品有效化学品质量按实测换算，不合并药剂强加配方。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wet_sludge | wet | `wet_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_dryer_natural_gas | drying | `dryer_natural_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_dryer_power | drying | `dryer_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_river_water | controls | `river_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_collector_dust | controls | `collector_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿干矿物质量游离水或浆料固含矿物物相及干基钙镁碳酸盐杂质化验，核对库存内部回收实际供应去向。区分氧化物当量分析与游离氧化物、灼烧失重与游离水、验收联产品与废物，不设纯度产率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tss_water | controls | `tss_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 匹配实测受纳水净排放 m3 与悬浮固体浓度 mg/L：固体 kg = 浓度 mg/L * 体积 m3 /1000。保留背景参考水矿物组成介质同期间不确定性；区分未处理污泥转移溶解污染物，每种实际新增物种独立行。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_paper_bag | dispatch | `paper_bag` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 在选定出口按校准独立称量正验收收到基矿物 kg D，排除包装拒收退货调整库存。匹配物相批次游离水 w 或独立测量浆料固含 s，干质量 D*(1-w) 或 D*s，不能同时校正。保留 D 分母碳酸盐物相干基钙镁杂质化验及原矿工厂出口状态。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收未煅烧天然白垩或白云石矿物品级，干颗粒粉体原矿块板或明确声明的含水矿物浆料，实测净矿物固体游离水碳酸盐物相及出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收。游离水质量分数 w 满足0 <= w <1，干矿物固体 = D*(1-w)。浆料实测干固体分数 s 满足0 < s <=1，干固体 = D*s；使用一致游离水固含基准，不能重复校正。保持 D 为清单分母，将干基输出作为限定信息披露。分别核对干进料全部验收品级联产品拒收细粉污泥捕集灰库存及新水循环蒸发排水。同基准匹配实际碳酸盐物相钙镁杂质化验；报告 CaO/MgO 当量不能证明游离氧化物或煅烧。灼烧失重可能含碳酸盐分解，不自动是水分。改变碳酸盐身份的干燥须审查产品边界并实测实际气体，不假定干燥损失。普通机械碳酸盐制备不产生煅烧 CO2 或下游碳化抵扣；实际燃烧确认化学损失排放逐项测量。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收。游离水质量分数 w 满足0 <= w <1，干矿物固体 = D*(1-w)。浆料实测干固体分数 s 满足0 < s <=1，干固体 = D*s；使用一致游离水固含基准，不能重复校正。保持 D 为清单分母，将干基输出作为限定信息披露。分别核对干进料全部验收品级联产品拒收细粉污泥捕集灰库存及新水循环蒸发排水。同基准匹配实际碳酸盐物相钙镁杂质化验；报告 CaO/MgO 当量不能证明游离氧化物或煅烧。灼烧失重可能含碳酸盐分解，不自动是水分。改变碳酸盐身份的干燥须审查产品边界并实测实际气体，不假定干燥损失。普通机械碳酸盐制备不产生煅烧 CO2 或下游碳化抵扣；实际燃烧确认化学损失排放逐项测量。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在声明矿物出口供应1 kg验收净收到基白垩或未煅烧白云石，浆料须声明固含，不是1 kg纯干碳酸盐或氧化物 |
| excluded_use | 煅烧烧结团聚白云石白云石灰、白云石捣打料耐火制品；生熟水硬石灰水泥；沉淀或化学转化碳酸钙涂层配方矿物产品书写绘画裁缝台球粉笔；磷质白垩；独立分类骨料尺寸石普通钙质进料；下游使用纯运输服务 |
| required_metadata | 场址年份；白垩白云石地质矿物身份；实际露天井下供给库存路线；未煅烧物相制备；预期品级产品分类；粒径块体几何；游离水浆料固含；干基钙镁碳酸盐杂质化验及氧化物当量与实际氧化物区别；灼烧失重方法；验收输出库存退货；供应分配；袋装散装；出口明确纳入运输；水流域排放；废物去向寿命复垦基准；代表 UUID 仅用于相容工厂出口玻璃配合料原白云石，不用于白垩煅烧白云石 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| bgs-dolomite-2006 | official_guidance | BGS, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Dolomite, January2006, original PDF pp.6–7. https://nora.nerc.ac.uk/id/eprint/534435/1/mpf_dolomite.pdf | 定性选择性采石、原矿破碎筛分分级搬运、共同品级及与煅烧白云石灰耐火产品的区别，不采用历史温度产率品级限值市场统计。 |
| bgs-limestone-2006 | official_guidance | BGS, Harrison, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Limestone, January2006, original PDF p.1 and pp.6–7. https://nora.nerc.ac.uk/id/eprint/534436/1/mpf_limestone.pdf | 天然白垩碳酸盐身份；实际采石破碎研磨分级与独立石灰煅烧的区别，不设通用白垩纯度粒径配方。 |
| epa-crushed-stone-2004 | official_guidance | US EPA, AP-42 Section11.19.2 Crushed Stone Processing and Pulverized Mineral Processing, August2004, original PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c11s1902.pdf | 按实际场址路线采用碳酸盐岩制备干湿矿物研磨分级及粉尘水控制，不设历史粒径能力排放因子默认值。 |
| wco-hs25-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF pp.1–4, Notes1–3 and headings2509/2510/2517/2518/2522. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | 产品状态及未煅烧煅烧白云石区别；天然白垩与磷质白垩制品及骨料出口区别，不建立新 HS 映射或提供过程数量。 |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | 采石路线、粉尘、水、废物及土地范围；不采用通用消耗区间。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
