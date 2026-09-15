---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.blankets-and-travelling-rugs-except-electric-blankets
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 毯子和旅行毯（电热毯除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 27110 所属非电热毯和旅行毯的门到门制造。产品以保暖或覆盖用毯子、旅行毯状态供应时，机织、针织、非织造、起绒、抓绒、绗缝或毡合纺织结构均在范围内。

电热毯以及含电气装置或电路的任何产品均排除。纺织地板覆盖物、睡袋、主要分类不属于 CPC 27110 的床上用品或被子，以及上游纤维、纱线和面料制造不属于本类别，除非明确纳入所声明研究边界。生产数据包必须声明纤维组成、结构、后整理路线、尺寸、质量和市场状态，以便使用者判断代表性。`un-stats-cpc-3-2025` 支持分类边界；`eu-ecolabel-textiles-2014` 支持电气纺织品排除以及纤维和组件组成披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.blankets-and-travelling-rugs-except-electric-blankets |
| classification_refs | CPC 3.0：27110 — 毯子和旅行毯（电热毯除外） |
| covered_products | 由纺织材料制成的非电热毯和旅行毯，包括起绒、抓绒、机织、针织、非织造、毡合或绗缝结构 |
| excluded_products | 电热毯；纺织地板覆盖物；睡袋；床上用品；作为中间品销售的上游纤维、纱线和面料；CPC 27110 以外的产品 |
| representative_product | 工厂门口一件可销售的成品非电热毯 |
| production_route | 接收和调湿待加工纺织材料；裁剪和缝制；条件适用的湿法后整理和干燥；检验、折叠、贴标和包装 |
| market_state | 制造工厂门口已完成、干燥、检验放行、已包装或可销售状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于保暖或覆盖的成品非电热纺织毯或旅行毯 |
| How much | 1 kg 成品可销售产品净质量 |
| How well | 符合所声明的纤维组成、结构、尺寸、单件质量、后整理路线和适用的使用性能规范 |
| How long or cycle | 工厂门产品；本质量型生产参考不主张使用寿命 |
| reference_flow_link | 参考数量是质量放行产品在可选运输包装之前的干燥净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 毛布 `b7478885-d1a2-4ced-9240-4737fc0b8020` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 按质量计的纤维组成；纺织结构；后整理路线和所施加的功能性整理；成品尺寸；单件质量；调湿基准；包装状态；生产地域和参考年 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用质量放行毯子的干燥净质量；从参考产品质量中排除可拆卸运输包装，并在单独包装交换中报告其质量。 |
| `item_to_mass` | 以毯子件数保存的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按产品 SKU 和生产批次采用实测净质量将件数转换为质量；保留件数、抽样单件质量、抽样方案和换算计算。 |
| `moisture_basis` | 接收纺织材料和成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录调湿方法和含水基准；没有文件化换算时，不得混用湿加工质量和调湿成品质量。 |
| `energy_preservation` | 电力和热能 | 所声明能量属性 | kWh 或 MJ | 保留仪表单位和换算系数；不得将电力、蒸汽和天然气表示成一个合并交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在毯子制造场址接收的待加工毯身纺织材料和辅助材料 |
| starting_condition_role | 前景门到门起始条件；上游纤维、纱线、织物成形、染色和后整理负荷保留在链接的供应商数据集中，除非在场址内实施 |
| product_classification_scope | 仅 CPC 3.0 子类 27110；排除电气产品和其他制成纺织品类别 |
| recursive_input_rule | 已属于 CPC 27110 的外购毯子或旅行毯是上游产品输入，必须使用单独声明的供应商数据集；不得在本前景过程中递归重建 |
| upstream_dataset_requirement | 将每种接收纺织材料、纱线、化学品、燃料、水、电力和包装材料链接到具有地域、技术和参考年披露的代表性上游数据集 |
| disclosure | 声明裁剪、缝制、刷毛/起绒、洗涤、后整理、干燥、检验和包装中哪些在场内或外包实施，并对任何省略操作给出理由 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景毯子制造 | 纳入接收/调湿、裁剪和缝制、检验、参考产品输出和包装交换；当为所声明产品实施洗涤、染色、印花、后整理、干燥、直接加热和废水处理时必须纳入。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | 每个纳入过程 | 保持分操作的材料、化学品、水、能源、产品、废物、废水和直接基本流清单；不得把湿加工或场内燃烧隐藏在通用公用工程总量中。 | `eu-textiles-bat-2022`; `ifc-textile-ehs-2007` |
| `boundary_outsourcing` | 外包操作 | 披露外包操作并链接其数据集；某操作发生在场外本身不是有效截断理由。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_conditioning` | 材料接收与调湿 | required | 始终 | 前景材料准备 | 放行至裁剪的调湿毯身纺织材料 kg |
| `cutting_makeup` | 裁剪与缝制 | required | 始终 | 前景产品装配 | 未整理毯输出 kg |
| `wet_finishing_drying` | 湿法后整理与干燥 | conditional | 为产品实施洗涤、染色、印花、柔软、功能性整理、漂洗或干燥时纳入 | 前景湿加工与调湿 | 干燥后整理毯中间品 kg |
| `onsite_heat_generation` | 场内天然气供热 | conditional | 在场内燃烧天然气提供直接或间接过程热时纳入 | 前景能源转换和直接排放 | 消耗天然气的 MJ 高位热值 |
| `inspection_packaging` | 检验与包装 | required | 始终 | 前景质量放行与包装 | 1 kg 成品毯净输出 |

### 过程：材料接收与调湿（`material_receipt_conditioning`）

#### 输入

##### 产品流

###### 待加工毯身纺织材料（`blanket_body_textile_input`）

记录构成毯身的具体接收纺织材料，包括纤维组成、结构、整理、供应商批次和调湿质量。通用面料记录不保留这些限定信息，因此 UUID 未解决。

- 选定流：Ready-to-make blanket body textile
- 流属性/单位：Mass / kg
- 数量规则：称量或核对为所声明产品批次接收的供应商认证调湿纺织材料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至裁剪的调湿毯身纺织材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-ecolabel-textiles-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调湿毯身纺织材料（`conditioned_blanket_body_output`）

本中间品是隔离、识别和调湿后放行的实测纺织材料；它不同于通用面料，因此 UUID 未解决。

- 选定流：Conditioned blanket body textile
- 流属性/单位：Mass / kg
- 数量规则：放行至裁剪的实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至裁剪的调湿毯身纺织材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

##### 废物流

##### 基本流

### 过程：裁剪与缝制（`cutting_makeup`）

#### 输入

##### 产品流

###### 调湿毯身纺织材料（`conditioned_blanket_body_input`）

按产品批次记录发往裁剪的调湿材料；未解决 UUID 必须与上一过程声明的输出身份一致。

- 选定流：Conditioned blanket body textile
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪的实测调湿纺织材料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：

###### 缝纫线（`sewing_thread_input`）

在前景数据包中分别记录实际缝纫线材料和线密度规格；本卡表示所声明产品使用的单项缝纫线交换。

- 选定流：缝纫线
- 流属性/单位：Mass / kg
- 数量规则：称量领用线减去退回可用线，或按供应商核实的线密度将可靠长度换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：

###### 裁剪和缝制外购电力（`purchased_electricity_cutting`）

记录裁剪、缝制、修边和局部抽风的计量外购电力。在电压等级和供应地域匹配到一个兼容公开流之前，UUID 未解决。

- 选定流：Purchased grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表电量；否则用机器运行时间和额定负荷作为文件化因果驱动分配经核对的场址总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未整理装配毯（`unfinished_blanket_output`）

记录任何已声明湿法后整理和最终包装之前的装配毯质量；没有核验到精确公开中间品身份。

- 选定流：Unfinished assembled blanket
- 流属性/单位：Mass / kg
- 数量规则：裁剪和缝制后的实测合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：

##### 废物流

###### 纺织裁剪边角料（`textile_cutting_offcuts`）

单独称量并记录作为废物流离开裁剪的毯身边角料；返回生产的可复用部件是内部循环，不是废物输出。

- 选定流：废弃纤维织物 `cd3a2b81-3287-457e-9501-2a39f59cec99`
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：

##### 基本流

### 过程：湿法后整理与干燥（`wet_finishing_drying`）

#### 输入

##### 产品流

###### 未整理装配毯（`unfinished_blanket_input`）

记录进入具体湿法后整理路线的未整理毯；中间品 UUID 未解决。

- 选定流：Unfinished assembled blanket
- 流属性/单位：Mass / kg
- 数量规则：投入湿法后整理路线的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_batch`
- 来源：`jrc-textiles-bref-2023`

