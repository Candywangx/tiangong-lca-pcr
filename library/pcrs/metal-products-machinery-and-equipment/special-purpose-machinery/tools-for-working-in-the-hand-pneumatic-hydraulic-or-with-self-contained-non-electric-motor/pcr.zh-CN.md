---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.tools-for-working-in-the-hand-pneumatic-hydraulic-or-with-self-contained-non-electric-motor
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 气动、液压或自带非电动马达的手持工具

## 1. 范围与适用性

本PCR覆盖设计为手持作业的完整工具制造，其动力为气动、液压或自带非电动马达。保留主要功能及实际架构属于此类别的旋转、冲击、往复、钻孔、磨削、锯切、切割、林业及园艺变型，包括汽油链锯及兼容手持割灌或修篱工具。辅助点火用电不使汽油主要动力机变为电动。参考质量为生产归一化而非工具家族间功能等价。混合动力或割草机架构不清时须逐项边界审查。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.tools-for-working-in-the-hand-pneumatic-hydraulic-or-with-self-contained-non-electric-motor |
| classification_refs | CPC 3.0 44231 |
| covered_products | 本PCR覆盖设计为手持作业的完整工具制造，其动力为气动、液压或自带非电动马达。保留主要功能及实际架构属于此类别的旋转、冲击、往复、钻孔、磨削、锯切、切割、林业及园艺变型，包括汽油链锯及兼容手持割灌或修篱工具。辅助点火用电不使汽油主要动力机变为电动。参考质量为生产归一化而非工具家族间功能等价。混合动力或割草机架构不清时须逐项边界审查。 |
| excluded_products | 电动手持工具；普通无动力手工具；独立发动机或动力包；独立零件、刀夹及互换刀具；非手持固定机床；其他主要功能割草机。 |
| representative_product | 实际完整交付气动磨机、液压破碎锤链锯或汽油手持链锯；不推通用配置。 |
| production_route | 按实际架构收料、自制或外购部件、装配、工厂试验及放行包装。压铸镁、重力铸铝、钢锻造或增强塑料仅来源所证路线，实际牌号配方独立核实。 |
| market_state | 完整验收工具及实际随附构造，独立备件或动力源不是参考输出。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明配置的完整手持动力作业功能 |
| How much | 每 1 kg 参考流；不表示跨工具功能等价 |
| How well | 采用实际声明动力机构、额定条件及验收标准；目录数值不作工厂投入默认。 |
| How long or cycle | 制造至工厂验收放行；实际验证循环记录，不假定客户寿命。 |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 手动、气动、液压或自带非电动马达的工具 `ec897060-cae0-4e73-ad3c-35b2c43228a4` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 型号或修订；主要功能；气动液压或自带非电机架构；旋转冲击往复模式；交付及附件填充清单；自制外购；同配置期间；验收数量净质量；实际试验条件；供应商及地区；混合动力待核边界。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际工厂收料及证实的部件完成供应状态 |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0 44231; `un-cpc-44231`; `us-hs8467` |
| recursive_input_rule | 同类完整工具投入记录真实完成状态和上游链接，不在本包重复嵌入部件制造。 |
| upstream_dataset_requirement | 全部实际投入的供应生产运输及外送处理接口须匹配。 |
| disclosure | 披露实际路线、随货状态、自制外购、试验、地理期间、未知身份供应链接和未完成覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、机械或控制装配、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购工具壳体、气动马达、液压马达、汽油发动机、传动或点火模块的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `factory_use` | production | 纳入实际工厂旋转冲击往复手持工具验收及有记录负载锯切钻孔磨削或适用园艺验证试验、实际试料、清洗水、电力及消耗润滑剂，回收试料采用实测返回及库存。客户加工材料木材植被输出及下游工具运行不是设备制造输出。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。实际金属合金聚合物增强双组分树脂涂层润滑剂燃料或处理配方未知须实际供应状态证据。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 部件制造 | conditional | 实际场内金属铸锻机加工、塑料成型或锯链制造；采用真实进料牌号路线。完整外购模块排除嵌入制造重复。 | foreground | 每 1 kg 参考流 |
| `finish` | 表面准备及处理 | conditional | 仅有记录实际清洗磨削涂装。每种真实涂料热处理化学物和废物须独立增补。 | foreground | 每 1 kg 参考流 |
| `integration` | 工具装配集成 | required | 真实气动液压汽油架构控制保留填充及随附附件，与工厂消耗区分。 | foreground | 每 1 kg 参考流 |
| `test` | 工厂验收及验证 | required | 实际验收及归属负载试验返工；目录运行额定值不是工厂吞吐。 | foreground | 每 1 kg 参考流 |
| `dispatch` | 验收放行包装 | required | 校准验收净工具质量及实际供应包装，包装排除参考分母。 | foreground | 每 1 kg 参考流 |
| `services` | 共享服务及外送转移 | conditional | 公共服务仅单独已分配制造集成试验包装负荷后未分配剩余；实际分选废物物种排放。 | foreground | 每 1 kg 参考流 |

### 过程：部件制造（`fabrication`）

实际场内金属铸锻机加工、塑料成型或锯链制造；采用真实进料牌号路线。完整外购模块排除嵌入制造重复。。

#### 输入

##### 产品流

###### 非合金钢板 （`steel`）

