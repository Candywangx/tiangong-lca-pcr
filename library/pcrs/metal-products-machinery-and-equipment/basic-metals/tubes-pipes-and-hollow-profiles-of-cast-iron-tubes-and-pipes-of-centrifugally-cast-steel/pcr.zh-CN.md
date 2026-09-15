---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-hollow-profiles-of-cast-iron-tubes-and-pipes-of-centrifugally-cast-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铸铁制管、管道及空心异型材；离心铸造钢管

## 1. 范围与适用性

本 PCR 适用于铸铁制管、管道和空心异型材，以及管体以离心铸造方式成形的钢制管材和管道的工厂门生产。只要成品仍处于本语义类别之内，灰铸铁、球墨铸铁以及离心铸造的碳钢、低合金钢或高合金钢均在覆盖范围内。数据包必须声明金属牌号、产品形态和尺寸、承压或服役规范、铸型路线、熔炼炉型、热处理、机械加工、检验，以及出厂销售前施加的内衬或外涂层。

本 PCR 不包括锻轧、无缝挤压、轧制或焊接钢管；管件；管道系统制作；工厂门后的运输；安装；使用；维护和生命末期。仅在其他工序使用离心设备并不能使钢制产品进入本范围；管体本身必须采用离心铸造。该产品类别与库内已有的其他无缝或焊接钢管 PCR 身份相互区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-hollow-profiles-of-cast-iron-tubes-and-pipes-of-centrifugally-cast-steel |
| classification_refs | CPC 3.0: 41291（精确分类语境；映射接受仍由独立治理流程决定） |
| covered_products | 铸铁制管、管道及空心异型材；由钢液经离心铸造制成的管材和管道 |
| excluded_products | 锻轧、轧制、挤压、穿孔无缝或焊接钢管；管件；已安装管道系统 |
| representative_product | 符合要求的工厂门铸铁管或离心铸造钢管成品，仅包括销售前实际施加的内衬和涂层 |
| production_route | 黑色金属炉料准备与熔炼；金属处理；在旋转金属型或砂衬型中离心铸造；路线要求的热处理；清理、机械加工、检验、内衬/涂层和标识 |
| market_state | 制造场址门口成品，以牌号、尺寸、标准/服役等级和表面状态加以识别 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合所声明产品规范的铸铁制管、管道或空心异型材成品，或离心铸造钢制管材或管道成品 |
| How much | 1,000 kg 验收合格产品净质量 |
| How well | 符合所声明的牌号、尺寸、力学性能、承压/服役要求、检验以及内衬/涂层规范 |
| How long or cycle | 一个生产报告期；不主张任何使用寿命等效关系 |
| reference_flow_link | `finishing_testing_and_coating` 中的 `ft_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铸铁管、管材和空心型材，离心铸钢管和管材 `122e65ff-cac1-4c63-a199-7d204800d6f3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铸铁或离心铸钢路线；灰铸铁/球墨铸铁或钢牌号；管材/管道/空心异型材形态；公称直径和壁厚；产品标准和服役等级；适用时的压力等级；炉型和铸型路线；热处理状态；加工余量；内衬和涂层体系；制造地域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收合格的参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有交换归一化到 1,000 kg 通过所声明最终验收检验的产品。参考质量不含运输包装和不合格品。 |
| `material_mass` | 炉料、添加剂、内衬/涂层材料、废物和内部中间体 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准衡器记录；声明湿基、干基、收到状态、元素含量或配方质量基准，且不得混用。 |
| `electricity_energy` | 电网供应的交流电 | 净热值 | MJ | 按过程保留直接计量的用电量。电表以 kWh 报告时，用 1 kWh = 3.6 MJ 转换，并保留原始读数。 |
| `gas_volume` | 气态天然气和工业氧气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积，并声明温度、压力及标准/参考状态约定；不得合并参考状态不同的气体体积。 |
| `water_mass` | 工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录穿越前景边界的净用水。以体积计量时，记录实测密度或有依据的换算方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原生和再生黑色金属材料、合金/处理添加剂、燃料、熔剂、铸型材料、内衬/涂层材料、水和电力穿越制造场址边界时的状态 |
| starting_condition_role | 工厂门到工厂门的前景起点；上游生产由关联背景数据集表示 |
| product_classification_scope | 铸铁制管、管道及空心异型材和离心铸造钢制管材、管道；不含管件及锻轧/焊接制管路线 |
| recursive_input_rule | 外购且属于同一产品类别的返回产品应作为投入并连接其上游数据集；同一场址内返回料属于闭环内部中间流，不递归建模为新的外部产品投入。 |
| upstream_dataset_requirement | 每项外购材料、燃料、电力和处理投入均应连接与所声明地域、技术、牌号/状态和交付边界匹配的上游数据集；使用代理时应披露并说明理由。 |
| disclosure | 声明炉型、金属炉料组成、内部返回料核算、铸型和型芯路线、热处理、能源、污染控制、机械加工、不合格品、检验以及工厂施加的内衬/涂层。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有前景过程 | 纳入场址内原料处理、熔炼与处理、产品直接使用的铸型准备、离心铸造与冷却、所需热处理、清理、机械加工、检验、工厂施加的内衬/涂层、标识、内部搬运、场内污染控制，以及废物至首次场外移交前的管理。 | `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `boundary_route_condition` | 条件性过程和流 | 仅纳入所声明的铸铁或离心铸钢路线，以及参考产品实际使用的炉型、铸型、型芯、热处理、机械加工、检验、内衬和涂层工序。 | `eu-jrc-sf-bref-2024`, `iso-2531-2009`, `astm-a451-a451m-20` |
| `boundary_direct_releases` | 场址排放和废物 | 在产生过程记录直接排放和捕集残余物；不得将上游电力或外购材料排放作为前景基本流重复加入。 | `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `boundary_exclusions` | 下游生命周期 | 工厂门后的运输、安装、使用、维护和生命末期均排除，除非另一个下游模型明确纳入。 | `unsd-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_melting_and_treatment` | 黑色金属炉料准备、熔炼和金属处理 | `required` | 始终纳入；路线特定投入在各流卡中标明 | 熔融铸铁或钢液的前景生产 | 每 1,000 kg 验收合格参考产品 |
| `centrifugal_casting` | 铸型准备、离心铸造和冷却 | `required` | 始终纳入；仅在使用时纳入砂衬和承口型芯 | 空心产品本体的前景成形 | 每 1,000 kg 验收合格参考产品 |
| `heat_treatment` | 退火或钢制品热处理 | `conditional` | 牌号、产品标准、客户规范或所声明制造路线要求时纳入 | 前景热处理 | 每 1,000 kg 验收合格参考产品 |
| `finishing_testing_and_coating` | 清理、机械加工、检验、内衬/涂层和标识 | `required` | 始终纳入；各内衬/涂层投入按销售状态产品有条件纳入 | 前景完工与验收 | 1,000 kg 验收合格参考产品 |

