---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-plough
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 农业铧式犁制造

## 1. 范围与适用性

本PCR涵盖以犁铧及犁壁切土翻垡的新制完整拖拉机悬挂式与半悬挂式铧式犁，包括翻转式和栅条犁壁配置。前景制造数据包从已识别来料或外购部件开始，至工厂验收和发运包装。排除农场使用、按公顷的耕作服务、拖拉机制造、土壤碳、作物产量、单独出售的备件、圆盘犁、旋耕机、耙、深松机与再制造。不同配置犁具每千克的结果不能证明田间性能相同。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-plough |
| classification_refs | CPC 3.0 44111; 铧式犁子集；不表示已接受映射 |
| covered_products | 声明犁体数量和悬挂/半悬挂支承的完整单向/翻转铧式犁 |
| excluded_products | 圆盘犁；旋耕机；拖拉机；单独备件犁铧；农场服务 |
| representative_product | 配置明确的钢犁架拖拉机悬挂翻转铧式犁；不规定代表性重量 |
| production_route | 来料切割成形、路线特定锻造/热处理与连接、防护涂装、装配验收；可用外购成品部件替代制造工序 |
| market_state | 新制验收合格厂门完整犁具，交付配置已识别 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造用于翻垡的验收合格完整铧式犁；此单位不含使用阶段服务 |
| How much | 同一声明配置的合格完整犁具净质量1千克 |
| How well | 符合声明图纸/物料清单、已安装安全/过载保护系统和工厂验收协议；不设统一田间性能 |
| How long or cycle | 一个制造及验收周期；不假设寿命或耕作公顷数 |
| reference_flow_link | `finished_plough` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 犁 `130fc770-822f-45ae-a438-070df7696c00` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；犁体数量；整板/栅条犁壁；单向/翻转；挂接类别；支承轮；工作幅宽；耐磨件牌号与热处理状态；犁架材质；调节与过载保护；交付液压装置/选件；成品涂层；验收净质量M；包装排除；前景起点；供应商/前景分工 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表基准；采用能量单位组换算1 kWh = 3.6 MJ，不把电量解释为燃料热值投入。所选35–330千伏流需匹配供电边界。 |
| gas_volume | thermal_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录实际或标准状态及表计修正证据；体积转质量必须有气体组成和声明状态下的实测密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明收货厂门的已识别钢坯料或供应商成品部件；披露所有外部投入及入厂运输覆盖 |
| starting_condition_role | foreground manufacturing start |
| product_classification_scope | CPC 3.0 44111 mouldboard subset |
| recursive_input_rule | 外购完整犁进入改装时，按同类别独立投入及供应商数据集记录；递归止于该已识别投入，披露配置变化 |
| upstream_dataset_requirement | 将钢材、各外购部件和公用工程连接至兼容上游数据集；未完成全套上游核实连接时仅描述前景制造 |
| disclosure | 场址/时间；起始状态；外包处理；路线例外；缺失供应商；运输；资本设备覆盖；废物处理去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | all processes | 纳入声明场址/过程链内实际制造、内部搬运、返工、可归属公用工程、验收试验及发运包装。外包热处理按供应商活动记录，不重复计入当地燃料。本协议不证明完整摇篮到厂门覆盖。 |  |
| boundary_route | thermal; joining | 依图纸及工艺卡选择工序。制造商实例支持部分犁铧锻造与热处理；DuraMaxx耐磨犁体展示无钻孔/冲孔/焊接的例外，均非普适。声称配置完整前，应将每项实际渗碳介质、淬火油、清洗剂、磨料、结构管材、轮、软管和安全部件逐项识别。 | lemken-plough-bodies; kverneland-share-production; kverneland-steel-technology |
| boundary_environment | all processes | 基本流仅用于环境交换。外供工艺水为产品投入，外部处理漂洗废水为废物输出。路线排放仅由测量或有凭据的成分平衡量化；不虚构未知物质，也不合并成NOx/VOC占位行。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料准备、切割与成形 | conditional | 声明前景内制造犁架或犁体毛坯时 | foreground production | 每 1 kg 参考流 |
| `thermal` | 耐磨件锻造与热处理 | conditional | 声明前景内实施锻造、淬硬、回火或渗碳时 | foreground production | 每 1 kg 参考流 |
| `joining` | 结构件连接 | conditional | 前景路线存在焊接接头时 | foreground production | 每 1 kg 参考流 |
| `finishing` | 清洗与防护涂装 | conditional | 前景内实施时；粉末涂装为条件路线，并非统一要求 | foreground production | 每 1 kg 参考流 |
| `assembly` | 配置装配与验收 | required | 所有完整犁具 | foreground production | 每 1 kg 参考流 |
| `packing` | 工厂发运包装 | conditional | 发运防护包装跨越前景边界时 | foreground production | 每 1 kg 参考流 |