###### 工艺水（`process_water_input`）

从仪表或批次配方记录进入洗涤、准备、后整理和漂洗的水，不得与废水输出合并。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入湿法操作的计量或槽体积投水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_batch`
- 来源：`eu-textiles-bat-2022`; `ifc-textile-ehs-2007`

###### 液体洗涤剂（`liquid_detergent_input`）

记录毯子洗涤操作投加的配方液体洗涤剂；其他化学品必须增加为单独原子交换。

- 选定流：液体洗涤剂 `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- 流属性/单位：Mass / kg
- 数量规则：所声明产品批次的领料质量或加药系统质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing`
- 来源：`eu-ecolabel-textiles-2014`; `eu-textiles-bat-2022`

###### 纺织后整理剂（`textile_finishing_agent_input`）

记录所声明毯子路线使用的单一配方后整理剂，以及产品名称、功能、组成披露和批次剂量；其他整理剂必须另建卡片。

- 选定流：纺织整理剂 `2289d57c-b3aa-4288-a69c-c0f7aa016702`
- 流属性/单位：Mass / kg
- 数量规则：批次领料质量或经校准加药系统质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing`
- 来源：`eu-ecolabel-textiles-2014`; `eu-textiles-bat-2022`

###### 外购蒸汽（`purchased_steam_input`）