### 过程：黑色金属炉料准备、熔炼和金属处理（`metal_melting_and_treatment`）

#### 输入

##### 产品流

###### 生铁炉料（`mm_pig_iron`）

使用时，记录称量加入铸铁熔炼炉的生铁。

- 选定流：生铁 `439daa27-1495-4a1b-8dec-d9adabba0269`
- 流属性/单位：质量 / kg
- 数量规则：计量加入炉内的收到状态批次质量；仅在批次记录证明未使用生铁时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`, `eu-jrc-sf-bref-2024`

###### 废钢炉料（`mm_scrap_steel`）

记录跨越场址边界并加入任一所声明路线的洁净废钢。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：质量 / kg
- 数量规则：计量外部废钢收到状态质量；排除已处于前景边界内的内部返回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### 冲天炉熔炼用冶金焦（`mm_metallurgical_coke`）

仅对所声明的冲天炉路线记录焦炭。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：质量 / kg
- 数量规则：计量加入冲天炉的焦炭质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_and_energy`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### 熔炼或保温用气态天然气（`mm_natural_gas`）

记录熔炼、保温、回转炉或燃烧器系统消耗的外购气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：熔炼和保温分项计量体积；保留参考状态和分配依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_and_energy`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### 电网供应的交流电（`mm_grid_electricity`）

记录熔炼、保温、加料、抽排及相关过程设备的电力；最终 Tiangong UUID 仍待人工审查。

- 选定流：电网供应的交流电
- 流属性/单位：净热值 / MJ
- 数量规则：使用分表计量；无法分表时采用有文件依据的场址总表分配，并保留原始 kWh 读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_and_energy`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### 石灰石熔剂（`mm_limestone_flux`）

记录用作炉内熔剂的石灰石。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：质量 / kg
- 数量规则：计量作为熔剂加入的批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### 球墨铸铁处理用稀土镁合金（`mm_magnesium_alloy`）

仅当该产品是球墨铸铁实际使用的含镁球化处理合金时记录。

- 选定流：稀土镁合金 `e117530c-8388-4549-b784-fce6ddb8df6b`
- 流属性/单位：质量 / kg
- 数量规则：计量加入铁液的合金质量；保留供应商牌号和镁含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 助熔或精炼用工业氧气（`mm_industrial_oxygen`）

