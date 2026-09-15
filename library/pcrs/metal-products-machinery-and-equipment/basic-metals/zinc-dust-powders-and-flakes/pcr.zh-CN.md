---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-dust-powders-and-flakes
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 锌末、锌粉及片状粉末

## 1. 范围与适用性

本 PCR 适用于生产设施门口交付的锌末、锌粉或片状锌粉的前景生产。所覆盖的已声明路线包括熔融锌雾化、从氧化锌床层回收锌末，以及将锌颗粒研磨成片状。数据包只能对实际采用的路线建模。

边界始于外购锌、氧化锌、锌粉、能源、工艺介质和添加剂跨越设施边界，止于设施门口的合格散装产品净产量。上述投入的上游生产用链接数据集表示。除非研究明确扩展并披露边界，否则包装、设施门口之后的运输、下游涂料或化学品使用、氧化锌制造、原生锌冶炼及锌废料处理不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-dust-powders-and-flakes |
| classification_refs | CPC 3.0：41544，Zinc dust, powders and flakes |
| covered_products | 金属锌末；金属锌粉；片状金属锌粉；在同一类别中销售且已声明组成的锌合金颗粒 |
| excluded_products | 未锻轧锌锭；锌条、杆、型材、丝、板、片、带或箔；作为产品销售的氧化锌或其他锌化合物；锌废料；含锌颗粒的配制涂料 |
| representative_product | 符合生产商所声明锌含量、粒度分布及松装密度或振实密度规范的锌末或锌粉 |
| production_route | 熔融锌雾化与回收；从氧化锌床层回收锌末；或将锌粉研磨并精整为片状粉末 |
| market_state | 生产设施门口的干态或已声明溶剂润湿颗粒产品，并说明产品形态、水分或溶剂含量、添加剂及包装纳入情况 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产设施门口提供具有所声明组成和颗粒形态的锌末、锌粉或片状锌粉 |
| How much | 1 kg 合格产品净量；除非研究边界明确纳入包装，否则不含包装 |
| How well | 符合生产商声明的锌含量或合金组成、粒度分布、形貌、松装密度或振实密度，以及水分或残余溶剂规范 |
| How long or cycle | 一个生产批次或生产周期；不设定使用寿命 |
| reference_flow_link | 参考数量等于扣除内部循环、非合格物料和工艺介质滞留后得到的合格产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 锌粉 `4d92b8d4-6633-4238-b0e2-9096db3e8882` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；锌含量或合金组成；粒度分布；颗粒形貌；松装密度或振实密度；生产路线；干态或溶剂润湿状态；水分或残余溶剂含量；表面处理和添加剂；包装纳入情况；地域；技术；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有含锌产品流或废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明产品状态报告净质量，并说明是否计入残余溶剂、水分、合金元素和表面添加剂。 |
| `gas_reference_conditions` | 天然气、压缩空气及其他按体积计量的气体 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量条件，并在归一化前把气体体积换算至数据集声明的参考温度和压力。 |
| `electricity_energy` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电力应与燃料分开计量，按声明的换算关系将 kWh 转为 MJ，不得合并能源。 |
| `net_product_normalization` | 全部前景清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | 用生产周期交换总量除以合格产品净质量；内部循环既不得作为新的外部投入，也不得作为额外参考产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在设施接收点的外购锌、氧化锌或锌粉，并声明其牌号和物理状态 |
| starting_condition_role | 链接上游数据集的前景产品投入 |
| product_classification_scope | 与 CPC 3.0 子类 41544 对应的金属锌末、锌粉和片状粉末 |
| recursive_input_rule | 同一类别的锌末或锌粉用于生产片状粉末时，只记录一次上游供应商数据集投入，不得按本 PCR 递归重建 |
| upstream_dataset_requirement | 每项外购材料、燃料、电力、气体、水、溶剂及添加剂均应链接地域、技术和时间具有代表性的上游数据集 |
| disclosure | 声明路线、起始材料、锌牌号、产品形态、内部循环、减排设施、包装纳入情况，以及任何被省略的路线特定交换 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_route_selection` | foreground_system_boundary | 只纳入已声明路线的过程，但应包含从选定起始材料直至设施门口回收、分级和合格产品净产出的所有操作。 | `eu-jrc-nfm-bref-2017`; `eu-cn-explanatory-notes-zinc-2019`; `us-patent-7021573-zinc-flake` |
| `sb_upstream_linkage` | purchased_inputs | 外购投入作为带上游数据集的产品流处理，不得把其上游生产并入前景单元过程。 |  |
| `sb_direct_releases` | direct_environmental_exchanges | 将经末端治理后的实测直接排放作为基本流报告，并将收集的残余物与已排放物质分开报告。 | `eu-jrc-nfm-bref-2017` |
| `sb_packaging` | packaging | 默认边界及参考产品质量不含包装；研究纳入包装时，应将每种实际包装组件分别作为原子产品投入，并披露边界变化。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_melting` | 锌进料准备与熔化 | `conditional` | 雾化路线接收固态锌而非已计量熔融锌时纳入 | 熔融锌的前景制备 | 转移的熔融锌 kg |
| `atomization_finishing` | 雾化、冷却、回收与分级 | `conditional` | 通过空气、水、惰性气体或离心雾化生产锌末或锌粉时纳入 | 前景颗粒形成与产品回收 | 合格锌末或锌粉净量 kg |
| `dust_recovery_finishing` | 锌末回收与分级 | `conditional` | 从氧化锌床层回收可销售锌末而非通过雾化生产时纳入 | 前景锌末回收 | 合格回收锌末净量 kg |
| `flake_milling_finishing` | 片状锌粉研磨、冷却、回收与分级 | `conditional` | 将锌粉或锌末研磨为片状时纳入 | 前景形貌转化与产品精整 | 合格片状锌粉净量 kg |