激活路线的实际非合金钢板供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：非合金钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 合金钢坯 （`alloy_billet`）

实际供应合金钢坯牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际兼容合金钢初级或半成品钢坯，匹配声明组成形态及钢铁生产供应商接口；不推定合金牌号钢坯尺寸或锻造完成状态。

- 选定流：合金钢 `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 原铝铸造锭 （`aluminium`）

实际供应原铝铸造锭牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际原生未锻轧铝锭，兼容全球厂门原生生产供应商及组成。实际手持工具合金、合金化投入及铸造路线须独立证据；不是完成铸件或棒料。

- 选定流：原铝锭 `6a66bdce-5689-479f-8ee2-de0bfbcfbd8c`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture-slides`

###### 原生镁金属 （`magnesium`）

激活路线的实际原生镁金属供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：原生镁金属
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture-slides`

###### 聚酰胺6树脂 （`pa6`）

实际供应聚酰胺6树脂牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际PA6初级注塑树脂及兼容欧洲厂门供货供应商接口。来源家电背景不确定本工具聚合物牌号或增强比例，不推全部增强壳体采用PA6。完成增强混合料或壳体分开。

- 选定流：尼龙6 `3cbbe99e-d5b9-438b-8cb6-665d220eb53c`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 聚丙烯树脂 （`pp`）

激活路线的实际聚丙烯树脂供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：聚丙烯树脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 玻璃纤维增强料 （`glass`）

实际供应玻璃纤维增强料牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际E玻璃纤维条粗纱纱或短切增强料匹配37121组成供应商，不是机织布或完成增强聚合物壳体。无通用玻纤比例，外购混合料已计增强一次。

- 选定流：玻璃纤维 `12515acc-030c-4be2-ad20-fae5c0b35cfb`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 锯链组件用合金钢带 （`strip`）

激活路线的实际锯链组件用合金钢带供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：锯链组件用合金钢带
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-chain`

###### 石油润滑油 （`oil`）

实际供应石油润滑油牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际石油源润滑油供应为石油馏分或经核实石油油含量至少70wt%的配制品，符合CPC333供应接口并匹配实际牌号添加剂交付状态供应商，不虚构配方含量。原生质量kg，分离安装保留填充与实际工厂消耗损失使用污染废油。名称热值不使油成为能量流或假定燃烧。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 水混溶机加工冷却液浓缩物 （`coolant`）

实际供应水混溶机加工冷却液浓缩物牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 仅实际供应液态金属加工切削液配制品匹配实际水混溶浓缩料组成及35499供应商接口、核实稀释与供货状态；纯石油油或已配槽液不同。自身浓缩料水返回库存含化学物分析，无推定稀释或带出损失。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

###### 市政自来水 （`tapwater`）

实际供应市政自来水牌号组成完成状态用于有证据现场制造，自身总量及所含组分分析水分库存成对返回后续操作。完整外购部件已含原料一次，无通用配方。 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-manufacture`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：表面准备及处理（`finish`）

仅有记录实际清洗磨削涂装。每种真实涂料热处理化学物和废物须独立增补。。

#### 输入

##### 产品流

###### 异丙醇 （`ipa`）

实际供应异丙醇组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际匹配供应子型组成完成状态地理和供应商接口，按该配置记录。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`jrc-metalworking`

###### 固结氧化铝砂轮 （`abrasive`）

实际供应固结氧化铝砂轮组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际供应完成粘结磨料砂轮属37910及核实兼容材料粘结几何供应商；大类磨料身份本身不确定氧化铝组成。原磨粒砂纸及单独售切削工具分开，仅计实际工厂耗用砂轮。

- 选定流：磨料 `685e7b7f-1555-4112-aa0b-3786e5508534`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`jrc-metalworking`

###### 环氧粉末涂料 （`powder`）

实际供应环氧粉末涂料组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 实际干聚合物粉配方、自身树脂添加剂牌号回收固化，无默认聚合物类型。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`jrc-metalworking`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工具装配集成（`integration`）

真实气动液压汽油架构控制保留填充及随附附件，与工厂消耗区分。。

#### 输入

##### 产品流

###### 玻璃纤维增强塑料手持工具壳体 （`housing`）

实际完成供应增强塑料工具壳体及随附构造；现场成型改计实际独立树脂增强双组分料及操作。原聚合物不是完成壳体。

- 选定流：玻璃纤维增强塑料手持工具壳体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 完整气动叶片马达 （`airmotor`）

实际对应气动旋转工具完整供应叶片气马达；CP854转子缸套端板叶片调速器属具体机型。往复活塞锯气缸不同。替换清单不证明外购马达均随货。

- 选定流：完整气动叶片马达
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 完整液压齿轮马达 （`hydromotor`）

实际供应完整液压齿轮马达兼容液压链锯传动；冲击破碎锤活塞自动阀为不同架构。气缸风轮转子外部动力单元不能替代此组件。

- 选定流：完整液压齿轮马达
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stanley-cs06`

###### 手持工具用完整点燃式汽油发动机 （`engine`）

实际完整外购非车辆手持工具点燃式发动机，兼容排量燃料安装；现场部件制造为替代仅计一次。机动车43121发动机独立航空柴油机不是此接口。

- 选定流：手持工具用完整点燃式汽油发动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`us-hs8467`

###### 成品专用手持工具齿轮轴总成 （`gears`）