仅在使用计量供氧、吹氧或富氧燃烧时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：计量氧气体积，并声明纯度、压力和参考状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-steel-foundries-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 钢包出料处熔融铸铁（`mm_molten_cast_iron`）

记录转入离心铸造的内部熔融铸铁中间体。

- 选定流：钢包出料处熔融铸铁
- 流属性/单位：质量 / kg
- 数量规则：由钢包称量或铸铁路线金属转移实测质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`

###### 铸造钢包出料处钢液（`mm_molten_steel`）

记录转入离心铸造的内部钢液中间体。

- 选定流：铸造钢包出料处钢液
- 流属性/单位：质量 / kg
- 数量规则：由钢包称量或离心铸钢路线金属转移实测质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-steel-foundries-1995`

##### 废物流

###### 铸铁铸造炉渣（`mm_cast_iron_slag`）

记录铸铁熔炼路线分离的炉渣；尚未确认精确 Tiangong 废物流 UUID。

- 选定流：铸铁铸造炉渣
- 流属性/单位：质量 / kg
- 数量规则：计量离开过程的炉渣质量，扣除有记录的内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 钢渣（`mm_steel_slag`）

记录离心铸钢熔炼和精炼路线分离的钢渣。

- 选定流：钢渣 `a58d033e-31dc-4e26-a4a7-a5c6caeb2766`
- 流属性/单位：质量 / kg
- 数量规则：计量离开过程的钢渣质量，扣除有记录的内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`us-epa-ap42-steel-foundries-1995`

###### 熔炼和金属处理除尘灰（`mm_captured_dust`）

将熔炼和处理废气治理设施捕集的颗粒物记录为废物输出。

- 选定流：除尘灰 `a2bf9717-8d95-46fd-a485-6ecc0e32dfb6`
- 流属性/单位：质量 / kg
- 数量规则：计量干基或收到状态质量，并声明含水基准及处置或回收路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

##### 基本流

###### 直接化石源二氧化碳（`mm_fossil_co2`）

仅记录熔炼和金属处理过程中场内燃料及炉料碳氧化产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用烟道实测，或依据经核实的燃料/炉料数量和供应商碳数据计算；不含上游电力排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### 直接化石源一氧化碳（`mm_fossil_co`）

记录场内治理后直接排放的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用过程特定连续监测，或代表性烟道测试结果乘以实测废气流量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

###### 熔炼治理后排放的颗粒物（`mm_particulate_air`）

记录治理后向空气排放且粒径未特指的总颗粒物；单独报告的粒径组分不得重复计算。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：依据过程特定烟道或无组织排放监测、实测废气流量和运行时间归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

### 过程：铸型准备、离心铸造和冷却（`centrifugal_casting`）

#### 输入

##### 产品流

###### 送入旋转铸型的熔融铸铁（`cc_molten_cast_iron`）

记录铸铁路线的内部熔融铸铁投入。

- 选定流：离心铸造入口处熔融铸铁
- 流属性/单位：质量 / kg
- 数量规则：与 `mm_molten_cast_iron` 的转移量一致，并对有记录的保温损失进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### 送入旋转铸型的钢液（`cc_molten_steel`）

记录离心铸钢路线的内部钢液投入。

- 选定流：离心铸造入口处钢液
- 流属性/单位：质量 / kg
- 数量规则：与 `mm_molten_steel` 的转移量一致，并对有记录的保温损失进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`

###### 砂衬或承口型芯用硅砂（`cc_silica_sand`）

仅当所声明产品使用砂衬铸型或砂型芯时记录硅砂。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：质量 / kg
- 数量规则：进入过程的新砂和外部再生硅砂质量；不计未穿越边界的内部循环砂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_materials`
- 来源：`eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### 离心铸造用电网交流电（`cc_grid_electricity`）

记录铸型旋转、冷却循环、脱模和铸造线辅助设备用电；最终 Tiangong UUID 仍待人工审查。

- 选定流：电网供应的交流电
- 流属性/单位：净热值 / MJ
- 数量规则：使用分表计量；无法分表时采用有文件依据的场址总表分配，并保留原始 kWh 读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_energy`
- 来源：`eu-jrc-sf-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未涂覆离心铸铁管体（`cc_cast_iron_pipe_body`）

记录脱模后转入后续工序的凝固铸铁管材、管道或空心异型材本体。

- 选定流：未涂覆离心铸铁管或空心异型材本体
- 流属性/单位：质量 / kg
- 数量规则：脱模后、热处理和精整前的实测或质量平衡计算输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### 未涂覆离心铸钢管体（`cc_cast_steel_pipe_body`）

记录脱模后转入后续工序的凝固离心铸钢管体。

- 选定流：未涂覆离心铸钢管体
- 流属性/单位：质量 / kg
- 数量规则：脱模后、热处理和精整前的实测或质量平衡计算输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### 废物流

###### 废铸造砂（`cc_spent_foundry_sand`）

记录从砂衬或型芯中移除且经内部再生后离开过程的废砂。

- 选定流：废铸造砂
- 流属性/单位：质量 / kg
- 数量规则：计量离开内部再生循环的砂，并声明含水率和处理路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

##### 基本流

###### 离心铸造治理后排放的颗粒物（`cc_particulate_air`）

记录铸型准备、浇注、冷却和清芯过程经治理后排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：按实测产量对过程特定监测或代表性烟道/无组织测试进行归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`eu-jrc-sf-bref-2024`, `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