以下为条件适用的原子交换，不是统一配方。依实际物料清单/工艺和表计台账补充；证明不存在者记不适用，未知量记缺口。内部部件转移保持配置和质量，不作为外购。制造商宣传不用于赋予数量范围。

### 过程：坯料准备、切割与成形 (`forming`)

#### 输入

##### 产品流

###### 仅用于材质证书匹配的热轧低合金高强钢板 (`frame_plate`)

仅用于材质证书匹配的热轧低合金高强钢板。实际使用空心型材时另增已识别行，不以钢板替代钢管。

- 选定流: 钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 仅当犁架物料清单使用外购空心型材时纳入；记录钢牌号、尺寸及焊缝状态 (`frame_section`)

仅当犁架物料清单使用外购空心型材时纳入；记录钢牌号、尺寸及焊缝状态。钢板投入不得和供应商制造型材重复。

- 选定流: 成品矩形结构钢空心型材
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 仅当前景采用该认证坯料制造犁铧时纳入；外购成品犁铧在装配过程记账 (`wear_blank`)

仅当前景采用该认证坯料制造犁铧时纳入；外购成品犁铧在装配过程记账。

- 选定流: 微合金硼钢犁铧毛坯
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`
- 来源: `lemken-plough-bodies`

###### 计量用户供电边界内的切割、压制及机加工用电；所选身份仅适用于35–330千伏供电 (`forming_power`)

计量用户供电边界内的切割、压制及机加工用电；所选身份仅适用于35–330千伏供电。其他电压需匹配身份。

- 选定流: 交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

#### 输出

##### 废物流

###### 仅用于中国场址机加工产生的钢切屑 (`machining_chips`)

仅用于中国场址机加工产生的钢切屑。记录沥干质量与油污染，和清洁切割边角料分开。

- 选定流: 钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 称量离开前景的边角料；内部回用为转移，不构成第二项外部投入 (`cutting_offcuts`)

称量离开前景的边角料；内部回用为转移，不构成第二项外部投入。

- 选定流: 钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：耐磨件锻造与热处理 (`thermal`)

#### 输入

##### 产品流

###### 仅计入实际电炉、感应设备及辅助用电；渗碳介质和燃烧燃料分开 (`thermal_power`)

仅计入实际电炉、感应设备及辅助用电；渗碳介质和燃烧燃料分开。未设统一温度或时长。

- 选定流: 交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_thermal`
- 来源: `kverneland-share-production`

###### 仅用于厂内燃烧的管输气态天然气 (`thermal_gas`)

仅用于厂内燃烧的管输气态天然气。保留压力、温度和标准体积基准；不得代指成分不明的渗碳气氛。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组: `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_thermal`

###### 水基淬火路线中跨越前景边界供应的处理后工业用水 (`quench_water`)

水基淬火路线中跨越前景边界供应的处理后工业用水。计量补水，不以槽内循环量代替。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_thermal`

###### 仅当已核实的淬火配方含该浓缩液时纳入；记录配方、浓度及补充量 (`quench_polymer`)

仅当已核实的淬火配方含该浓缩液时纳入；记录配方、浓度及补充量。油淬路线另设独立行。

- 选定流: 聚亚烷基二醇淬火浓缩液
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_thermal`

#### 输出

##### 基本流

###### 仅计入有证据的化石燃料燃烧排放，介质为空气、子介质未指定 (`fossil_co2`)

