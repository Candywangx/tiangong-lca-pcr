---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.copper-ores-and-concentrates
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铜矿石及精矿

## 1. 范围与适用性

本 PCR 适用于声明矿山选厂装载或明确纳入交付出口供应的铜矿石及矿物精矿。覆盖硫化矿氧化矿自然铜矿及混合矿、露天地下采出和供给矿石的独立制备。依实际采用破碎分选重选磨矿浮选浓密过滤干燥，不将硫化矿浮选强加给氧化矿自然铜矿或原矿产品。多金属混合精矿须确认铜类别身份、矿物金属化验及共同产品分配；每个数据集声明一种实际输出状态。仅当实际热处理后的输出仍为合格矿石矿物精矿进料时纳入该制备，记录变化物相及硫尾气平衡，逐项另列实际处理排放；此条件不自动将焙砂认定为矿石。含铜炉渣浮渣回收废铜需要独立次生物料方法，不能凭含铜量推断矿石身份。溶解浸出液萃取电积沉淀铜熔炼冰铜粗铜阳极阴极铜及精制化合物属于不同下游产品出口，不以其产率或金属公斤作为矿物产品分母。仅纳入至选定出口的可归属开发关闭搬运尾矿水粉尘控制及运输。 `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.copper-ores-and-concentrates |
| classification_refs | CPC 3.0:14210 |
| covered_products | 硫化氧化自然铜及混合矿物状态的铜矿石精矿；已确认铜类别的混合精矿及合格常规制备矿物进料 |
| excluded_products | 熔炼冰铜；粗铜阳极阴极铜或沉淀铜；浸出液及分离精制化合物；铜工业炉渣浮渣回收废铜；纯运输服务；声明其他类别的贵金属或其他金属精矿 |
| representative_product | 声明矿物产品出口的铜矿石 |
| production_route | 矿山开发及关闭; 铜矿采出; 矿石制备及选矿; 合格矿物进料热制备; 尾矿水及排放管理; 纳入的产品交付; 验收矿物产品搬运 |
| market_state | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明状态供应1 kg合格铜矿石或矿物精矿，单独报告含铜量，不宣称等同于1 kg铜金属 |
| How much | 1 kg |
| How well | 场址年份；地质矿物矿石身份；硫化氧化自然铜混合路线；露天地下或供给矿石；矿石精矿区别及实际加工热处理状态；干基铜硫伴生金属有害元素化验；游离水分粒级；实际出口运输纳入；验收产出库存；实测回收率尾矿去向；水源流域退水；联产品分类上游供应及分配；开发寿命产量；代表 UUID 仅用于通用供给铜矿产品，不用于特定品级精矿或地质基本资源 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铜矿 `7f574b09-9b2c-47e2-b38d-a883f15ddeeb` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；地质矿物矿石身份；硫化氧化自然铜混合路线；露天地下或供给矿石；矿石精矿区别及实际加工热处理状态；干基铜硫伴生金属有害元素化验；游离水分粒级；实际出口运输纳入；验收产出库存；实测回收率尾矿去向；水源流域退水；联产品分类上游供应及分配；开发寿命产量；代表 UUID 仅用于通用供给铜矿产品，不用于特定品级精矿或地质基本资源 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消转移。实测湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。实测干基铜质量分数 g，0 <= g <=1；所含铜 kg = D*(1-w)*g。保持 D 为共同清单分母，不暗中替换为干矿物或含铜公斤。矿石精矿尾矿拒收库存干固体及逐项实测金属组分独立核对，区别于取水循环蒸发排放。金属回收率仅由库存调整后匹配输入输出干质量化验计算，不从品位推断回收率或引入冶炼产率。热制备须按物相核对质量硫及实际氧尾气平衡；新增实际化学品气体污染物须逐项另列卡片。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化原生采矿从实际含铜地质矿床开始，独立选矿从具名带负荷供给矿石开始；矿山选厂内部转移抵消 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 硫化氧化自然铜及混合矿物状态的铜矿石精矿；已确认铜类别的混合精矿及合格常规制备矿物进料 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；地质矿物矿石身份；硫化氧化自然铜混合路线；露天地下或供给矿石；矿石精矿区别及实际加工热处理状态；干基铜硫伴生金属有害元素化验；游离水分粒级；实际出口运输纳入；验收产出库存；实测回收率尾矿去向；水源流域退水；联产品分类上游供应及分配；开发寿命产量；代表 UUID 仅用于通用供给铜矿产品，不用于特定品级精矿或地质基本资源 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明矿山选厂装载或明确纳入交付出口供应的铜矿石及矿物精矿。覆盖硫化矿氧化矿自然铜矿及混合矿、露天地下采出和供给矿石的独立制备。依实际采用破碎分选重选磨矿浮选浓密过滤干燥，不将硫化矿浮选强加给氧化矿自然铜矿或原矿产品。多金属混合精矿须确认铜类别身份、矿物金属化验及共同产品分配；每个数据集声明一种实际输出状态。仅当实际热处理后的输出仍为合格矿石矿物精矿进料时纳入该制备，记录变化物相及硫尾气平衡，逐项另列实际处理排放；此条件不自动将焙砂认定为矿石。含铜炉渣浮渣回收废铜需要独立次生物料方法，不能凭含铜量推断矿石身份。溶解浸出液萃取电积沉淀铜熔炼冰铜粗铜阳极阴极铜及精制化合物属于不同下游产品出口，不以其产率或金属公斤作为矿物产品分母。仅纳入至选定出口的可归属开发关闭搬运尾矿水粉尘控制及运输。 | `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿山开发及关闭 | conditional | 一体化采出及可归属复垦 | 前景生产 | per 1 kg reference flow |
| extraction | 铜矿采出 | conditional | 实际露天地下采矿 | 前景生产 | per 1 kg reference flow |
| preparation | 矿石制备及选矿 | conditional | 实际品级特定破碎分选磨矿分离，排除未发生工序 | 前景生产 | per 1 kg reference flow |
| thermal | 合格矿物进料热制备 | conditional | 仅实际干燥或保留已确认矿物进料身份的矿石制备，非熔炼 | 前景生产 | per 1 kg reference flow |
| controls | 尾矿水及排放管理 | conditional | 实际废物管理水处理粉尘尾气控制 | 前景生产 | per 1 kg reference flow |
| delivery | 纳入的产品交付 | conditional | 仅明确纳入至声明收料出口交付 | 前景生产 | per 1 kg reference flow |
| dispatch | 验收矿物产品搬运 | required | 每个声明输出出口 | 前景生产 | per 1 kg reference flow |