### 过程：退火或钢制品热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 进入热处理的铸铁管体（`ht_cast_iron_pipe_body`）

仅在采用退火或其他所声明热处理时记录内部铸铁管体。

- 选定流：热处理前离心铸铁管体
- 流属性/单位：质量 / kg
- 数量规则：转入热处理炉的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`dipra-cast-iron-pipe-handbook-1978`, `eu-jrc-sf-bref-2024`

###### 进入热处理的离心铸钢管体（`ht_cast_steel_pipe_body`）

当所声明钢牌号要求热处理时记录内部钢制管体。

- 选定流：热处理前离心铸钢管体
- 流属性/单位：质量 / kg
- 数量规则：转入热处理炉的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

###### 热处理用气态天然气（`ht_natural_gas`）

热处理炉采用燃气时，记录其消耗的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：计量热处理炉用气体积，并声明参考状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 热处理用电网交流电（`ht_grid_electricity`）

使用电热处理炉或电气辅助设备时记录电力；最终 Tiangong UUID 仍待人工审查。

- 选定流：电网供应的交流电
- 流属性/单位：净热值 / MJ
- 数量规则：使用分表计量或有文件依据的分配，并保留原始 kWh 读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 淬火补充用工艺水（`ht_process_water`）

仅在水淬时记录工艺水净补充量；未穿越边界的循环水不计。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量补充水或根据水箱平衡计算；以体积计量时记录密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`astm-a451-a451m-20`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理后离心铸铁管体（`ht_heat_treated_cast_iron_body`）

记录完成规定热处理周期后的内部铸铁管体。

- 选定流：热处理后离心铸铁管体
- 流属性/单位：质量 / kg
- 数量规则：将输出质量与入炉质量和有记录的不合格品核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`dipra-cast-iron-pipe-handbook-1978`, `eu-jrc-sf-bref-2024`

###### 热处理后离心铸钢管体（`ht_heat_treated_cast_steel_body`）

记录完成规定热处理和淬火/冷却周期后的内部钢制管体。

- 选定流：热处理后离心铸钢管体
- 流属性/单位：质量 / kg
- 数量规则：将输出质量与入炉质量和有记录的不合格品核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### 废物流

##### 基本流

###### 热处理直接化石源二氧化碳（`ht_fossil_co2`）

仅记录场内热处理燃料燃烧产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用烟道实测，或依据经核实的燃气量和供应商碳数据计算；不含上游电力排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`eu-jrc-sf-bref-2024`

### 过程：清理、机械加工、检验、内衬/涂层和标识（`finishing_testing_and_coating`）

#### 输入

##### 产品流

###### 进入精整的铸铁管体（`ft_cast_iron_pipe_body`）

记录进入清理和精整的铸铁管体；适用时为热处理后状态。

- 选定流：精整前铸铁管或空心异型材本体
- 流属性/单位：质量 / kg
- 数量规则：实测或质量平衡计算的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`dipra-cast-iron-pipe-handbook-1978`

###### 进入精整的离心铸钢管体（`ft_cast_steel_pipe_body`）

记录进入机械加工和精整的离心铸钢管体；适用时为热处理后状态。