必须至少纳入 `atomization_finishing`、`dust_recovery_finishing` 或 `flake_milling_finishing` 中的一项。路线条件落实到各原子交换；未列出的配方添加剂、工艺介质或直接排放在跨越所选前景边界时，应另增独立原子行。

### 过程：锌进料准备与熔化（`feed_melting`）

#### 输入

##### 产品流

###### 未锻轧锌进料（`fm_zinc_feed`）

金属锌进入熔化炉时称量。

- 选定流：锌 `418775bb-a062-4748-87dd-73a5ee633bb4`
- 流属性/单位：Mass / kg
- 数量规则：外部锌进料的仪表记录或批次称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_melting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 进料准备与熔化用电（`fm_electricity`）

计量分配至本过程的加料、感应或电阻加热、泵及局部抽风用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至熔化生产周期的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转移的熔融锌
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_melting_inputs`
- 来源：

###### 燃气熔化用天然气（`fm_natural_gas`）

仅在熔化炉或保温炉燃烧气态天然气时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：校正至参考条件的天然气实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转移的熔融锌
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_melting_inputs`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至雾化过程的熔融锌（`fm_molten_zinc_out`）

该前景内部中间流直接与 `ar_molten_zinc_in` 链接。

- 选定流：熔融锌
- 流属性/单位：Mass / kg
- 数量规则：称量或按质量平衡计算从熔化炉转移的熔融锌
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个熔化生产周期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_melting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 送往外部回收或处置的锌浮渣（`fm_zinc_dross`）

记录扣除实测内部返回量后离开前景系统的锌浮渣净量。

- 选定流：锌浮渣
- 流属性/单位：Mass / kg
- 数量规则：按去向和处理路线称量的浮渣净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转移的熔融锌
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_melting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 天然气燃烧产生的化石源二氧化碳（`fm_co2_fossil`）