实际完成专用工具齿轮轴总成兼容真实旋转锥齿轮或液压锯传动配置；自制机加工改用实际供应料和计量操作。风机车辆总成不匹配。

- 选定流：成品专用手持工具齿轮轴总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 球轴承或滚子轴承 （`bearing`）

实际供应球轴承或滚子轴承组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际供应完整滚珠滚柱轴承兼容材料尺寸及供应商，不是轴机座或辊本体。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 成品丁腈橡胶O形圈密封件 （`seal`）

实际供应成品丁腈橡胶O形圈密封件组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际完整供应硫化橡胶密封件、中国厂门装配接口及由供应商核实实际NBR配方几何流体压力兼容性。大类身份不指定NBR或环尺寸，原橡胶和外购模块内密封分开。

- 选定流：密封件 `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 完整电子发动机点火模块 （`ignition`）

实际供应完整电子发动机点火模块组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际完成内燃机电点火或起动设备匹配46910对应分支发动机兼容及供应商，车辆照明雨刮不是替代，控制板不自动是点火装置。辅助点火不改变非电主要动力机。

- 选定流：用于内燃机的电点火或起动设备，用于与内燃机配用的发电机及断电器，脚踏车或机动车辆用电力照明设备或信号设备（白炽灯或放电灯除外）、风挡刮水器、去霜器和去雾器 `46a4d7e0-db60-4f6d-a637-28140132c05d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 不超过1000伏绝缘电缆 （`cable`）

实际供应不超过1000伏绝缘电缆组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际供应0.6/1kV铜或铝电力电缆及挤包绝缘护套，匹配GB/T 12706.1-2020和真实供应商构造。此身份不确立任意点火线、柔性软线或信号电缆。原生长度m；计量领用裁切安装返回长度库存，仅独立实物质量核对时采用同一真实构造实测kg/m。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 / m
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_length。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_length`
- 来源：`cp-grinder`

###### 非硬质硫化橡胶液压软管 （`hose`）

实际供应非硬质硫化橡胶液压软管组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际供应完成非硬质硫化橡胶液压软管，兼容材质增强内径压力流体供应商，不是未硫化中间品或任意气管。原生质量kg，无推定长度线密度。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 成品链锯导板 （`bar`）

实际完成供应导板仅适用随货清单确含导板的链锯配置；单独替换品原棒材不证明随货。记录净随货附件质量范围。

- 选定流：成品链锯导板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 成品锯链 （`chain`）

实际完成供应锯链仅实际随附时；现场钢带冲压抛光硬化铆接为独立自制路线，不作外购锯链输入。单独锯链不属完整工具参考范围。

- 选定流：成品锯链
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stihl-chain`

###### 成品专用手持工具护罩 （`guard`）

实际完成专用护罩机罩匹配交付机型，含实际金属塑料供应状态；零件图不确定原料牌号通用护罩。单列附件不推随货。

- 选定流：成品专用手持工具护罩
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 润滑脂 （`grease`）

实际保留装配润滑脂仅证实真实供应填充组成；CP维护润滑周期不证明工厂数量随货。蜡溶剂润滑剂身份不推兼容润滑脂。

- 选定流：润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`cp-grinder`

###### 矿物液压油 （`hydraulic`）

实际供应矿物液压油组成完成状态几何供应商匹配配置及有记录场内操作，嵌入制造仅计一次，不重复原料或采用维护默认量。 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：`stanley-cs06`

###### 气态氮 （`nitrogen`）

激活路线的实际气态氮供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：气态氮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stanley-br87`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂验收及验证（`test`）

实际验收及归属负载试验返工；目录运行额定值不是工厂吞吐。。

#### 输入

##### 产品流

###### 压缩空气 （`test_air`）

实际实测声明工具机构同验收批次工厂验证压缩空气消耗领用返回库存，与保留填充工具净质量分开。客户作业吞吐目录额定值不是工厂负荷。 仅实际兼容供应压缩空气及自身交付温压标准状态纯度供应商，原生体积m3；场内压缩机电力与外购压缩空气供应负荷不可重计。 仅实际兼容供应压缩空气及自身交付温压标准状态纯度供应商，原生体积m3；场内压缩机电力与外购压缩空气供应负荷不可重计。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：`cp-saw`

###### 矿物液压油 （`test_hydraulic`）

实际实测声明工具机构同验收批次工厂验证矿物液压油消耗领用返回库存，与保留填充工具净质量分开。客户作业吞吐目录额定值不是工厂负荷。 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：`stanley-cs06`

###### 无铅汽油 （`gasoline`）

实际实测声明工具机构同验收批次工厂验证无铅汽油消耗领用返回库存，与保留填充工具净质量分开。客户作业吞吐目录额定值不是工厂负荷。 仅实际汽油匹配33311及供应商牌号配方用于有记录汽油手持工具工厂验证；实际无铅牌号组分分析密度热值另证。通用身份不规定配方预混比地理供应商或耗油量，不是客户寿命燃料或推定随货满箱。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`us-hs8467`

###### 二冲程发动机润滑油 （`two_stroke_oil`）

仅实际发动机系统需用且有记录工厂试验时采用真实发动机级二冲程润滑剂，核实添加剂兼容性，独立计量领用返回库存。无默认发动机架构预混比。

- 选定流：二冲程发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stanley-cs06`