- 选定流：精整前离心铸钢管体
- 流属性/单位：质量 / kg
- 数量规则：实测或质量平衡计算的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_mass_balance`
- 来源：`astm-a451-a451m-20`

###### 精整和检验用电网交流电（`ft_grid_electricity`）

记录清理、机械加工、压力检验、内衬/涂层、通风和标识用电；最终 Tiangong UUID 仍待人工审查。

- 选定流：电网供应的交流电
- 流属性/单位：净热值 / MJ
- 数量规则：使用分表计量或有文件依据的分配，并保留原始 kWh 读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`dipra-cast-iron-pipe-handbook-1978`, `astm-a451-a451m-20`

###### 检验、清理或砂浆制备用工艺水（`ft_process_water`）

记录水压检验、清理或水泥砂浆制备中穿越边界的工艺水净用量；原始记录应区分用途。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：按用途记录净补充水质量，不计仍处于场址系统内的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`dipra-cast-iron-pipe-handbook-1978`, `iso-2531-2009`

###### 内衬用普通硅酸盐水泥（`ft_portland_cement`）

仅当工厂施加水泥砂浆内衬且实际使用该精确水泥牌号时记录；否则应另行核验实际原子水泥流。

- 选定流：水泥，普通硅酸盐水泥，52.4MPa `5333f41c-446a-4d3f-82f3-a53e879c0a12`
- 流属性/单位：质量 / kg
- 数量规则：计量掺入的干水泥质量及有记录的制备损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`iso-2531-2009`, `dipra-cast-iron-pipe-handbook-1978`

###### 水泥砂浆内衬用硅砂（`ft_silica_sand`）

仅当工厂施加水泥砂浆内衬时记录其中掺入的硅砂。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：质量 / kg
- 数量规则：计量掺入的干砂质量及有记录的制备损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`iso-2531-2009`, `dipra-cast-iron-pipe-handbook-1978`

###### 金属涂层用特高纯锌（`ft_zinc_metal`）

仅当该精确锌产品作为所声明工厂金属涂层施加时记录。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：质量 / kg
- 数量规则：根据批次领料和涂层回收记录计算施加锌质量，并声明牌号和涂层体系
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`iso-2531-2009`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门验收合格参考产品（`ft_reference_product`）

仅记录通过所声明尺寸、力学性能、承压/服役和表面状态验收的成品。

- 选定流：铸铁管、管材和空心型材，离心铸钢管和管材 `122e65ff-cac1-4c63-a199-7d204800d6f3`
- 流属性/单位：质量 / kg
- 数量规则：固定归一化输出 1,000 kg 验收合格产品净质量；保留归一化前批次实测输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`unsd-cpc-3-0-structure-2025`, `iso-2531-2009`, `astm-a451-a451m-20`

##### 废物流

###### 铸铁精整产生的铁金属切屑（`ft_iron_machining_chips`）

记录铸铁产品机械加工移除并离开精整过程的铁切屑。

- 选定流：铁金属切屑 `8aa263a4-39e5-475e-966b-d967747ecc9c`
- 流属性/单位：质量 / kg
- 数量规则：计量切屑质量，并声明附着冷却液/水分基准及内部回炉路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`

###### 铸钢精整产生的钢屑（`ft_steel_machining_chips`）

记录离心铸钢产品机械加工移除并离开精整过程的钢屑。

- 选定流：钢屑 `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- 流属性/单位：质量 / kg
- 数量规则：计量切屑质量，并声明附着冷却液/水分基准及内部回炉路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-sf-bref-2024`, `astm-a451-a451m-20`

##### 基本流

###### 精整治理后排放的颗粒物（`ft_particulate_air`）