仅计入有证据的化石燃料燃烧排放，介质为空气、子介质未指定。采用场址测量或附组成与氧化证据的燃料碳平衡，不套用通用系数；其他空气子介质需匹配流。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_thermal`

### 过程：结构件连接 (`joining`)

#### 输入

##### 产品流

###### 计量焊接设备用电；耐磨犁体不焊接，不代表其他犁架工序也无焊接 (`joining_power`)

计量焊接设备用电；耐磨犁体不焊接，不代表其他犁架工序也无焊接。

- 选定流: 交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`
- 来源: `lemken-plough-bodies`

###### 仅用于所选记录描述的自保护碳钢药芯焊丝 (`weld_wire`)

仅用于所选记录描述的自保护碳钢药芯焊丝。实芯气体保护焊需另设焊丝和保护气体行。

- 选定流: 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

#### 输出

##### 废物流

###### 仅用于该焊接路线实际收集的熔渣；保留组成和处置分类，不属于空气基本流 (`weld_slag`)

仅用于该焊接路线实际收集的熔渣；保留组成和处置分类，不属于空气基本流。

- 选定流: 凝固的钢药芯焊接熔渣
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

### 过程：清洗与防护涂装 (`finishing`)

#### 输入

##### 产品流

###### 实际使用时纳入清洗、喷房和固化用电；燃料固化另设燃料和有证据的排放行 (`finish_power`)

实际使用时纳入清洗、喷房和固化用电；燃料固化另设燃料和有证据的排放行。

- 选定流: 交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_finishing`

###### 仅用于外购粉末涂料；配方披露分别记录树脂化学类别、颜料及添加剂 (`powder`)

仅用于外购粉末涂料；配方披露分别记录树脂化学类别、颜料及添加剂。液体涂料不属于此交换。

- 选定流: 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_finishing`

###### 湿法清洗时计量处理后工业漂洗补水；每种清洗试剂需按浓度另设化学品行 (`rinse_water`)

湿法清洗时计量处理后工业漂洗补水；每种清洗试剂需按浓度另设化学品行。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_finishing`

#### 输出

##### 废物流

###### 仅用于送外部处理设施的废水；计量体积和组成 (`rinse_effluent`)

仅用于送外部处理设施的废水；计量体积和组成。厂内处理属于扩展前景，需单独清单。不以淡水或处理后出水流替代。

- 选定流: 未经处理的金属清洗漂洗废水
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组: `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_finishing`

###### 仅适用于中国制造场址：离开工厂且无法回收的已收集固体过喷粉末；内部返回的回收粉末不计外部废物输出 (`powder_waste`)

仅适用于中国制造场址：离开工厂且无法回收的已收集固体过喷粉末；内部返回的回收粉末不计外部废物输出。

- 选定流: 粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_finishing`

### 过程：配置装配与验收 (`assembly`)

#### 输入

##### 产品流

###### 仅用于外购成品犁铧；声明数量、牌号、硬度与质量，不重复计入原料和供应商制造 (`purchased_share`)

仅用于外购成品犁铧；声明数量、牌号、硬度与质量，不重复计入原料和供应商制造。

- 选定流: 成品淬硬硼钢铧式犁犁铧
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `lemken-plough-bodies`

###### 仅用于外购成品犁壁；保留整板/栅条设计、牌号及表面状态 (`purchased_mouldboard`)

仅用于外购成品犁壁；保留整板/栅条设计、牌号及表面状态。完整犁体还需犁托、犁侧板、犁胸，各自按物料清单识别。

- 选定流: 成品淬硬钢制犁壁
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `lemken-plough-bodies`

###### 记录等级、尺寸、表面处理及交付总质量；剪切螺栓保护属于声明配置，不能和普通螺栓互换 (`steel_bolt`)

记录等级、尺寸、表面处理及交付总质量；剪切螺栓保护属于声明配置，不能和普通螺栓互换。

- 选定流: 成品钢制六角螺栓
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 仅记录该部件的等级、表面处理与质量 (`steel_nut`)

仅记录该部件的等级、表面处理与质量。

- 选定流: 成品钢制六角螺母
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 单独记录表面处理、尺寸与质量，不和螺栓螺母合并 (`steel_washer`)

单独记录表面处理、尺寸与质量，不和螺栓螺母合并。

- 选定流: 成品钢制平垫圈
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 挂接或翻转总成实际包含时记录；注明硬化状态、尺寸与质量 (`pivot_pin`)