记录跨越场址边界用于湿加工或干燥的外购蒸汽；排除在单独场内供热过程中生成的蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：供应给纳入湿法后整理和干燥操作的计量蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法后整理毯（`wet_finished_blanket_output`）

记录离开所声明湿法后整理路线的干燥调湿毯；在存在精确中间品记录前 UUID 未解决。

- 选定流：Wet-finished blanket
- 流属性/单位：Mass / kg
- 数量规则：放行至检验的实测干燥调湿输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_batch`
- 来源：

##### 废物流

###### 纺织工艺废水（`textile_process_wastewater`）

记录移交场内或场外处理的废水，保留排放/处理路线和批次或仪表链接。

- 选定流：废水，纺织工艺（排放至水体） `48438fa9-4988-405c-ba44-646f134e2ecc`
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或以文件化密度将实测体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥湿法后整理毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`; `ifc-textile-ehs-2007`

##### 基本流

### 过程：场内天然气供热（`onsite_heat_generation`）

#### 输入

##### 产品流

###### 场内燃烧天然气（`natural_gas_input`）

从经校准燃料表或核对发票记录用于直接或间接过程热的天然气；不得与外购蒸汽合并。

- 选定流：天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：用同一报告期供应商高位热值换算计量天然气数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 高位热值天然气消耗
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_combustion`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 化石二氧化碳排放到空气（`fossil_co2_to_air`）

使用实测烟气结果或明确记录的公认燃烧因子计算，记录来自同一天然气清单的直接化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或按计量燃料和文件化公认因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 高位热值天然气消耗
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_combustion`
- 来源：`eu-textiles-bat-2022`

### 过程：检验与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 包装前成品毯（`wet_finished_blanket_input`）

记录放行至最终检验的干燥毯；没有湿法后整理的路线采用任何干法整理后的合格未整理毯。

- 选定流：Wet-finished blanket
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

###### 检验和包装外购电力（`purchased_electricity_packaging`）

记录检验、折叠、贴标、封装和包装用电；在电压和地域精确之前 UUID 未解决。

- 选定流：Purchased grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表电量；否则用文件化运行时间和负荷分配经核对的场址总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

###### 瓦楞纸板箱（`corrugated_box_input`）

记录所声明可销售包装配置消耗的瓦楞纸板箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：领用包装质量减未用退回量，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

###### 聚乙烯包装薄膜（`polyethylene_packaging_film`）

记录用于袋、套或包裹的单项聚乙烯薄膜交换；检索候选的 CPC 身份不是包装薄膜，因此不写 UUID。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：领用薄膜质量减未用退回量，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

###### 纸质包装标签（`paper_label_input`）