记录清理、磨削、抛喷丸和机械加工经治理后排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：采用过程特定监测、代表性测试或有文件依据的捕集质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_releases`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 多产品场址作业 | 优先按炉体、铸造线、热处理批次和精整线细分过程并直接计量。只有在无法进一步进行技术合理细分后，才分配共享计量值。 |  |
| `allocation_shared_operations` | 无法避免的共享负荷 | 按计量能源、运行时间、处理质量或机器工时等因果物理驱动因素分配。若不存在可辩护的物理关系且多个可销售产品离开系统，则采用有文件依据的经济分配，并报告质量分配敏感性结果。 |  |
| `allocation_internal_returns` | 场内返回的浇冒口、不合格品、切屑和粉尘 | 将内部返回料作为内部流：保留其生成负荷，记录重熔能源和收得率损失，不在本产品系统内计入替代产品抵扣。 | `eu-jrc-sf-bref-2024` |
| `allocation_exported_residues` | 离开场址的炉渣、粉尘、砂或金属残余物 | 根据前景处置和市场证据，将各外运残余物分别认定为废物或共产品。本工厂门清单内不得计入避免负荷抵扣；任何下游替代应置于明确独立的情景中。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_materials` | `metal_melting_and_treatment` | 外部金属料、熔剂和处理添加剂 | 磅单、批次单和供应商证书 | 材料身份；供应商牌号；批次号；毛重/皮重/净重；水分或含量基准；炉体；产品路线 | 将校准衡器磅单与批次单和采购记录核对 | kg 及所声明成分基准 | 每炉次 | 完整报告期 | 服务于所声明产品的全部炉体 | 按精确材料和路线汇总外部投入；内部返回料不计入外部投入 | 衡器校准；供应商证书；批次核对 |
| `cp_fuels_and_energy` | `metal_melting_and_treatment` | 焦炭、天然气和电力 | 加料单、发票和过程仪表 | 燃料身份；焦炭质量；气体体积；温压约定；kWh；仪表编号；炉体；运行期 | 直接称量或分表计量；共享仪表无法细分时记录分配 | kg、m3、kWh 和 MJ | 每批次或仪表间隔 | 完整报告期 | 熔炼、保温及相关治理设备 | 按能源载体分别汇总，并按 `calc_electricity_conversion` 换算 kWh | 仪表校准；发票核对；分配工作表 |
| `cp_internal_mass_balance` | 所有前景过程 | 熔融金属和管体中间体 | 钢包、称量、生产和不合格品记录 | 路线；批次；投入质量；输出质量；返回料；泼溅损失；不合格品；转移点 | 核对连续过程阶段记录，不为内部返回料生成新的外部上游负荷 | kg | 每批次 | 完整报告期 | 所有纳入产线 | 按路线和阶段汇总；披露无法解释的质量平衡差异 | 校准衡器；签字批次核对；不合格品日志 |
| `cp_casting_materials` | `centrifugal_casting` | 砂衬和型芯材料 | 领用、返回和再生记录 | 砂身份；干基/收到状态质量；铸型类型；型芯使用；回收质量；废弃质量 | 称量新砂/外部再生砂，并核对内部循环 | kg | 每批次或班次 | 完整报告期 | 所有纳入离心铸造机 | 按精确产品汇总外部砂；内部循环不作为新投入 | 衡器校准；再生日志；库存核对 |
| `cp_casting_energy` | `centrifugal_casting` | 铸造线电力 | 分表或场址总表分配记录 | kWh；仪表编号；铸造机；冷却系统；运行时间；产品批次 | 优先直接分表；否则按实测机器时间和额定/核实负荷分配 | kWh 和 MJ | 仪表间隔 | 完整报告期 | 旋转铸型、冷却、脱模和直接辅助设备 | 汇总读数并按 `calc_electricity_conversion` 换算 | 仪表校准；机器工时日志；分配工作表 |
| `cp_heat_treatment_records` | `heat_treatment` | 热处理投入 | 炉温工艺、燃气/电表和淬火补水记录 | 牌号；批次；周期；温度/时间记录；燃气体积；kWh；补水；淬火路线 | 将每个热处理周期与产品批次和过程仪表关联 | m3、kWh、MJ 和 kg | 每周期 | 完整报告期 | 所有纳入热处理炉 | 按路线汇总并归一化到同批次合格产品 | 校准仪表；核实炉温曲线；淬火槽平衡 |
| `cp_finishing_records` | `finishing_testing_and_coating` | 加工、检验及施加的内衬/涂层投入 | 产线仪表、批次领料、检验和涂层记录 | 产品批次；kWh；补水；水泥/砂/锌身份和质量；施加体系；回收量；检验状态 | 将领用材料和公用工程仪表与合格品、不合格品核对 | kg、kWh 和 MJ | 每批次或班次 | 完整报告期 | 所有纳入精整和检验线 | 按路线和表面体系汇总精确投入；排除未使用的内衬/涂层行 | 仪表/衡器校准；材料证书；涂层和检验日志 |
| `cp_waste_outputs` | 所有前景过程 | 分别识别的废物输出 | 废物磅单、内部返回日志和移交联单 | 废物身份；过程来源；质量；水分；去向；内部返回；危险性分类 | 称量每项原子废物流，并核对移交量和内部返回量 | kg | 每次移交并按月核对 | 完整报告期 | 所有纳入过程区域 | 按精确废物身份和去向汇总；不得合并炉渣、砂、粉尘或金属切屑 | 校准衡器；签字联单；库存变化核对 |
| `cp_direct_air_releases` | 所有前景过程 | 直接基本流排放 | 连续监测、烟道测试、无组织测试和经核实燃料碳记录 | 物质；过程；浓度；废气流量；运行时间；治理状态；燃料/炉料量；碳数据 | 采用场址特定监测或代表性合规测试；仅用经核实前景活动和供应商数据进行碳计算 | kg、浓度和流量单位 | 连续或每个代表性监测期 | 覆盖报告期的代表性工况 | 所有纳入排气筒和物料无组织源 | 按物质和过程计算排放质量；避免总颗粒物与粒径组分重叠 | 仪表校准；实验室报告；采样计划；工况匹配 |
| `cp_reference_product` | `finishing_testing_and_coating` | 验收合格产品输出 | 生产、称量和最终检验记录 | 产品编号；路线；牌号；尺寸；标准；内衬/涂层；毛重/净重；验收结果；不合格原因 | 仅汇总经校准称量的合格产品净质量 | kg | 每件或每批合格品 | 完整报告期 | 所有纳入精整线 | 按 `calc_reference_normalization` 归一化所有交换 | 衡器校准；尺寸/力学/压力检验记录；放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化量 = 报告期交换量 × 1,000 / 报告期验收合格产品净质量。先在所声明路线和产品组内计算，再汇总。 | 精确交换量；验收合格产品净质量 | 每 1,000 kg 验收合格参考产品的量 |  |
| `calc_electricity_conversion` | 电力记录 | 电力（MJ）= 电表读数（kWh）× 3.6。保留 kWh 和换算轨迹。 | 电表 kWh | MJ |  |
| `calc_gas_reference_condition` | 天然气和氧气 | 只有在记录温度、绝对压力以及压缩性/参考状态约定时才换算实测气体体积；否则保留实测状态并标记为不可比。 | 实测体积；温度；压力；参考状态约定 | 所声明状态下的 m3 |  |
| `calc_direct_fossil_co2` | 直接燃料和炉料碳氧化 | 代表性足够时采用烟道实测质量；否则依据经核实的前景燃料/炉料量和供应商化石碳数据计算，仅扣除有记录的产品留碳或另行计量的含碳输出；不得把 UUID 身份当作排放因子。 | 前景活动；供应商碳数据；留碳记录 | kg 直接化石源二氧化碳 | `eu-jrc-sf-bref-2024` |
| `calc_mass_balance` | 每个前景过程 | 在一致的水分和组成基准上核对产品、废物输出与材料投入和内部转移；调查差异，不得将无法解释的差异摊入各流。 | 校准投入/输出质量；库存变化；内部返回料 | 有文件依据的过程质量平衡检查 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及所有投入/输出 | 保留精确材料/流身份、路线、牌号、状态、供应商规格和去向。不得用笼统材料或废物类别代替缺失行。 | 供应商证书、Tiangong UUID 审计、批次记录和废物联单 |
| `dq_temporal` | 所有前景数据 | 覆盖有代表性的连续报告期，通常至少 12 个月；以生产期代表完整生产的短周期生产可使用较短完整生产期，但须说明理由，并记录停机和异常批次。 | 带日期的仪表、生产、采购、检验和废物记录 |
| `dq_technology` | 炉体、铸造、处理和精整 | 证明记录对应所声明炉型、离心铸造机、铸型路线、热处理工艺和表面体系。 | 设备清单、工艺流程图、批次谱系和产线仪表映射 |
| `dq_completeness` | 清单 | 核对外购投入、内部返回料、合格产品、不合格品和废物；列出每项直接计量的受监管排放，并解释任何预期但未计量的排放。 | 质量/能源平衡、排放清单和完整性检查表 |
| `dq_measurement` | 计量量值 | 使用校准仪器，并保留原始读数、单位、换算步骤、仪表覆盖和分配工作表。 | 校准证书、原始导出和计算工作簿 |
| `dq_proxy` | 上游数据集 | 记录每个上游数据集在地域、技术、时间和产品状态方面的匹配情况；披露并说明每个代理。 | 数据集映射登记表和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | 确认产品为铸铁制品，或管体本身经离心铸造的钢制管材/管道；排除管件和锻轧/焊接路线；并确认参考产品 UUID、质量属性和 kg 单位与本 PCR 一致。 | `unsd-cpc-3-0-structure-2025`, `eu-jrc-sf-bref-2024` |
| `validation_qualifiers` | 必需元数据 | 路线、牌号、尺寸、产品标准/服役等级、炉型、铸型、热处理、机械加工、内衬/涂层、地域或报告期任一缺失时，完整性校验失败。 | `iso-2531-2009`, `astm-a451-a451m-20` |
| `validation_processes` | 过程覆盖 | 必须纳入熔炼/处理、离心铸造和精整/检验。批次或标准记录表明采用热处理时必须纳入；销售状态产品存在内衬/涂层时必须纳入对应的各项投入。 | `eu-jrc-sf-bref-2024`, `dipra-cast-iron-pipe-handbook-1978`, `astm-a451-a451m-20` |
| `validation_atomic_inventory` | 清单行 | 确认每行是一个原子交换，且具有方向、流类型、属性、单位、数量生成规则、适用范围、归一化基准、证据和采集协议；拒绝合并材料、能源载体、废物或排放的行。 |  |
| `validation_mass_energy` | 平衡和归一化 | 确认 1,000 kg 参考输出；核对内部转移和返回料；调查无法解释的质量差异；将各能源载体记录分别与仪表核对，不得重复计算。 |  |
| `validation_direct_releases` | 基本流 | 确认直接化石源二氧化碳、化石源一氧化碳和颗粒物行仅含所指过程的场内排放；不得重复计入上游电力/材料排放或重叠颗粒物粒径组分。 | `us-epa-ap42-gray-iron-foundries-2003`, `us-epa-ap42-steel-foundries-1995` |
| `validation_ranges` | 定量 QA | 本候选 PCR 不含外部经验数量范围。不得从单一案例、单一出版物或边界不相容路线推断范围；在两项相互独立且边界相容的原始来源完成审查前，使用前景采集值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于需要所声明铸铁或离心铸钢产品工厂门清单的产品碳足迹、LCA 过程数据集和生命周期模型 |
| allowed_use | 仅在产品路线、牌号/状态、尺寸、标准/服役等级、地域、技术、期间和表面体系与下游研究匹配，或经透明调整时使用 |
| excluded_use | 不得用于焊接、锻轧、轧制、挤压或穿孔无缝钢管；管件；已安装管道；亦不得在未增加相应模型时用于下游使用和生命末期 |
| required_metadata | PCR id/版本；参考产品 UUID；路线；牌号；尺寸；产品标准和服役等级；炉型和铸型技术；热处理；机械加工；检验；内衬/涂层；地域；期间；分配；上游数据集映射 |
| required_quality_disclosure | 一手数据覆盖；仪表和衡器覆盖；质量/能源核对；内部返回料处理；不合格率；直接排放方法；废物去向；代理使用；未解决 UUID；缺少外部经验范围 |
| update_trigger | 炉型或铸造技术、金属牌号族、炉料组成、热处理工艺、污染控制、加工余量、产品标准、内衬/涂层体系、地域、分配变化，或出现足以解决 UUID/范围缺口的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，代码 41291。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 正式分类身份及相邻产品类别排除 |
| `eu-jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Smitheries and Foundries Industry*，2024。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf（检索于 2026-09-04） | 离心铸造定义；炉型、铸型、铸造、热处理、精整、资源和排放过程分解 |
| `us-epa-ap42-gray-iron-foundries-2003` | `official_guidance` | 美国环境保护署，AP-42 第 12.10 节，*Gray Iron Foundries*，2003 年 5 月。https://www.epa.gov/sites/default/files/2020-11/documents/c12s10.pdf（检索于 2026-09-04） | 铸铁炉料、熔炼、球化处理、炉渣、砂、精整和直接排放候选 |
| `us-epa-ap42-steel-foundries-1995` | `official_guidance` | 美国环境保护署，AP-42 第 12.13 节，*Steel Foundries*，1995 年 1 月。https://www.epa.gov/sites/default/files/2020-11/documents/c12s13.pdf（检索于 2026-09-04） | 铸钢炉料、电炉熔炼、处理、精整、废物和直接排放候选 |
| `dipra-cast-iron-pipe-handbook-1978` | `handbook` | 美国球墨铸铁管研究协会，*Cast Iron Pipe Handbook*，第 5 版，1978。https://dipra.org/wp-content/uploads/2025/07/Cast_Iron_Pipe_Handbook_1978_-_Fifth_Edition.pdf（检索于 2026-09-04） | 管材离心铸造、退火、清理、水压检验、尺寸检验、涂层、内衬和标识顺序 |
| `iso-2531-2009` | `standard` | ISO 2531:2009，*Ductile iron pipes, fittings, accessories and their joints for water applications*。https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-2531-2009-en.html（GSO 标准信息管理系统托管的 ISO 原始预览核验于 2026-09-04） | 球墨铸铁管规范、尺寸、力学性能、涂层和性能检验限定信息 |
| `astm-a451-a451m-20` | `standard` | ASTM A451/A451M-20，*Standard Specification for Centrifugally Cast Austenitic Steel Pipe for High-Temperature Service*。https://store.astm.org/a0451_a0451m-20.html（正式摘要和范围核验于 2026-09-04） | 离心铸钢管热处理、机械加工、化学成分、水压和拉伸试验限定信息 |
| `cn-nbs-industrial-classification-2017` | `official_guidance` | 中国国家统计局，《国民经济行业分类》（GB/T 4754-2017）正式 PDF。https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf（检索于 2026-09-04） | 铸铁直管和铸铁空心异型材的专业中文术语 |
| `cn-samr-centrifugally-cast-steel-2026` | `standard` | 国家市场监督管理总局，国家标准记录《离心铸钢及合金铸件 第1部分：通用试验与公差》。https://std.samr.gov.cn/gb/search/gbDetailedCNF?id=511EBC5967EA9318E06397BE0A0AFBD5（核验于 2026-09-04） | 离心铸钢产品的专业中文术语 |