挂接或翻转总成实际包含时记录；注明硬化状态、尺寸与质量。

- 选定流: 成品钢制犁枢轴销
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 仅当配置板簧复位时纳入；液压复位系统改用其实际部件 (`reset_spring`)

仅当配置板簧复位时纳入；液压复位系统改用其实际部件。

- 选定流: 成品钢制过载复位板簧
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 交付橡胶支承轮时纳入；轮胎与轮辋分开称量，保留尺寸与结构 (`support_tyre`)

交付橡胶支承轮时纳入；轮胎与轮辋分开称量，保留尺寸与结构。不把计数参考属性的通用轮胎UUID用于质量参考交换。

- 选定流: 成品充气橡胶犁支承轮胎
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 配置支承轮时纳入；仅用于外购轮辋，不能无适用证据套用拖车专用部件 (`support_rim`)

配置支承轮时纳入；仅用于外购轮辋，不能无适用证据套用拖车专用部件。

- 选定流: 成品钢制犁支承轮辋
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整液压软管随犁交付时纳入；记录增强层、橡胶化学类别、压力等级、接头及质量 (`hydraulic_hose`)

完整液压软管随犁交付时纳入；记录增强层、橡胶化学类别、压力等级、接头及质量。供应商未包含的接头需单列。

- 选定流: 液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 仅用于实际钢螺钉，按规格及表面处理称量；螺栓、螺母、垫圈均另设原子行 (`assembly_screw`)

仅用于实际钢螺钉，按规格及表面处理称量；螺栓、螺母、垫圈均另设原子行。

- 选定流: 钢螺钉 `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 翻转或幅宽调节配置使用该缸时纳入 (`hydraulic_cylinder`)

翻转或幅宽调节配置使用该缸时纳入。记录缸径、行程、密封与验收，不以缸毛坯替代。

- 选定流: 完整双作用钢制液压缸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 仅用于符合所选精炼油路线的成品液压油首次充注；记录牌号及随犁交付的实际质量 (`hydraulic_oil`)

仅用于符合所选精炼油路线的成品液压油首次充注；记录牌号及随犁交付的实际质量。排除拖拉机油箱充注。

- 选定流: 液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 计量装配工具及工厂验收试验用电，不含农场拖拉机燃料或田间耕作 (`assembly_power`)

计量装配工具及工厂验收试验用电，不含农场拖拉机燃料或田间耕作。

- 选定流: 交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

#### 输出

##### 产品流

###### 已验收完整犁具一千克，声明犁架、全套犁体、挂接装置、已安装调节与安全装置及交付选件 (`finished_plough`)

已验收完整犁具一千克，声明犁架、全套犁体、挂接装置、已安装调节与安全装置及交付选件。净质量排除运输包装和拖拉机。

- 选定流: 犁 `130fc770-822f-45ae-a438-070df7696c00`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`

### 过程：工厂发运包装 (`packing`)

#### 输入

##### 产品流

###### 仅用于该实际木材组件；按场址记录其含水率与复用次数 (`wood_pack`)

仅用于该实际木材组件；按场址记录其含水率与复用次数。其他包装组件逐项另设行；包装不计犁具净质量。