###### 合金钢坯 （`test_steel`）

实际实测声明工具机构同验收批次工厂验证合金钢坯消耗领用返回库存，与保留填充工具净质量分开。客户作业吞吐目录额定值不是工厂负荷。 仅实际兼容合金钢初级或半成品钢坯，匹配声明组成形态及钢铁生产供应商接口；不推定合金牌号钢坯尺寸或锻造完成状态。 仅实际兼容合金钢初级或半成品钢坯，匹配声明组成形态及钢铁生产供应商接口；不推定合金牌号钢坯尺寸或锻造完成状态。

- 选定流：合金钢 `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stanley-cs06`

###### 湿态针叶树锯材 （`test_wood`）

实际实测声明工具机构同验收批次工厂验证湿态针叶树锯材消耗领用返回库存，与保留填充工具净质量分开。客户作业吞吐目录额定值不是工厂负荷。 仅实际绿色新鲜针叶锯材厚度超过6mm兼容31101锯木厂门供应商用于有记录工厂锯切试验；绿色指水分而非人工颜色或全部木材。记录实际树种牌号水分消耗回收，不入工具Dnet。

- 选定流：绿色锯材 `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`stanley-cs06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收放行包装（`dispatch`）

校准验收净工具质量及实际供应包装，包装排除参考分母。。

#### 输入

##### 产品流

###### 瓦楞纤维板 （`board`）

实际供应瓦楞纤维板包装，自身净领用返回库存回用记录。包装质量与验收完整工具净分母分开，无推定周转次数。 实际C/E/F瓦楞纤维板且纤维含量至少80%；纤维含量不是再生成分。独立声明实际再生比例；供应板不是完整箱。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc-44231`

###### 无支承非泡孔非自粘低密度聚乙烯薄膜 （`film`）

实际供应无支承非泡孔非自粘低密度聚乙烯薄膜包装，自身净领用返回库存回用记录。包装质量与验收完整工具净分母分开，无推定周转次数。 仅实际非泡沫非自粘未增强未复合无衬底PE-LD薄膜；其他聚合物或衬底膜单独确认。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc-44231`

###### 欧洲标准木托盘 （`pallet`）