### 过程：矿山开发及关闭 (`development`)

#### 输入

##### 产品流

###### 矿山开发柴油 (`development_diesel`)

实际清理道路土方关闭机械，按寿命验收产量归属一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：铜矿采出 (`extraction`)

#### 输入

##### 产品流

###### 铜矿采出及场内运输柴油 (`mining_diesel`)

实际采矿机械场内矿石废石运输，区别于纳入的场外交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 铜矿采出用电 (`mining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际采出地下通风泵送输送表计，不设假定共同路线。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_power`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际 ANFO 爆破，其他实际炸药配方雷管逐项另列。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 地质矿床中的含铜矿石 (`ore_resource`)

实际原生地质资源质量及实测矿物组成，数据库名称含地下的产品流不是基本资源。

- 选定流: 地质矿床中的含铜矿石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_ore_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ore_resource`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 铜矿废石 (`waste_rock`)

实际无矿拒收地质岩转交管理，区分矿石库存适销品级，记录硫化物产酸证据。

- 选定流: 铜矿废石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_waste_rock 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste_rock`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：矿石制备及选矿 (`preparation`)

#### 输入

##### 产品流

###### 供给铜矿石 (`supplied_ore`)

仅独立选矿购入带负荷矿石，带实际矿物化验水分供应方。矿山选厂内部进料不是新外部投入。

- 选定流: 铜矿 `7f574b09-9b2c-47e2-b38d-a883f15ddeeb`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_ore 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_ore`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 铜矿制备用电 (`mill_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎分选重选磨矿浮选脱水回路分别归属，仅矿石出口排除未发生选矿。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mill_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mill_power`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 钢磨矿球 (`steel_media`)

仅实际耗用钢球；使用磨棒衬板其他磨矿材料时逐项另列。

- 选定流: 钢磨矿球
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_steel_media 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_media`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 购入矿石加工补充水 (`process_water`)

仅新购入补充水，内部尾矿回水仅作平衡记录，非新增供应。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_process_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_process_water`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 戊基黄原酸钾 (`pax`)

仅实际指定捕收剂配方，不同捕收剂逐项另列，不将此药剂强加给所有矿石。

- 选定流: 戊基黄原酸钾
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pax 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pax`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 甲基异丁基甲醇 (`mibc`)

仅供应组成确认的实际 MIBC 起泡剂，使用松油聚醚起泡剂时分别另列。

- 选定流: 甲基异丁基甲醇
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mibc 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mibc`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 浮选调节 pH 的生石灰 (`lime`)

仅实际氧化钙供应，带有效含量及水化用水；熟石灰是独立产品。

- 选定流: 浮选调节 pH 的生石灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_lime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lime`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 硫氢化钠 (`sodium_hydrosulfide`)

仅实际硫化调质或钼铜分离，带矿物供应证据，不假定氧化矿普遍可浮选。

- 选定流: 硫氢化钠
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_hydrosulfide 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_hydrosulfide`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 硅酸钠 (`sodium_silicate`)

仅实际指定分散抑制剂配方，带有效含量。

- 选定流: 硅酸钠
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_silicate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_silicate`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 阴离子聚丙烯酰胺絮凝剂 (`flocculant`)

仅实际浓密尾矿絮凝剂，带配方有效含量；其他聚合物另列。

- 选定流: 阴离子聚丙烯酰胺絮凝剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_flocculant 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_flocculant`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 从河流取用的淡水 (`surface_water`)

仅实际河流直接取水，记录流域季节；地下取水须独立资源身份卡片。

- 选定流: 从河流取用的淡水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_surface_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_water`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 适销钼矿物精矿 (`molybdenum_concentrate`)

仅独立回收验收钼精矿，带化验水分，不是已嵌在铜精矿中的钼。

- 选定流: 适销钼矿物精矿
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_molybdenum_concentrate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_molybdenum_concentrate`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### 废物流

###### 铜选矿尾矿浆 (`tailings`)

实际最终未回收尾矿，带固含矿物金属硫化物化验及管理去向，排除内部循环中矿。

- 选定流: 铜选矿尾矿浆
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_tailings 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tailings`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 铜矿分选拒收料 (`sorting_reject`)

仅实际拒收矿物流，区别于采出废石及最终浮选尾矿。

- 选定流: 铜矿分选拒收料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sorting_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sorting_reject`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：合格矿物进料热制备 (`thermal`)

#### 输入

##### 产品流

###### 矿物进料热制备天然气 (`thermal_natural_gas`)

仅实际燃气干燥或合格热矿物制备，保留产品物相出口，区分燃料干燥与硫氧化热；其他燃料热源逐项另列。

- 选定流: 矿物进料热制备天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_thermal_natural_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_natural_gas`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 矿物进料热制备用电 (`thermal_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅实际干燥热制备及相关尾气控制设备，共用控制不得重复计量。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_thermal_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_power`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：尾矿水及排放管理 (`controls`)

#### 输入

##### 产品流

###### 尾矿水及排放控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际尾矿泵回水排水粉尘控制，避免与加工热制备表计重复。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 水处理生石灰 (`water_treatment_lime`)

仅实际矿山尾矿水中和，区别于浮选 pH 投入，带实际剂量纯度。

- 选定流: 水处理生石灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_water_treatment_lime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_treatment_lime`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 铜矿水处理污泥 (`treatment_sludge`)

实际中和沉淀污泥转交管理，实测干固体金属。

- 选定流: 铜矿水处理污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_treatment_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_treatment_sludge`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 转交处理的铜矿工艺废水 (`wastewater`)

仅实际外部处理转移；直接环境排水体积物种分别另列。

- 选定流: 转交处理的铜矿工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 转交处置的铜矿物除尘灰 (`collector_dust`)

仅实际捕集灰处置，内部返送抵消，产品回收独立。

- 选定流: 转交处置的铜矿物除尘灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_collector_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_collector_dust`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 铜矿物 PM10 排入室外空气 (`pm10_air`)

控制后实际采矿运输选厂粉尘，带粒径金属组成；其他粒径物种分别另列。

- 选定流: 铜矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

实际前景燃料燃烧，实测燃料碳基准，不重复已计上游供应燃烧。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 二氧化硫排入室外空气 (`so2_air`)

仅控制后实际燃料硫或合格热制备尾气，不假定硫酸盐转 SO2 因子，不在仅矿石出口纳入冶炼排放。

- 选定流: 二氧化硫排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_so2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_so2_air`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### 溶解铜排入受纳水体 (`copper_water`)

仅实际释放，指定水介质；测量溶解铜净体积背景，不将管理尾矿全部铜当作水排放。

- 选定流: 溶解铜排入受纳水体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_copper_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_copper_water`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：纳入的产品交付 (`delivery`)

#### 输入

##### 产品流

###### 纳入铜矿物交付的柴油 (`delivery_diesel`)

仅明确纳入收料出口前实际前景交付，带路线载荷返程。外包供应运输独立关联不重复燃料；矿山选厂装载出口排除后续交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_delivery_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_diesel`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：验收矿物产品搬运 (`dispatch`)

#### 输入

##### 产品流

###### 铜矿物出口搬运柴油 (`loading_diesel`)

实际产品装载收料，区别于采出运输及交付燃料。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 声明矿物产品出口的铜矿石 (`final_product`)

已核验代表为通用 Copper ore 产品质量流，仅用于相容实际矿石状态并实测水分品位。精矿合格热处理进料及特定品级变体须独立精确产品身份，运输服务或铜渣不是精矿替代。

- 选定流: 铜矿 `7f574b09-9b2c-47e2-b38d-a883f15ddeeb`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分采出矿石分选独立精矿回路及发运。分配前保留混合精矿伴生金属未分配清单，含金属质量不自动证明物理因果。以匹配品级计价条款加工费价格报告期论证实际物理关系或经济分配，不将嵌在精矿中的贵金属重复列为独立实物输出。适销钼精矿与铜矿物输出分开，尾矿不能仅因出售成为无负荷联产品。开发关闭按实测寿命验收产量计入一次，不自动取得避免金属避免处置或内部回用抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_ore_resource | extraction | `ore_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_power | extraction | `mining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_ore | preparation | `supplied_ore` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mill_power | preparation | `mill_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_steel_media | preparation | `steel_media` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_process_water | preparation | `process_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_surface_water | preparation | `surface_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pax | preparation | `pax` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mibc | preparation | `mibc` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_lime | preparation | `lime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_hydrosulfide | preparation | `sodium_hydrosulfide` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_silicate | preparation | `sodium_silicate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_flocculant | preparation | `flocculant` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_molybdenum_concentrate | preparation | `molybdenum_concentrate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tailings | preparation | `tailings` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sorting_reject | preparation | `sorting_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基铜伴生金属矿物硫化验，核对库存转移。区别地质资源供给产品及废物联产品身份，记录供应或管理去向，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_natural_gas | thermal | `thermal_natural_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_water_treatment_lime | controls | `water_treatment_lime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录匹配回路一种实际供应配方购入耗用质量化验有效含量及稀释水，核对药剂库存内部回用。产品质量与有效化学品质量不同，明确实测换算，不合并药剂或采用历史行业剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_collector_dust | controls | `collector_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_so2_air | controls | `so2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_copper_water | controls | `copper_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将同期间采样溶解铜浓度 mg/L 与校准受纳水净排放 m3 配对：铜 kg = 浓度 mg/L * 体积 m3 /1000。分别保留总量溶解量区别背景参考水测量介质不确定性。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 在选定出口用校准秤独立称量正验收净矿物 kg D，排除包装退货拒收并核对库存。按代表批次测量湿基水分 w 及干基铜分数 g，保留采样化验不确定性。干质量 = D*(1-w)；含铜 = D*(1-w)*g，保持 D 为分母。精矿是矿物产品，不是纯铜或冶炼回收率。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收矿石或精矿品级，带实测水分及干基铜伴生元素化验，位于声明装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消转移。实测湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。实测干基铜质量分数 g，0 <= g <=1；所含铜 kg = D*(1-w)*g。保持 D 为共同清单分母，不暗中替换为干矿物或含铜公斤。矿石精矿尾矿拒收库存干固体及逐项实测金属组分独立核对，区别于取水循环蒸发排放。金属回收率仅由库存调整后匹配输入输出干质量化验计算，不从品位推断回收率或引入冶炼产率。热制备须按物相核对质量硫及实际氧尾气平衡；新增实际化学品气体污染物须逐项另列卡片。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消转移。实测湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。实测干基铜质量分数 g，0 <= g <=1；所含铜 kg = D*(1-w)*g。保持 D 为共同清单分母，不暗中替换为干矿物或含铜公斤。矿石精矿尾矿拒收库存干固体及逐项实测金属组分独立核对，区别于取水循环蒸发排放。金属回收率仅由库存调整后匹配输入输出干质量化验计算，不从品位推断回收率或引入冶炼产率。热制备须按物相核对质量硫及实际氧尾气平衡；新增实际化学品气体污染物须逐项另列卡片。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明状态供应1 kg合格铜矿石或矿物精矿，单独报告含铜量，不宣称等同于1 kg铜金属 |
| excluded_use | 熔炼冰铜；粗铜阳极阴极铜或沉淀铜；浸出液及分离精制化合物；铜工业炉渣浮渣回收废铜；纯运输服务；声明其他类别的贵金属或其他金属精矿 |
| required_metadata | 场址年份；地质矿物矿石身份；硫化氧化自然铜混合路线；露天地下或供给矿石；矿石精矿区别及实际加工热处理状态；干基铜硫伴生金属有害元素化验；游离水分粒级；实际出口运输纳入；验收产出库存；实测回收率尾矿去向；水源流域退水；联产品分类上游供应及分配；开发寿命产量；代表 UUID 仅用于通用供给铜矿产品，不用于特定品级精矿或地质基本资源 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-copper-1994 | official_guidance | US EPA, Technical Resource Document: Extraction and Beneficiation of Ores and Minerals, Volume4 Copper, EPA530-R-94-031, August1994, PartA original PDF pp.31–34,48–49. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/copper1a.pdf | 定性硫化铜矿破碎磨矿浮选精矿脱水及尾矿回水路线；仅采用具名药剂候选，不将历史设备尺寸全国消耗总量用作场址因子。 |
| wco-hs26-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, original PDF pp.1–2, Note2 and heading2603. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | 矿石精矿矿物身份及与熔炼冰铜工业渣残余物的区别，不建立新 HS 映射或提供过程数量。 |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水、废物、排放、开发及关闭；不采用产品特定默认因子。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