- 选定流: 窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packing`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 优先用工单/批次记录和过程细分。共享设备测量工单机时与负荷，核对已分配及未分配用量和总表，保留物理因果依据。仅在场址试验证明处理需求与质量成比例时允许质量分配；不同犁配置不得自动按台数或成品质量分配。 |  |
| allocation_scrap | waste outputs | 记录钢切屑、边角料及涂装残渣的去向和收入属性。出售本身不建立共产品，也不授权避免钢材信用。依研究方法明确废物处理与回收负担/收益；物理分配无依据时，披露经济分配、价格期间及敏感性。 |  |
| allocation_rework | forming; assembly | 废品与返工归属原配置，验收产出仅计一次。内部可回用钢/粉末循环量和净外购投入及外部废物分开记账。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | accepted net mass | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 声明生产期间 | 声明工厂及配置 | 每台验收净质量 | 秤校准；物料清单；逐台验收 |
| cp_forming | forming | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |
| cp_thermal | thermal | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |
| cp_joining | joining | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |
| cp_finishing | finishing | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |
| cp_assembly | assembly | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |
| cp_packing | packing | 各项投入/产出交换 | meter and job ledger | row_id；路线；材料牌号；数量；分子单位；验收台数；配置；库存变化；废品；分配负荷/机时；表计状态 | 每种材料/废物分别称量，各公用工程独立计量；成品部件取供应商交付/物料清单记录；测量有凭据的排放。每行关联其仪表或凭证及验收配置。 | kg; MJ; m3 | 每工单；每月核对 | 与cp_mass相同的声明生产期间；纳入季节负荷 | 前景及有凭据的外包分工 | 可归属交换数量 / 验收机器数量 | 校准；工艺卡；发票；废物联单；排放测试；分配核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

批量生产：先确定同一配置及期间的可归属交换与完整验收产出，再形成逐台记录。质量不同的合并数据集使用可归属交换总量除以验收净质量总量；保留逐台记录，不对逐台比值无权重平均。外部排放因子必须注明来源及场址适用证据，本PCR不提供因子。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | reference product | 犁体数量、材料、支承、过载保护/液压选件和验收须与M一致；区分运输毛重及不完整套件质量。 | 物料清单与校准称量 |
| quality_route | all processes | 说明前景/外购部件分工；实际热处理配方与涂层化学信息需记录。制造商实例为路线证据，不是统一配方、得率或寿命。 | lemken-plough-bodies; kverneland-share-production; kverneland-steel-technology |
| quality_completeness | all inventory rows | 核对物料清单及材料平衡、公用工程表计、库存变化、废品、包装及废物去向。量化遗漏并逐项解释排除；缺口不等于零。 | 工单台账及核对 |
| quality_range | all inventory rows | 未建立可转用数量范围。采集场址特定记录及不确定性；不以宣传寿命增益、渗碳时长或目录质量作为工厂清单因子。 | 测量记录及明确证据缺口 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | 要求实测正值M、同一验收配置、参考产出恰为1千克、明确应用normalize_mass及兼容分子单位。记录气体状态与电量换算证据。 |  |
| validate_identity | all inventory rows | 数据集使用前核验各UUID公开身份、参考属性/单位、路线、来源和环境介质。未解决流保留具体名称及空UUID，不能声称身份全覆盖；不强行替代。 |  |
| validate_complete | reference product | 检查实际物料清单覆盖，含装配的轮/轮辋、螺栓/螺母、软管、密封及过载机构；逐项补充缺失原子交换与供应商活动。检查遗漏工序及直接排放物质。报告已检查、跳过、不确定性及剩余缺口；制造检查不验证田间性能。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确的完整铧式犁前景制造 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 向独立设备生命周期模型提供兼容配置的犁制造；上游使用须先审查连接和覆盖 |
| excluded_use | 作物产量、土壤碳、公顷比较、普适寿命、圆盘犁制造、未核验上游却声称完整摇篮到厂门 |
| required_metadata | 配置限定信息；M协议；场址/期间；路线；来料状态；供应商活动；边界图；属性/单位；分配；包装；废物去向 |
| required_quality_disclosure | 身份缺口；缺失物料清单/供应商；测量不确定性；跳过工序；未核实排放；范围证据缺口；上游及运输完整性 |
| update_trigger | 配置、钢牌号、处理路线、涂层、供应商、公用工程组合、实测质量或边界变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| lemken-plough-bodies | handbook | LEMKEN, Plough Bodies. https://lemken.com/en-en/agricultural-machines/soil-cultivation/ploughing/equipment/bodies | Dural/DuraMaxx段落：硼钢犁铧、硬化栅条、工艺例外及犁体类型。仅适用制造商实例；不采用寿命或数量范围。 |
| kverneland-share-production | handbook | Kverneland, HIGH quality production. https://uk.kverneland.com/about-kverneland/kverneland-technology/high-quality-production | 犁铧制造段落：锻造、淬硬、回火实例；不设普适必需路线。 |
| kverneland-steel-technology | handbook | Kverneland, STEEL as a science. https://uk.kverneland.com/about-kverneland/kverneland-technology/steel-as-a-science | 复杂生产过程段落：犁壁渗碳及试样检测实例；实际路线气体组成、周期时间及排放须实测。 |