仅在场内燃烧天然气时纳入直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或采用有据可查的碳平衡因子由实测燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转移的熔融锌
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_melting_outputs`
- 来源：

###### 熔化过程排放至空气的锌（`fm_zinc_to_air`）

报告通过末端空气污染控制边界的实测锌。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测浓度乘以校正后的干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转移的熔融锌
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_melting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：雾化、冷却、回收与分级（`atomization_finishing`）

#### 输入

##### 产品流

###### 从熔化过程接收的熔融锌（`ar_molten_zinc_in`）

采用与 `fm_molten_zinc_out` 相同的前景内部流及数量；外购熔融锌则在接收时计量。

- 选定流：熔融锌
- 流属性/单位：Mass / kg
- 数量规则：匹配的过程间转移量或外购熔融锌实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 雾化与回收用电（`ar_electricity`）

计量压力产生、雾化器驱动、冷却、输送、过滤和分级用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至雾化生产周期的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 作为雾化介质的压缩空气（`ar_compressed_air`）

仅在空气雾化路线中纳入，并按所声明参考条件记录输送空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：校正至参考条件的压缩空气实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 作为雾化介质或冷却补水的工艺用水（`ar_process_water`）

仅计入水雾化或冷却系统补水中跨越前景边界的水，不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补水质量，或用有据可查的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 惰性气氛用氮气（`ar_nitrogen`）

外购或场内供应的气态氮跨越雾化器边界时纳入。

- 选定流：氮气 `92233c86-8e75-441c-94de-03cc91bc7c10`
- 流属性/单位：Mass / kg
- 数量规则：实测或供应商记录的氮气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格锌末或锌粉净产出（`ar_zinc_dust_out`）

记录冷却、袋式过滤回收、分级和内部循环后的可销售物料。

- 选定流：锌粉 `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的合格产品净称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomization_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

###### 雾化与回收过程排放至空气的锌（`ar_zinc_to_air`）

报告通过末端袋式过滤器或其他空气污染控制边界的实测锌。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测浓度乘以校正后的干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格雾化产品净量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_atomization_outputs`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：锌末回收与分级（`dust_recovery_finishing`）

#### 输入

##### 产品流

###### 回收床层的氧化锌进料（`dr_zinc_oxide`）

仅计入跨越所选回收过程边界的外供氧化锌。

- 选定流：氧化锌 `1512d759-45f7-4cf2-a42c-d02a8f71a19f`
- 流属性/单位：Mass / kg
- 数量规则：称量干基氧化锌进料并记录组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格回收锌末净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_recovery_inputs`
- 来源：`eu-cn-explanatory-notes-zinc-2019`

###### 锌末回收与分级用电（`dr_electricity`）

计量回收设备、输送、过滤和分级用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至回收生产周期的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格回收锌末净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_recovery_inputs`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格回收锌末净产出（`dr_zinc_dust_out`）

记录分级和内部回用后的可销售回收锌末质量。

- 选定流：锌粉 `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的合格回收产品净称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_recovery_outputs`
- 来源：`eu-cn-explanatory-notes-zinc-2019`

##### 废物流

##### 基本流

###### 锌末回收过程排放至空气的锌（`dr_zinc_to_air`）

报告通过末端空气污染控制边界的实测锌。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测浓度乘以校正后的干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格回收锌末净量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_recovery_outputs`
- 来源：

### 过程：片状锌粉研磨、冷却、回收与分级（`flake_milling_finishing`）

#### 输入

##### 产品流

###### 锌粉或锌末进料（`fl_zinc_powder_in`）

记录进入研磨的外购或转移锌颗粒，并声明牌号和粒度分布。

- 选定流：锌粉 `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- 流属性/单位：Mass / kg
- 数量规则：研磨生产周期投入锌颗粒的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_inputs`
- 来源：`us-patent-7021573-zinc-flake`

###### 研磨与精整用电（`fl_electricity`）

计量研磨、冷却、溶剂回收、干燥、输送和分级用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至片状粉末生产周期的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_inputs`
- 来源：`us-patent-7021573-zinc-flake`

###### 湿法研磨用白油溶剂（`fl_white_spirit`）

仅计入湿法研磨中新补充且从外部供应的白油溶剂；内部回收溶剂在质量平衡中另行核算。

- 选定流：白酒和特殊沸点工业酒精 `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- 流属性/单位：Mass / kg
- 数量规则：研磨生产周期新补充溶剂的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_inputs`
- 来源：`us-patent-7021573-zinc-flake`

###### 硬脂酸研磨润滑剂（`fl_stearic_acid`）

仅在配方实际加入硬脂酸时计入；其他润滑剂应分别作为原子行记录。

- 选定流：硬脂酸
- 流属性/单位：Mass / kg
- 数量规则：每批新加入硬脂酸的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_inputs`
- 来源：`us-patent-7021573-zinc-flake`

###### 研磨机冷却补充工艺用水（`fl_process_water`）