实际供应欧洲标准木托盘包装，自身净领用返回库存回用记录。包装质量与验收完整工具净分母分开，无推定周转次数。 仅实际欧标木托盘，记录领用返回回用，无默认周转次数。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc-44231`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 气动、液压或自带非电动马达的手持工具 （`reference_product`）

实际验收完整交付手持工具、供应配置组件附件及证实保留填充；同批期间校准净质量验收数量。包装废品耗用工厂试料排除Dnet。 仅实际验收完整气动液压或自带非电动马达手持作业工具、已制成厂门44231接口及实际型号配置随货附件保留填充。同配置校准净工具质量，排除包装废品耗用试料。官方中文手动不扩展普通无动力手工具。电动工具独立零件发动机动力源切削工具分开。

- 选定流：手动、气动、液压或自带非电动马达的工具 `ec897060-cae0-4e73-ad3c-35b2c43228a4`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：`un-cpc-44231`; `us-hs8467`

##### 废物流

##### 基本流

### 过程：共享服务及外送转移（`services`）

公共服务仅单独已分配制造集成试验包装负荷后未分配剩余；实际分选废物物种排放。。

#### 输入

##### 产品流

###### 用户侧1至35千伏电力 （`electricity`）

实际计量未分配公共服务用户侧1至35千伏电力剩余，同场址配置期间核对单独已分配负荷出口储存后；真实现场供能与外购供应路线仅计一次。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`jrc-metalworking`

###### 压缩空气 （`compressed_air`）

实际计量未分配公共服务压缩空气剩余，同场址配置期间核对单独已分配负荷出口储存后；真实现场供能与外购供应路线仅计一次。 仅实际兼容供应压缩空气及自身交付温压标准状态纯度供应商，原生体积m3；场内压缩机电力与外购压缩空气供应负荷不可重计。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：`jrc-metalworking`

###### 外购天然气工业热 （`heat`）

实际计量未分配公共服务外购天然气工业热剩余，同场址配置期间核对单独已分配负荷出口储存后；真实现场供能与外购供应路线仅计一次。 仅实际兼容中国厂门天然气工业供热能量交付及工厂供应商期间，独立计供应返回总净热力状态；供应者燃料保持上游，不是场内燃烧。

- 选定流：区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`jrc-metalworking`

###### 现场工艺热用天然气 （`natural_gas`）

激活路线的实际现场工艺热用天然气供应牌号、组成、完成状态及供应商须核实。记录实际数量及适用自制外购接口；身份待核。不得推定配方、密度或每台用量。

- 选定流：现场工艺热用天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`jrc-metalworking`

###### 市政自来水 （`services_water`）

实际计量未分配公共服务市政自来水剩余，同场址配置期间核对单独已分配负荷出口储存后；真实现场供能与外购供应路线仅计一次。 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`jrc-metalworking`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 未加工工业钢废料 （`scrap`）

实际实测外送未加工工业钢废料转移；自身组分分析水分污染实测库存成对内部返回及实际接收路线；无替代抵扣或通用处理默认。 仅实际厂内未处理工业钢机加工成型废料未经进一步处理外送；自身组成水分污染库存成对内部返回实际接收路线。不是处理后再生钢，无替代抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 分选铝机加工废料 （`al_waste`）

实际实测外送分选铝机加工废料转移；自身组分分析水分污染实测库存成对内部返回及实际接收路线；无替代抵扣或通用处理默认。

- 选定流：分选铝机加工废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 分选镁机加工废料 （`mg_waste`）

实际镁金属机加工废料外送与铝钢分离，自身合金分析水分油库存及成对内部回炉，实际接收路线。镁渣未指定重金属不是金属屑，无替代抵扣。

- 选定流：分选镁机加工废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 非危险性热塑性塑料生产废料 （`plastic_waste`）

实际分选外送热塑性塑料生产废料，自身聚合物增强污染水分分析库存及成对内部回磨返回，实际接收路线另录。光学装配废物仅包装或金属塑料混合输出不自动匹配。

- 选定流：非危险性热塑性塑料生产废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 废润滑油 （`oil_waste`）

实际实测外送废润滑油转移；自身组分分析水分污染实测库存成对内部返回及实际接收路线；无替代抵扣或通用处理默认。 仅实际使用污染矿物润滑油废物转移质量，测自身含水污染及接收处理，无处置回收默认。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 金属组件清洗废水实物流转 （`wastewater`）

实际实物转移清洗工艺废水，自身实测溶液质量水分含化学物密度库存及实际接收处理。此废物转移与排水体基本排放不同，登陆点未处理水体排放身份不代理工厂转移。

- 选定流：金属组件清洗废水实物流转
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 实际工厂验收试验木余料 （`wood_waste`）

实际实测外送实际工厂验收试验木余料转移；自身组分分析水分污染实测库存成对内部返回及实际接收路线；无替代抵扣或通用处理默认。 仅实际非团聚工厂试验木屑匹配未处理厂门焚烧回收接收路线及自身木材污染水分库存分析。其他边角煤球树皮空气捕集尘需自身身份。无替代抵扣通用回收路线或客户木材吞吐归属。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

###### 干态环氧粉末涂料过喷废物 （`powder_waste`）

实际实测外送干态环氧粉末涂料过喷废物转移；自身组分分析水分污染实测库存成对内部返回及实际接收路线；无替代抵扣或通用处理默认。 仅实际干粉涂装过喷废物及匹配废物类型，湿污泥或捕集液体滤材另需确切身份分析。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`jrc-metalworking`

##### 基本流

###### 二氧化碳，化石，未指定空气 （`co2`）

实际独立实测二氧化碳，化石，未指定空气释放；匹配治理后物种浓度流量时长温压干湿状态、逸散单独采样及实际介质；捕集不是销毁，衡算差额不是空气。 仅实际实测化石源CO2进入普通未指定空气，不是生物源室内水或长期释放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

###### 一氧化碳，化石，未指定空气 （`co`）

实际独立实测一氧化碳，化石，未指定空气释放；匹配治理后物种浓度流量时长温压干湿状态、逸散单独采样及实际介质；捕集不是销毁，衡算差额不是空气。 仅实际实测化石源CO进入普通未指定空气，碳闭合本身不能决定CO。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

###### 水蒸气，未指定空气 （`vapour`）

实际独立实测水蒸气，未指定空气释放；匹配治理后物种浓度流量时长温压干湿状态、逸散单独采样及实际介质；捕集不是销毁，衡算差额不是空气。 仅独立实测实际水蒸气排入普通未指定空气，保留冷却水废水及无关差额不是空气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

###### 二氧化氮，未指定空气 （`no2`）

实际独立实测分子二氧化氮进入普通未指定空气，治理后匹配浓度流量时长温压干湿基准；NOx以NO2当量和亚硝酸根排水体不同。未解释燃料化学差额绝不分至空气。

- 选定流：二氧化氮，未指定空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

###### 颗粒物，小于等于10微米，未指定空气 （`pm10`）

实际独立实测颗粒物，小于等于10微米，未指定空气释放；匹配治理后物种浓度流量时长温压干湿状态、逸散单独采样及实际介质；捕集不是销毁，衡算差额不是空气。 仅独立实测完整PM10颗粒排入普通未指定空气，包含其细粒部分，采用粒径对应同期间治理后浓度流量状态及实测逸散基准。PM2.5–PM10仅粗粒级、烟炱、未指定总尘或捕集粉末不得代替此身份；另报细粒级须防重叠。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

###### 异丙醇，未指定空气 （`ipa_air`）

实际独立实测异丙醇，未指定空气释放；匹配治理后物种浓度流量时长温压干湿状态、逸散单独采样及实际介质；捕集不是销毁，衡算差额不是空气。 仅实际排放IPA CAS67-63-0进入普通未指定空气，匹配治理后采样，不是室内土壤液体捕集或长期释放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：`jrc-metalworking`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按整机质量分配。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

## 8. 前景数据采集、计算与质量规则

### 采用流供应身份条件

| row_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| steel | steel | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| alloy_billet | alloy_billet | 仅实际兼容合金钢初级或半成品钢坯，匹配声明组成形态及钢铁生产供应商接口；不推定合金牌号钢坯尺寸或锻造完成状态。 | 实际供应批次身份状态及接口证明 |
| aluminium | aluminium | 仅实际原生未锻轧铝锭，兼容全球厂门原生生产供应商及组成。实际手持工具合金、合金化投入及铸造路线须独立证据；不是完成铸件或棒料。 | 实际供应批次身份状态及接口证明 |
| magnesium | magnesium | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| pa6 | pa6 | 仅实际PA6初级注塑树脂及兼容欧洲厂门供货供应商接口。来源家电背景不确定本工具聚合物牌号或增强比例，不推全部增强壳体采用PA6。完成增强混合料或壳体分开。 | 实际供应批次身份状态及接口证明 |
| pp | pp | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| glass | glass | 仅实际E玻璃纤维条粗纱纱或短切增强料匹配37121组成供应商，不是机织布或完成增强聚合物壳体。无通用玻纤比例，外购混合料已计增强一次。 | 实际供应批次身份状态及接口证明 |
| strip | strip | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| oil | oil | 仅实际石油源润滑油供应为石油馏分或经核实石油油含量至少70wt%的配制品，符合CPC333供应接口并匹配实际牌号添加剂交付状态供应商，不虚构配方含量。原生质量kg，分离安装保留填充与实际工厂消耗损失使用污染废油。名称热值不使油成为能量流或假定燃烧。 | 实际供应批次身份状态及接口证明 |
| coolant | coolant | 仅实际供应液态金属加工切削液配制品匹配实际水混溶浓缩料组成及35499供应商接口、核实稀释与供货状态；纯石油油或已配槽液不同。自身浓缩料水返回库存含化学物分析，无推定稀释或带出损失。 | 实际供应批次身份状态及接口证明 |
| tapwater | tapwater | 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。 | 实际供应批次身份状态及接口证明 |
| ipa | ipa | 仅实际匹配供应子型组成完成状态地理和供应商接口，按该配置记录。 | 实际供应批次身份状态及接口证明 |
| abrasive | abrasive | 仅实际供应完成粘结磨料砂轮属37910及核实兼容材料粘结几何供应商；大类磨料身份本身不确定氧化铝组成。原磨粒砂纸及单独售切削工具分开，仅计实际工厂耗用砂轮。 | 实际供应批次身份状态及接口证明 |
| powder | powder | 实际干聚合物粉配方、自身树脂添加剂牌号回收固化，无默认聚合物类型。 | 实际供应批次身份状态及接口证明 |
| housing | housing | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| airmotor | airmotor | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| hydromotor | hydromotor | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| engine | engine | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| gears | gears | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| bearing | bearing | 仅实际供应完整滚珠滚柱轴承兼容材料尺寸及供应商，不是轴机座或辊本体。 | 实际供应批次身份状态及接口证明 |
| seal | seal | 仅实际完整供应硫化橡胶密封件、中国厂门装配接口及由供应商核实实际NBR配方几何流体压力兼容性。大类身份不指定NBR或环尺寸，原橡胶和外购模块内密封分开。 | 实际供应批次身份状态及接口证明 |
| ignition | ignition | 仅实际完成内燃机电点火或起动设备匹配46910对应分支发动机兼容及供应商，车辆照明雨刮不是替代，控制板不自动是点火装置。辅助点火不改变非电主要动力机。 | 实际供应批次身份状态及接口证明 |
| cable | cable | 仅实际供应0.6/1kV铜或铝电力电缆及挤包绝缘护套，匹配GB/T 12706.1-2020和真实供应商构造。此身份不确立任意点火线、柔性软线或信号电缆。原生长度m；计量领用裁切安装返回长度库存，仅独立实物质量核对时采用同一真实构造实测kg/m。 | 实际供应批次身份状态及接口证明 |
| hose | hose | 仅实际供应完成非硬质硫化橡胶液压软管，兼容材质增强内径压力流体供应商，不是未硫化中间品或任意气管。原生质量kg，无推定长度线密度。 | 实际供应批次身份状态及接口证明 |
| bar | bar | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| chain | chain | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| guard | guard | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| grease | grease | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| hydraulic | hydraulic | 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。 | 实际供应批次身份状态及接口证明 |
| nitrogen | nitrogen | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| test_air | test_air | 仅实际兼容供应压缩空气及自身交付温压标准状态纯度供应商，原生体积m3；场内压缩机电力与外购压缩空气供应负荷不可重计。 | 实际供应批次身份状态及接口证明 |
| test_hydraulic | test_hydraulic | 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。 | 实际供应批次身份状态及接口证明 |
| gasoline | gasoline | 仅实际汽油匹配33311及供应商牌号配方用于有记录汽油手持工具工厂验证；实际无铅牌号组分分析密度热值另证。通用身份不规定配方预混比地理供应商或耗油量，不是客户寿命燃料或推定随货满箱。 | 实际供应批次身份状态及接口证明 |
| two_stroke_oil | two_stroke_oil | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| test_steel | test_steel | 仅实际兼容合金钢初级或半成品钢坯，匹配声明组成形态及钢铁生产供应商接口；不推定合金牌号钢坯尺寸或锻造完成状态。 | 实际供应批次身份状态及接口证明 |
| test_wood | test_wood | 仅实际绿色新鲜针叶锯材厚度超过6mm兼容31101锯木厂门供应商用于有记录工厂锯切试验；绿色指水分而非人工颜色或全部木材。记录实际树种牌号水分消耗回收，不入工具Dnet。 | 实际供应批次身份状态及接口证明 |
| reference_product | reference_product | 仅实际验收完整气动液压或自带非电动马达手持作业工具、已制成厂门44231接口及实际型号配置随货附件保留填充。同配置校准净工具质量，排除包装废品耗用试料。官方中文手动不扩展普通无动力手工具。电动工具独立零件发动机动力源切削工具分开。 | 实际供应批次身份状态及接口证明 |
| board | board | 实际C/E/F瓦楞纤维板且纤维含量至少80%；纤维含量不是再生成分。独立声明实际再生比例；供应板不是完整箱。 | 实际供应批次身份状态及接口证明 |
| film | film | 仅实际非泡沫非自粘未增强未复合无衬底PE-LD薄膜；其他聚合物或衬底膜单独确认。 | 实际供应批次身份状态及接口证明 |
| pallet | pallet | 仅实际欧标木托盘，记录领用返回回用，无默认周转次数。 | 实际供应批次身份状态及接口证明 |
| electricity | electricity | 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。 | 实际供应批次身份状态及接口证明 |
| compressed_air | compressed_air | 仅实际兼容供应压缩空气及自身交付温压标准状态纯度供应商，原生体积m3；场内压缩机电力与外购压缩空气供应负荷不可重计。 | 实际供应批次身份状态及接口证明 |
| heat | heat | 仅实际兼容中国厂门天然气工业供热能量交付及工厂供应商期间，独立计供应返回总净热力状态；供应者燃料保持上游，不是场内燃烧。 | 实际供应批次身份状态及接口证明 |
| natural_gas | natural_gas | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| services_water | services_water | 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。 | 实际供应批次身份状态及接口证明 |
| scrap | scrap | 仅实际厂内未处理工业钢机加工成型废料未经进一步处理外送；自身组成水分污染库存成对内部返回实际接收路线。不是处理后再生钢，无替代抵扣。 | 实际供应批次身份状态及接口证明 |
| al_waste | al_waste | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| mg_waste | mg_waste | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| plastic_waste | plastic_waste | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| oil_waste | oil_waste | 仅实际使用污染矿物润滑油废物转移质量，测自身含水污染及接收处理，无处置回收默认。 | 实际供应批次身份状态及接口证明 |
| wastewater | wastewater | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| wood_waste | wood_waste | 仅实际非团聚工厂试验木屑匹配未处理厂门焚烧回收接收路线及自身木材污染水分库存分析。其他边角煤球树皮空气捕集尘需自身身份。无替代抵扣通用回收路线或客户木材吞吐归属。 | 实际供应批次身份状态及接口证明 |
| powder_waste | powder_waste | 仅实际干粉涂装过喷废物及匹配废物类型，湿污泥或捕集液体滤材另需确切身份分析。 | 实际供应批次身份状态及接口证明 |
| co2 | co2 | 仅实际实测化石源CO2进入普通未指定空气，不是生物源室内水或长期释放。 | 实际供应批次身份状态及接口证明 |
| co | co | 仅实际实测化石源CO进入普通未指定空气，碳闭合本身不能决定CO。 | 实际供应批次身份状态及接口证明 |
| vapour | vapour | 仅独立实测实际水蒸气排入普通未指定空气，保留冷却水废水及无关差额不是空气。 | 实际供应批次身份状态及接口证明 |
| no2 | no2 | 实际特定牌号状态供应商须匹配，待核身份保持明确。 | 实际供应批次身份状态及接口证明 |
| pm10 | pm10 | 仅独立实测完整PM10颗粒排入普通未指定空气，包含其细粒部分，采用粒径对应同期间治理后浓度流量状态及实测逸散基准。PM2.5–PM10仅粗粒级、烟炱、未指定总尘或捕集粉末不得代替此身份；另报细粒级须防重叠。 | 实际供应批次身份状态及接口证明 |
| ipa_air | ipa_air | 仅实际排放IPA CAS67-63-0进入普通未指定空气，匹配治理后采样，不是室内土壤液体捕集或长期释放。 | 实际供应批次身份状态及接口证明 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每台验收净质量 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际场内供能量（含发电量）；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |
| cp_volume | all | specific supplied gas/fluid | meter | 气液身份；交付体积；实际温压或标准条件；密度；Q；N | 按实际状态计量原生体积：气体温压液体温度和组成状态，质量换算用该实际流自身实测密度，不用通用因子。 | m3 | 每批或连续表 | 同一制造期间 | 同一配置及供应接口 | 分配体积 / 验收设备数量 | 温压流量密度及校准 |
| cp_length | integration | actual insulated low-voltage copper cable | length_meter | 实际导体绝缘护套及电压；计量长度m；裁切安装返回；自身线密度kg/m；库存；Q；N | 按收料裁切安装长度及返回库存核对原生m，需物料质量时采用该实际电缆自身实测线密度kg/m，不用通用铜质量或能量代理。 | m | 每批裁切及安装 | 同一制造期间 | 实际配置线缆供应接口 | 分配长度 / 验收设备数量 | 计量尺裁切表实际构造及线密度 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| cohort_raw | cohort | Naccepted、Dnet与Qattr对应同一配置期间。Dnet为校准合格净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Qattr包含废品返工和工厂试验，Dnet排除包装废品及消耗试料。保留每项原单位。 | 校准及实际期间台账 |
| species_sampling | emissions | 治理后物种浓度乘匹配同期间气液流量及持续时间，校正温压干湿与单位；逸散独立实测。未知差额不成为空气释放，捕集不是销毁；每项金属化学或水流采用自身含量水分密度库存反应及成对返回。 | 实际浓度、流量、时段及状态记录 |
| contained_assay | physical balances | 各输入产品废料污泥液体或释放均用自身实测总质量乘自身含量分析及干湿基准；总合金或污泥不是所含金属。水各流用自身水分比例及实际温度密度，包含产品保留、反应、蒸发、排水及期初末库存，内部返回成对抵消。 | 各项实测化验含水及库存 |
| solvent_fates | solvent records | 回收返回、产品保留、捕集液体或滤材、已证实销毁及废水或介质分别记录；回收保留捕集及废水为非空气去向，捕集不是销毁。未知差额须调查，不能转成空气释放。 | 实际物料采样及治理记录 |
| utility_residual | energy | 同期间核对进口加实际场内供能量（含发电量）减出口及储能变化与机械制造表面处理集成试验发运负荷；公用行仅未分配余量。负余量调查期间单位及综合不确定性，不截零。 | 校准分表及总表 |
| heat_return | thermal interface | 总供热为实测供应kg乘自身MJ/kg减独立实测返回kg乘返回自身MJ/kg，采用共同零点及实测温压；总供应返回仅扣一次，已净计费不再次扣。物理蒸汽或冷凝水质量与热能分开，供应者锅炉燃料不是场内燃烧。 | 供应返回各计量热力状态及发票 |
| cohort | all inventory rows | 共同期间同一配置Qattr含归属废品返工试验；Naccepted仅验收整机数量，Dnet为校准验收净质量总和，包括实际随附安装工具保留填充附件，不含包装废品耗用试料。M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet；保留每种分子原生单位与明确换算，不平均不同配置。 | 校准净质量、供应清单、验收及批次原始期间记录 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |
| supplied_cable_interface | cable | 仅实际供应0.6/1kV铜或铝电力电缆及挤包绝缘护套，匹配GB/T 12706.1-2020和真实供应商构造。此身份不确立任意点火线、柔性软线或信号电缆。原生长度m；计量领用裁切安装返回长度库存，仅独立实物质量核对时采用同一真实构造实测kg/m。 | 真实供应商标准额定电压构造及校准原生长度记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、完整气动液压自带非电机手持作业功能及旋转冲击往复林业园艺交付架构，并区分电动工具独立发动机外置动力源零件刀夹切削工具割草机、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内供能量（含发电量）、出口及储能变化和已分配机械制造、表面处理、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认用户加工服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cp-grinder | handbook | CP854 Angle Grinder operators manual and parts; CP854/854E Model K CA156836 RevG; copyright2004; printed KEK/04-06 observed, no inferred print date; https://www.cp.com/content/dam/pim/itba/cp/technical-documents/CA156836.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| cp-3650 | handbook | CP3650 pneumatic angle grinder supplied construction; undated actual technical body retained snapshot2026-10-03; https://tools.cp.com/en-ca/products/grinders/cp3650-120ab5v-sku6151607900 | 产品架构或类别边界；非工厂配方或数量默认值 |
| stihl-manufacture | handbook | MS 400 C-M manufacturing components; undated actual technical body retained snapshot2026-10-03; https://corporate.stihlusa.com/en/stihl-journal/corporate-insights/simplicity-itself | 产品架构或类别边界；非工厂配方或数量默认值 |
| stihl-chain | handbook | How STIHL saw chains are produced; 29.08.2025 actual article body; https://www.stihl.co.uk/en/professional/knowledge/behind-the-scenes/stihl-chain-production | 产品架构或类别边界；非工厂配方或数量默认值 |
| stanley-cs06 | handbook | STANLEY CS05 CS06 hydraulic chain saw user manual manufacturer authored dealer mirror; 66864 8/2018 Ver16; actual cover copyright2014, manufacturer-authored retained dealer mirror; https://www.intermtnsales.com/pub/media/wysiwyg/pdf/CS06/Owner%27s-Manual/CS05_06%20User%20Manual.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| stanley-br87 | handbook | STANLEY BR87 hydraulic breaker manufacturer user manual dealer mirror; 65778 User Manual6/2019 Ver27; actual manufacturer cover, retained dealer mirror; https://www.echopkins.com/wp-content/uploads/2020/06/SOM-BR87-65778-06-2019-v27-USER.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| cp-saw | handbook | CP7900 manufacturer reciprocating saw manual and exploded parts dealer mirror; CP7900 Model A 8940158336 RevB; copyright2004; printed KEK/07-06 observed, no inferred print date; https://assets.rs-online.com/image/upload/v1679047312/Datasheets/cdd93e64af74e89be271eaadaa3e39f7.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-44231 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| us-hs8467 | official_guidance | Schedule B Book - Chapter 84; 2022 Schedule B chapter; https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | 产品架构或类别边界；非工厂配方或数量默认值 |
| jrc-metalworking | official_guidance | Best Environmental Management Practice in the Fabricated Metal Products sector; EUR 30025 EN, 2020; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| stihl-manufacture-slides | handbook | MS 400 C-M manufacturing components; undated actual technical body retained snapshot2026-10-03; https://corporate.stihlusa.com/en/stihl-journal/corporate-insights/simplicity-itself | 产品架构或类别边界；非工厂配方或数量默认值 |