记录附在或装入所声明产品的纸标签；需要时用核实的供应商单标签质量换算标签数量。

- 选定流：包装标签，纸质 `d5890643-6859-42b5-9e05-556b072c6a8c`
- 流属性/单位：Mass / kg
- 数量规则：领用标签数量乘核实的单标签质量，再扣除未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 质量放行毯（`reference_blanket_output`）

这是最终检验后的参考产品，采用干燥净质量，并单独披露包装状态。

- 选定流：毛布 `b7478885-d1a2-4ced-9240-4737fc0b8020`
- 流属性/单位：Mass / kg
- 数量规则：质量放行毯输出的实测干燥净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品毯净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`un-stats-cpc-3-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有共享前景操作 | 首先通过分表、批次隔离、生产线级质量平衡和独立运行过程拆分避免分配。 | `iso-14044-2006` |
| `allocation_causal` | 共享公用工程和公共服务 | 无法拆分时，采用机器运行时间和负荷、蒸汽需求、水表、加工质量或占用批次能力等文件化物理因果驱动。 | `iso-14044-2006` |
| `allocation_multi_product` | 生产多个毯子 SKU 或其他纺织产品的设施 | 除非无法建立物理关系且研究明确证明替代方法合理，否则不得使用收入分配；披露分配基准、总量、分配量和敏感性。 | `iso-14044-2006` |
| `allocation_recycling` | 边角料、不合格品、回收化学品和可复用包装 | 记录实际去向，并将内部复用保留为内部循环；没有明确声明的下游建模约定时，不得计入回收、复用或避免生产信用。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `material_receipt_conditioning` | 接收和调湿纺织材料质量 | 地磅、秤、收货和批次放行记录 | 材料身份、纤维组成、结构、供应商批次、毛重、皮重、调湿质量、含水基准、放行状态 | 经校准称量和批次核对 | kg | 每个接收和放行批次 | 代表性报告年 | 服务该产品的全部仓储和调湿区域 | 汇总合格批次质量，并核对期初库存加收货减领用和期末库存 | 秤校准、供应商规范、批次追溯、库存核对 |
| `cp_cutting_mass_balance` | `cutting_makeup` | 纺织材料、缝纫线、输出和边角料质量 | 领退料、称量和生产记录 | SKU、批次、领用纺织材料、退回纺织材料、缝纫线领用/退回、合格输出、边角料、不合格品 | 经校准称量；仅在无法称量时采用核实的线长质量换算 | kg | 每个生产批次 | 代表性报告年 | 全部裁剪和缝制线 | 核对材料输入与合格输出、边角料、不合格品和库存变化 | 秤校准、批次核对、异常日志 |
| `cp_wet_process_batch` | `wet_finishing_drying` | 毯子和工艺水平衡 | 批次单、水表、槽液位和调湿质量记录 | 路线、批次、纺织材料投料、水表起止、槽体积、干输出、含水基准 | 批次关联仪表和经校准称量 | kg | 每个湿加工批次 | 代表性报告年 | 全部纳入湿法后整理和干燥设备 | 汇总批次记录并按合格干输出归一化 | 仪表校准、配方版本、质量/水平衡 |
| `cp_chemical_dosing` | `wet_finishing_drying` | 洗涤剂和后整理剂剂量 | 配方、领退料和加药系统记录 | 产品名称、供应商、功能、组成/SDS 引用、批次、剂量、退回量 | 经校准加药系统或领用减退回称量 | kg | 每批 | 代表性报告年 | 全部化学品准备和加药点 | 按命名化学品和产品路线汇总净剂量 | 校准、批准配方、采购/库存核对、SDS |
| `cp_wastewater_records` | `wet_finishing_drying` | 送处理废水 | 流量计、批次排放、处理移交和采样记录 | 路线、体积或质量、换算密度、去向、采样时间、监测参数 | 连续仪表或与排放路线关联的批次槽测量 | kg | 每批或连续仪表间隔 | 代表性报告年 | 全部纳入湿加工排放 | 按处理去向汇总；仅用文件化密度换算体积 | 仪表校准、样品监管链、进出水核对 |
| `cp_energy_records` | `cutting_makeup` | 外购电力和蒸汽 | 公用工程仪表、发票、运行时间和负荷记录 | 仪表起止、载能体、电压或蒸汽条件、运行时间、负荷、分配驱动、产品输出 | 分表；否则用文件化因果分配经核对场址仪表 | kWh 或 kg | 仪表间隔及月度核对 | 代表性报告年 | 全部纳入设备和公用工程母管 | 汇总直接读数；分配有文件的共享余量并与发票/场址表核对 | 仪表校准、发票核对、分配工作表 |
| `cp_fuel_combustion` | `onsite_heat_generation` | 天然气和直接化石 CO2 | 燃料表、供应商热值、烟气测量和计算记录 | 天然气数量、单位、高位热值、计量期、设备、运行小时、实测排放或因子身份 | 经校准燃料表加烟气结果或文件化公认因子计算 | MJ 和 kg | 仪表间隔及报告期 | 代表性报告年 | 服务纳入操作的全部场内燃烧 | 将各期转换为 MJ GCV，并把排放链接到相同燃料清单 | 仪表校准、供应商证书、烟气报告或因子出处、核对 |
| `cp_packaging_release` | `inspection_packaging` | 包装投入和参考输出 | 包装领退料、标签数量、称量、检验和放行记录 | SKU、批次、毯子数量、产品净质量、纸箱质量、薄膜质量、标签数量/质量、不合格件、包装状态 | 经校准称量，加上核实组件质量的数量到质量换算 | kg | 每个包装批次 | 代表性报告年 | 全部检验和包装线 | 分别核对净放行产品和每种包装材料 | 秤校准、组件规范、放行记录、包装核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部清单交换 | 归一化交换 = 分配给合格产品的总交换 / 质量放行毯的干燥净 kg | 分配交换；干燥净放行产品质量 | 每 kg 参考产品的交换 | `iso-14044-2006` |
| `calc_item_mass` | 按数量记录的产品或标签 | 质量 = 核实数量乘以同 SKU 和适用批次或抽样期的代表性实测单件质量 | 件数；实测单件质量；抽样记录 | kg | `iso-14048-2002` |
| `calc_water_volume_mass` | 水和废水记录 | 质量 = 实测体积乘以适用状态下文件化密度；保留原始体积 | 体积；密度；温度或声明状态 | kg | `iso-14048-2002` |
| `calc_natural_gas_energy` | 天然气输入 | 能量 = 计量天然气数量乘以同报告期供应商高位热值 | 天然气数量；高位热值 | MJ GCV | `eu-textiles-bat-2022` |
| `calc_mass_balance` | 材料和湿加工批次 | 核对输入 = 合格输出 + 废物 + 排放/移交 + 库存变化；调查并披露未解释差额 | 实测输入；输出；废物；移交；库存变化 | 批次平衡和未解释差额 | `eu-textiles-bat-2022`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和中间品 | 在全部过程记录中保持产品 SKU、纤维组成、结构、后整理路线、尺寸、单件质量、含水基准和批次。 | 产品规范、材料清单、批次流转单、放行证书 |
| `dq_temporal` | 全部前景记录 | 在可行时采用代表性连续 12 个月；披露影响代表性的停机、启动、生产活动和替代。 | 带日期仪表序列、生产日历、异常日志 |
| `dq_completeness` | 每个过程 | 核对材料、水、化学品、能源、产品、废物、废水和直接排放；记录每项缺失流和估算。 | 签署的质量/能量核对与完整性清单 |
| `dq_measurement` | 实测交换 | 识别仪表/秤、单位、校准状态、读数间隔和换算系数；保存源记录和计算沿袭。 | 校准证书、原始读数、发票、计算工作表 |
| `dq_supplier` | 上游输入 | 记录重要纺织材料、化学品、能源和包装投入的供应商、生产地域、技术/路线、参考年和数据集匹配。 | 供应商声明、SDS、证书、链接数据集元数据 |
| `dq_chemical` | 湿法后整理化学品 | 保留产品身份、功能、组成或 SDS 引用、批次剂量和适用限用物质或替代评估。 | 批准配方、SDS、采购和加药记录、合规声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求流 UUID `b7478885-d1a2-4ced-9240-4737fc0b8020`、公开 state 100 Product flow 证据、精确 CPC 27110 范围、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `un-stats-cpc-3-2025` |
| `validate_required_qualifiers` | 参考产品元数据 | 任何必需限定信息缺失或产品含电气装置/电路时判定完整性失败。 | `eu-ecolabel-textiles-2014` |
| `validate_atomic_inventory` | 过程清单 | 要求每张清单卡表示一项交换，只保留直读核验 UUID，并为每个无 UUID 行保留明确未解决原因。 | `iso-14048-2002` |
| `validate_process_route` | 过程边界 | 要求全部必需过程和每项适用条件过程；将外包操作核对至链接数据集。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_values` | 清单数量 | 要求每个发布数量源自前景记录或对前景记录进行的已识别计算；本候选 PCR 不提供 AI 编写数值范围或默认值。 | `iso-14044-2006`; `iso-14048-2002` |
| `validate_mass_balance` | 每个生产阶段和报告期 | 要求材料输入、合格输出、废物、移交和库存变化的文件化核对，并调查和披露残差。 | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `validate_allocation` | 共享操作 | 要求拆分或文件化因果物理分配驱动、完整总量、分配量，以及分配显著影响结果时的敏感性。 | `iso-14044-2006` |
| `validate_source_traceability` | 数据包 | 要求原始记录沿袭、校准/质量证据、规范规则来源 id 和链接的上游数据集元数据。 | `iso-14048-2002` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后可作为 `secondary_dataset` 或 `background_dataset` 使用的前景毯子制造数据集 |
| downstream_use | 为匹配所声明限定信息的非电热毯或旅行毯构建产品 `process` 数据集和下游 `lifecyclemodel` 系统 |
| allowed_use | 产品、地域、技术和时间具有代表性时，用于门到门毯子制造，或作为更广泛从摇篮到工厂门/坟墓模型中的链接制造阶段 |
| excluded_use | 电热毯；地板覆盖物；睡袋；上游纺织品生产；使用阶段服务主张；未经适配的显著不同结构或后整理路线产品 |
| required_metadata | 规范 PCR id；CPC 27110；参考 UUID/属性/单位组；必需限定信息；过程纳入；地域；参考年；技术；分配；数据源；未解决身份；包装状态 |
| required_quality_disclosure | 初级数据占比；仪表和秤覆盖率；校准状态；时间覆盖；供应商数据覆盖；质量平衡残差；分配份额；缺失或估算交换；外包操作覆盖 |
| update_trigger | 纤维组成、结构、后整理化学品或路线、能源系统、废水处理、包装配置、生产地域、供应商数据集、参考流身份或重大数据质量发现发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-stats-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0 structure，子类 27110，官方结构日期 2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-12） | 官方产品类别名称和范围锚点 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-12） | 纺织过程分解、湿加工、后整理和排放控制背景 |
| `eu-textiles-bat-2022` | 官方指南（`official_guidance`） | 欧盟委员会实施决定 (EU) 2022/2508，纺织工业 BAT 结论，CELEX 32022D2508，https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng（检索于 2026-08-12） | 输入/输出清单、水和能源管理、化学品管理、废水和空气排放监测、过程边界 |
| `eu-ecolabel-textiles-2014` | 官方指南（`official_guidance`） | 欧盟委员会决定 2014/350/EU，纺织产品欧盟生态标签准则，合并文本，CELEX 32014D0350，https://eur-lex.europa.eu/eli/dec/2014/350/oj/eng（检索于 2026-08-12） | 纺织产品范围、电气排除、纤维/组件披露、化学品、加工和使用性能背景 |
| `ifc-textile-ehs-2007` | 官方指南（`official_guidance`） | 世界银行集团/IFC，Environmental, Health, and Safety Guidelines for Textile Manufacturing，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf（检索于 2026-08-12） | 水、化学品、废水、废物和空气排放采集与控制背景 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，含修订 1:2017 和 2:2020，https://www.iso.org/standard/38498.html（检索于 2026-08-12） | 目标与范围、清单、分配、完整性、报告和审查规则 |
| `iso-14048-2002` | 标准（`standard`） | ISO/TS 14048:2002，Environmental management — Life cycle assessment — Data documentation format，2025 年确认，https://www.iso.org/standard/29872.html（检索于 2026-08-12） | 透明数据字段、采集、计算、质量和交换文档 |