仅计入作为冷却系统补水跨越前景边界的水；不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补水质量，或用有据可查的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_inputs`
- 来源：`us-patent-7021573-zinc-flake`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格片状锌粉净产出（`fl_zinc_flake_out`）

记录研磨、研磨介质分离、必要时干燥、分级和内部循环后的可销售片状粉末。

- 选定流：片状锌粉
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的合格片状粉末净称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_milling_outputs`
- 来源：`us-patent-7021573-zinc-flake`

##### 废物流

##### 基本流

###### 研磨与精整过程排放至空气的锌（`fl_zinc_to_air`）

报告通过末端空气污染控制边界的实测锌。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测浓度乘以校正后的干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格片状锌粉净量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_flake_milling_outputs`
- 来源：`us-patent-7021573-zinc-flake`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | multi_route_or_shared_equipment | 应优先采用过程细分、路线特定仪表、批次记录和运行时间归属，再使用分配。 |  |
| `allocation_internal_recycle` | internal_zinc_recycle | 对同一前景系统内返回的锌末、非合格颗粒或锌浮渣不分配负荷；内部返回量只扣除一次，既不作为新的外部投入，也不作为额外产出。 | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_coproduct` | exported_zinc_bearing_output | 含锌产出有预期外部用途且数量可独立计量时，应采用有据可查且合理的物理因果关系；否则采用质量分配并报告敏感性情景。 |  |
| `allocation_waste_treatment` | wastes | 废物收集和处理负荷归于前景产品，除非经审查的下游数据集规定其他截断方式；不得在未明确披露时采用避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_melting_inputs` | `feed_melting` | 外部锌、电力和天然气投入 | 地磅单；批次表；电表；燃气表 | 投入身份；毛重和皮重；仪表起止读数；参考条件；批次 id | 将校准仪表和批次称量值核对至同一生产周期 | kg; MJ; m3 | 每批及每月仪表核对 | 完整的已声明代表性生产期 | 服务于所声明熔化路线的全部设备 | 汇总外部投入；共享仪表按有据可查的运行时间或分表分配；按熔融锌转移量归一化 | 校准记录；发票；批次核对；仪表日志 |
| `cp_feed_melting_outputs` | `feed_melting` | 熔融锌、浮渣、化石源 CO2 和锌空气排放 | 转移秤；残余物单据；燃料分析；烟气记录 | 转移质量；浮渣质量；燃料碳；烟气量；锌浓度；水分；氧含量；运行时间 | 将产出和排放记录匹配至熔化生产周期和末端治理边界 | kg; Nm3 | 每次转移或残余物发运；排放按许可频率 | 与熔化投入相同 | 熔化炉、保温炉及所分配的治理设备 | 计算转移锌净量和期间排放；按去向保留浮渣汇总 | 秤校准；实验室报告；烟气测试 QA；碳平衡工作表 |
| `cp_atomization_inputs` | `atomization_finishing` | 熔融锌、电力、压缩空气、工艺用水和氮气 | 转移秤；批次表；公用工程仪表 | 锌质量；电量；气体或空气体积及参考条件；补水量；路线 id | 只记录已声明雾化路线实际使用的公用工程 | kg; MJ; m3 | 每个生产周期并每月核对 | 完整的已声明代表性生产期 | 雾化器、冷却、输送和过滤设备 | 按生产周期汇总；扣除内部循环水和内部气体；按合格产出归一化 | 校准；批次路线记录；仪表核对 |
| `cp_atomization_outputs` | `atomization_finishing` | 合格产品和锌空气排放 | 产品秤；分级记录；过滤记录；烟气测量 | 产品质量；牌号；粒度分布；烟气量；锌浓度 | 核对产品、内部返回、收集粉尘和排放锌 | kg; Nm3 | 每批；排放按许可频率 | 与雾化投入相同 | 雾化器至末端分级和治理出口 | 可销售净产出等于发运合格质量；由校正烟气量和浓度计算排放锌 | 秤校准；粒度报告；烟气测试 QA；质量平衡 |
| `cp_dust_recovery_inputs` | `dust_recovery_finishing` | 氧化锌和电力投入 | 进料秤；组成证书；电表 | 干基进料质量；锌含量；水分；电量；生产周期 id | 核对每个回收生产周期的干基进料和能源 | kg; MJ | 每个生产周期并每月核对 | 完整的已声明代表性生产期 | 回收床层、输送和分级设备 | 将进料换算至干基；汇总电量；按合格回收锌末归一化 | 秤和仪表校准；供应商证书；实验室分析 |
| `cp_dust_recovery_outputs` | `dust_recovery_finishing` | 合格回收锌末和锌空气排放 | 产品秤；分级记录；烟气测量 | 产品质量；锌含量；粒度分布；烟气量；锌浓度 | 核对回收锌末和生产周期末端实测排放 | kg; Nm3 | 每批；排放按许可频率 | 与回收投入相同 | 回收单元至末端分级和治理出口 | 汇总合格产品净量并计算期间锌排放 | 秤校准；实验室分析；烟气测试 QA；质量平衡 |
| `cp_flake_milling_inputs` | `flake_milling_finishing` | 锌进料、电力、溶剂、润滑剂和冷却水 | 批次表；秤；公用工程仪表；溶剂库存 | 锌质量；电量；新鲜溶剂；回收溶剂；润滑剂；补水；路线 id | 分开记录新鲜外部投入和内部回收量 | kg; MJ | 每个研磨生产周期并每月核对 | 完整的已声明代表性生产期 | 研磨、冷却、溶剂回收、干燥和分级设备 | 按生产周期汇总新鲜投入；内部回收溶剂不得再次计为外部投入 | 秤和仪表校准；领料单；溶剂库存闭合 |
| `cp_flake_milling_outputs` | `flake_milling_finishing` | 合格片状锌粉和锌空气排放 | 产品秤；形貌和粒度测试；烟气测量 | 产品质量；锌含量；形貌；粒度分布；烟气量；锌浓度 | 核对产品、内部返回、滞留溶剂和末端锌排放 | kg; Nm3 | 每批；排放按许可频率 | 与研磨投入相同 | 研磨机至末端分级和治理出口 | 汇总合格产品净量；计算期间锌排放；按参考流归一化 | 秤校准；形貌和粒度报告；烟气测试 QA；生产周期质量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 生产周期交换量除以合格参考产品净质量 | 生产周期交换量；合格产品净质量 | 每 kg 参考产品对应的 kg、MJ 或 m3 |  |
| `calc_gas_reference_volume` | 按体积计量的气体行 | 使用有据可查的仪表修正或理想气体修正，将实测气体体积换算至所声明参考温度和压力 | 实测体积；压力；温度；适用时的压缩因子 | 参考条件 m3 |  |
| `calc_zinc_air_release` | 锌基本流行 | 锌排放量 = 校正后的干烟气体积乘以实测锌质量浓度，并进行单位换算 | 干烟气体积；锌浓度；采样时长 | 锌排放 kg | `eu-jrc-nfm-bref-2017` |
| `calc_internal_transfer_match` | `fm_molten_zinc_out`; `ar_molten_zinc_in` | 边界核对后，同一生产周期的一对内部转移量必须相等 | 转移质量；批次 id | 匹配的内部熔融锌质量 |  |
| `calc_net_external_input` | 循环锌或溶剂 | 外部投入净量等于跨越边界的外购物料；内部回收物在过程平衡中跟踪，但不得再次加入外部投入 | 采购记录；内部返回记录 | 外部投入净量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个产品族均应保留锌分析或合金组成、产品形态、粒度分布、形貌、密度规范、水分或溶剂状态及添加剂声明。 | 批次分析证书和产品规范 |
| `dq_route_identity` | 过程图 | 识别实际雾化、回收或研磨路线，并为每个条件行标明适用或不适用及原因。 | 工艺流程图、设备清单和签署的路线声明 |
| `dq_mass_balance` | 含锌行 | 在同一期间核对含锌投入、产品净量、内部返回、浮渣、留样、库存变化和实测排放，并调查无法解释的不平衡。 | 生产周期及年度锌质量平衡工作表 |
| `dq_meter_quality` | 实测投入和产出 | 使用经校准的秤和仪表；否则应记录未校准仪器的不确定性及修正。 | 有效校准证书和数据质量例外日志 |
| `dq_temporal_representativeness` | 前景数据集 | 使用有代表性的连续生产期，并披露停产、试验、异常生产周期和代理期间。 | 生产日历和覆盖评估 |
| `dq_source_linkage` | 外购投入 | 记录各上游数据集的供应商、地域、技术和参考期，并解释重要代理选择。 | 上游数据集交叉表和供应商记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_flow` | foreground_dataset_conformance | 确认归一化后的参考产出恰为 1 kg 合格产品净量，且所有必需限定信息均已填写。 |  |
| `val_route_completeness` | process_map | 确认至少纳入一项产品形成路线，每个已纳入过程包含全部适用原子交换，并为每个被省略条件行记录原因。 | `eu-jrc-nfm-bref-2017`; `eu-cn-explanatory-notes-zinc-2019`; `us-patent-7021573-zinc-flake` |
| `val_uuid_semantics` | uuid_bearing_rows | 确认每个 UUID 仍为 state 100，且与选定流的英文及中文 baseName、流类型、分类、属性、单位组和产品状态相符。 |  |
| `val_internal_transfer` | internal_molten_zinc | 确认每个链接生产周期的 `fm_molten_zinc_out` 等于 `ar_molten_zinc_in`，且不作为外部投入计数。 |  |
| `val_zinc_balance` | zinc_mass_balance | 确认所声明期间全部含锌投入、产品、残余物、内部返回、库存变化和锌直接排放实现核对，并报告不平衡量及所用调查阈值。 | `eu-jrc-nfm-bref-2017` |
| `val_air_emissions` | direct_air_releases | 确认锌和化石源二氧化碳行表示治理后的前景直接排放，且未重复计入上游电力或燃料供应排放。 | `eu-jrc-nfm-bref-2017` |
| `val_no_unresolved_proxy` | publication_readiness | 若任何未解决流被语义代理替代，或未解决 UUID 和范围证据需求未披露，则拒绝发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后作为 secondary_dataset 或 background_dataset |
| downstream_use | 用于在生产设施门口供应锌末、锌粉或片状锌粉的前景或背景建模 |
| allowed_use | 所需锌颗粒形态、组成、路线、地域、技术和参考期与数据集披露相容的产品系统 |
| excluded_use | 未锻轧锌；氧化锌或其他化合物；锌废料处理；锌制品加工；涂料制造；未经代表性论证的不同颗粒形态或生产路线 |
| required_metadata | PCR id 和版本；产品形态；锌含量或合金组成；粒度分布；形貌；松装密度或振实密度；路线；干态或溶剂润湿状态；水分或溶剂含量；添加剂；包装纳入情况；地域；技术；参考期；上游数据集；分配；截断 |
| required_quality_disclosure | 数据覆盖；质量平衡结果；仪表和秤质量；排放测量方法；代理投入；路线排除；未解决身份或范围缺口；不确定性限制 |
| update_trigger | 颗粒形成路线、进料牌号、产品规范、治理设备、能源供应、溶剂体系、分配、场址地域或数据期发生足以实质影响代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-04 | 正式产品分类身份和层级 |
| `eu-cn-explanatory-notes-zinc-2019` | 正式指南（`official_guidance`） | 欧盟，合并版《组合命名法解释性说明》锌相关条目，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02019XC0329(02)-20190724，检索于 2026-09-04 | 区分雾化锌粉和从氧化锌床层回收的锌末 |
| `eu-jrc-nfm-bref-2017` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf，检索于 2026-09-04 | 熔化、雾化、惰性冷却、袋式过滤回收、产品处理和锌直接排放测量的相关性 |
| `us-patent-7021573-zinc-flake` | 文献（`literature`） | US7021573B2，《通过干法研磨锌粉生产片状锌粉的方法》，https://patents.google.com/patent/US7021573B2/en，检索于 2026-09-04 | 片状形貌及条件适用的研磨、溶剂、润滑剂、冷却和分级操作 |
| `china-mof-2026-tariff-product-names` | 正式指南（`official_guidance`） | 中华人民共和国财政部，2026 年税则清单，税则号列 79031000 和 79039000，https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf，检索于 2026-09-04 | 锌末、锌粉及片状粉末的专业中文名称 |
